# KickStart 2019 - Round B : Building Palindromes

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main(){
    ios::sync_with_stdio(false);
    cin.tie(0);

    int T;
    cin>>T;
    for(int tt=1 ; tt<=T ; tt++){
        int n,q;
        cin>>n>>q;
        string s;
        cin>>s;
        vector<vector<int>> pref(n+1, vector<int>(26));
        for(int i=0;i<n;i++){
            for(int j=0;j<26;j++){
                pref[i+1][j] = pref[i][j];
            }
            ++pref[i+1][s[i]-'A'];
        }
        int l, r, res=0;
        while(q--){
            cin>>l>>r;
            int abs = 0;
            for(int i=0;i<26;i++){
                if((pref[r][i]-pref[l-1][i])%2==1) abs++;
            }
            if(abs<=1) res++;
        }
        cout<<"Case #"<<tt<<": "<<res<<'\n';
    }
}
```
