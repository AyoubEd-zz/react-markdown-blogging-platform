# 985. Sum of Even Numbers After Queries
Posted on 17-03-19
tags =  #precalculate_and_update

A common problem type comes as follow, calculate a value and given a number of queries that update the original ds, calculate it again. Most of the time, other than calculating the value from scratch after each query, we calculate it at the beginning and find a way to update it each time.

```
class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& A, vector<vector<int>>& queries) {
        vector<int> v(queries.size());
        int sum = 0;
        for(int i:A){if(i%2==0)sum+=i;}
        for(int i=0; i<queries.size() ; i++){
            int val = queries[i][0], idx = queries[i][1];
            if(val%2==0 && A[idx]%2==0){
                sum+=val;
            }
            if(val%2!=0 && A[idx]%2==0)sum-=A[idx];
            A[idx]+=val;
            if(val%2!=0 && A[idx]%2!=0) sum+=A[idx];
            v[i]=sum;
        }
        return v;
    }
};
```
