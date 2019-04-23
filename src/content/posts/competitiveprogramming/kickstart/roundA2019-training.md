# KickStart 2019  - Round A Training Problem 

```cpp
#include<bits/stdc++.h>
using namespace std;
int cs = 1;

void pickteam(int N, int P, vector<int> v){
    sort(v.begin(), v.end());
    int sum =0, mn = INT_MAX;
    for(int i=0 ; i<P ; i++) sum+=v[i];
    int i;
    for(i=P ; i<N ; i++){
        mn = min(mn, P*v[i-1] - sum);
        sum = sum + v[i] - v[i-P];
    }
    mn = min(mn, P*v[i-1] - sum);
    cout<<"Case #"<<cs++<<": "<<mn<<"\n";
}

int main(){
    int T, N, P;
    vector<int> v;
    cin>>T;
    while(T--){
        cin>>N>>P;
        v.resize(N);
        for(int i=0;i<N;i++) cin>>v[i];
        pickteam(N, P, v);
    }
}
```