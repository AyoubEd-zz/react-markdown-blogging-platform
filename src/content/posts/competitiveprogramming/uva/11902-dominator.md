# UVa 11902 - Dominator

```
#include <bits/stdc++.h>
using namespace std;

vector<int> visited(100, 0);
vector<int> visited2(100, 0);

void dfs(int s,vector<vector<int>> v){
    if(visited[s]==1) return;
    visited[s]=1;
    for(int a:v[s]){
        dfs(a, v);
    }
}

void dfs2(int s,vector<vector<int>> v, int i){
    if(s==i || visited2[s]==1) return;
    visited2[s]=1;
    for(int a:v[s]){
        dfs2(a, v, i);
    }
}

void printRes(vector<vector<char>> res){
    int n = res[0].size();

    for(auto v:res){
        cout<<"+";
        for(int i=0 ; i<2*res[0].size()-1 ; i++){
            cout<<"-";
        }
        cout<<"+\n";
        for(auto a:v) cout<<"|"<<a;
        cout<<"|\n";
    }
    cout<<"+";
    for(int i=0 ; i<2*res[0].size()-1 ; i++){
        cout<<"-";
    }
    cout<<"+\n";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int T, N, temp;
    cin>>T;
    for(int f=1 ; f<=T ; f++){
        cout<<"Case "<<f<<":\n";
        cin>>N;
        vector<vector<int>> v(N);
        for(int i= 0 ;i<N ; i++){
            for(int j = 0 ; j<N ; j++){
                cin>>temp;
                if(temp)v[i].push_back(j);
            }
        }
        vector<vector<char>> res(N, vector<char>(N, 'N'));
        visited = vector<int>(100, 0);
        dfs(0, v);
        for(int i=0 ; i<N ; i++){
            visited2 = vector<int>(100, 0);
            visited2[i]=0;
            dfs2(0, v, i);
            for(int j=0 ; j<N ; j++){
                if(visited[j]!=visited2[j]) res[i][j]='Y';
            }
        }
        printRes(res);
    }
    return 0;
}
```