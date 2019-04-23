# Building my first API using Serverless, Typescript and GraphQl

Serverless is a new trend for the deployment of cloud applications. Recently it has gained much popularity mainly due to the shift of enterprise application architectures to containers and microservices.
The “serverless” term clearly does not mean that our services no longer need servers to run on(Although that would be cool 😝), but means that we no longer need provisioning of infrastructure and ongoing management of our servers, this in addition to the on-demand billing system, cuts down dramatically the cost related to compute resources.

![The popularity of “serverless” as reported by Google Trends](https://cdn-images-1.medium.com/max/2318/1*Mne1f_V8AYm-adXwKemD6Q.png)_The popularity of “serverless” as reported by Google Trends_

The serverless framework is a recent development in the serverless ecosystem. It is an open-source CLI for building and deploying serverless applications, with over 6 million deployments handled to date.
Serverless is provider agnostic, so you only have to develop one version of your application to run anywhere you want it too.
So without further ado, let’s dive into some code.

### Getting started with Serverless

In this tutorial, we are using :

- **Typescript**

- **AWS Lambda**

- **GraphQl(Apollo)**

- [\*\*Serverless Framework](https://serverless.com/)\*\*

- **Redis**

First, let’s install Serverless framework on our machine.

Next, let’s set up our AWS credentials.

Go to your [\*AWS console](https://console.aws.amazon.com/console/home) > Security, Identity, & Compliance > IAM > Users\*. Create a new user with programmatic access( the one that enables an **access key ID** and **secret access key**). Click on next to set up permissions, attach existing policies and give it “administrator access”. Skip tags, and then click on “Create User”. We get a pair of keys that we have to export as environment variables on our machine so they would be accessible to Serverless and the AWS SDK in your shell.

In your terminal, enter the following:

—

### Creating our Boilerplate

Now that we have our environment ready let’s start by creating the boilerplate of our application.

Serverless provides a variety of examples to generate automatically, for our case we are going to use the **aws/typescript** one.

One thing to add, we want to be able to test our application locally before deploying it to **Amazon Lambda**, so we’re going to use a package that emulates serverless behavior on your machine.

We have to add **serverless-offline** to the list of plugins in our YAML file. It should look something like this:

    *(serverless.yml)*
    plugins:
      - serverless-webpack
      - serverless-offline

Now our service is ready to run and receive its first request.

    $ sls offline start --port 8080

Running the previous will get you something like this:

![Starting serverless Locally](https://cdn-images-1.medium.com/max/2680/1*LcDJd7a3UKLp_KGAeM110w.png)_Starting serverless Locally_

Enter [http://localhost:3000/hello](http://localhost:3000/hello) in your browser:

![](https://cdn-images-1.medium.com/max/2000/1*iWkvKy7ydWTO84Eqh6C5Cg.png)

Woohoo, you just made your first serverless function.

If you look at our _serverless.yml_ file, you’ll notice that we have a function called Hello and it’s triggered by an HTTP event.

Now let’s go ahead and integrate GraphQl…

### Integrating Apollo(GraphQl)

First Install Apollos’ package for Lambda:

    npm install apollo-server-lambda@rc graphql --save

Change your _Handler.ts_ to this:

and update _serverless.yml_:

One more thing, in your _webpack.config.js _, you have to add one little change. Otherwise you’ll be flooded with errors 😆:

add ‘.mjs’ to the beginning of the extensions list

    resolve: {

    extensions: ['.mjs','.js', '.jsx', '.json', '.ts', '.tsx'],

    }

Our second part is now finished, we only have to test our work.

[GraphQl Playground](https://github.com/prisma/graphql-playground/releases):

![](https://cdn-images-1.medium.com/max/2372/1*V3G8CNxKbbieWGtJU4vVDA.png)

Awesome, now that we have GraphQl integrated, let’s set up our Database.

### Running a Redis image on EC2

In the following, we are going to create an EC2 instance and start a Redis instance with Docker.

There are a lot of [guides](https://medium.com/@GalarnykMichael/aws-ec2-part-2-ssh-into-ec2-instance-c7879d47b6b2) out there showing how to create an EC2 instance, so we are not going to delve into that(just make sure you choose a Linux instance, I’m choosing Ubuntu Server 18.04 LTS).

Once you got your instance ready, you want to connect to it using SSH. In the following, I am going to use Ubuntu, for windows users you can use [PuTTY](https://www.putty.org/).

From the directory where you saved your private key file, open a terminal and run the following command.

    ssh -i "keyName.pem" [your_instance_host](http://xxx.compute.amazonaws.com)

![Connect to the EC2 instance](https://cdn-images-1.medium.com/max/2732/1*aAKmTv5gtoU5cee4o6e1lA.png)_Connect to the EC2 instance_

Then install Docker:

    $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    $ sudo add-apt-repository "deb [arch=amd64] [https://download.docker.com/linux/ubuntu](https://download.docker.com/linux/ubuntu) $(lsb_release -cs) stable"
    $ sudo apt-get update
    $ apt-cache policy docker-ce
    $ sudo apt-get install -y docker-ce

Docker is now installed, the daemon started, and the process enabled to start on boot. Check that it’s running:

    $ sudo systemctl status docker

![Docker running on EC2](https://cdn-images-1.medium.com/max/2732/1*NlHwIxcR6dJHIB49OnZqpQ.png)_Docker running on EC2_

Let’s run a Redis image:

    $ docker run --volume /docker/redis-data:/data -p 6379:6379 -d redis   redis-server --appendonly yes

![Redis Image on Docker](https://cdn-images-1.medium.com/max/2732/1*N-smLEdQLvkSXm3BLzTISg.png)_Redis Image on Docker_

Let’s check it:

    $ sudo docker container ls

![Redis Running on EC2](https://cdn-images-1.medium.com/max/2732/1*ssvZ2bqM4mpsFpc1ZuWZ_A.png)_Redis Running on EC2_

Finally, let’s start working on our API.

### Building our API

_Handler.ts:_

To begin, let’s import Apollo Server for lambda:

    import { ApolloServer, gql } from 'apollo-server-lambda';

Next, we define our **queries** and **mutations. **We are going to create a commenting service; hence we have a “Comment” type.

    const typeDefs = gql`
      type Comment{
        msgId: Int
        userId : String
        content : String
        createdAt : String
        deleted : Boolean
      }
      type Query {
        get(itemId: String): [Comment]
      }
      type Mutation {
        add(itemId: String, userId:String, content:String): [Comment]
        edit(itemId: String, msgId:Int,userId:String, content:String): [Comment]
        delete(itemId: String, msgId:Int, userId:String) : [Comment]
      }
    `;

The last thing is our resolvers:

    const resolvers = {
      Query: {
        get: (root, args) => {
          //get from comment service
        },
      },
      Mutation: {
        add: (roots, args) => {
          //add from comment service
        },
        edit: (roots, args) => {
          //edit from comment service
        },
        delete: (roots, args) => {
          //delete from comment service
        }
      }
    };e

Before creating our commenting service, let’s create a service that connects to the Redis database(_comment.storage.ts_).

Let’s install Redis

    npm i redis --save

Add a file called* types.ts *to the root of your project:

then** \***comment.storage.ts:\*

Now let’s implement our _comment.service.ts:_

It doesn’t have much, but this service is going to be useful if we want to add some logic and filtering.

Return to our *Handler.ts. *We are going to implement the missing functions:

Now our logic is complete, all we have to do is configure Redis port and host.

Let’s create a _config_ folder, inside create a* prod.json*, u can create later a file for every stage(maybe one for a local development environment with a local Redis instance), we’re going to see how to configure that in our _serverless.yml._

    *(prod.json)*

    {
        "redis":{
            "host" : "Your EC2 instance Public IP",
            "port" : "6379"
        }
    }

ps: ec2–a–b–c–d.ec2_region.compute.amazonaws.com then your IP is a.b.c.d

otherwise just check it out on the aws console.

Check the connection to your Redis database.

    $ sudo apt-get install redis-tools

then test the connection:

![](https://cdn-images-1.medium.com/max/2000/1*TZ-9mXmbHsicAGu7B8t_Ww.png)

Change your serverless.yml, so it can grab the specific configuration file when stage changes.

Fire up your local serverless function

    sls offline start

and test your functions:

![](https://cdn-images-1.medium.com/max/2732/1*PafVcahZz32h6QDNHbab7Q.png)

![](https://cdn-images-1.medium.com/max/2732/1*Uvr052hwneGo8qxK9wGOWA.png)

Feel free to test the other functions as you wish.

Finally, our app is done 😎 ! Let’s deploy it.

ps: if you face an error like this one

    Module not found: Error: Can't resolve 'hiredis'...

Create a folder named “aliases” at the root of your project, within this folder create a file _hiredis.js_ with the following content:

    export default null

and then add this to your _webpack.config.js:_

    extensions: .............................,

    alias: {

    'hiredis': path.join(__dirname, 'aliases/hiredis.js')

    }

    },

### Deploying to AWS Lambda

Were you afraid of the deployment? Let me show you how easy it is to deploy your app with Serverless.

Literally, all you have to do is type in your terminal:

    sls deploy -v --stage prod

![](https://cdn-images-1.medium.com/max/2732/1*GBog_ZgIpb6GVYnm6yC4ng.png)

Grab the endpoint and test your service.

Check out the Github Repo [here](https://github.com/AyoubEd/serverless_typescript_graphQl_commentingService)!
