# UVa 11831 - Sticker Collector Robot 

```cpp
#include <bits/stdc++.h>
using namespace std;

char turn(char ch, char poch){
    char arr[] = {'N', 'L', 'S', 'O'};
    int k, i;
    if(ch=='D') k = 1;
    else if(ch=='E') k=-1;
    if(poch=='N') i=0;
    else if(poch=='L') i=1;
    else if(poch=='S') i=2;
    else if(poch=='O') i=3;
    i = (4+((i+k)%4))%4;
    return arr[i];
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int N, M, S;
    char c;
    while(cin>>N>>M>>S && N!=0 && M!=0 && S!=0){
        vector<int> po(2);
        char poch;
        int res=0;
        vector<vector<char>> v(N, vector<char>(M));
        for(int i=0 ; i<N ; i++){
            for(int j=0 ; j<M ; j++){
                cin>>v[i][j];
                if(v[i][j]!='.' && v[i][j]!='*' && v[i][j]!='#'){
                    po[0] = i;
                    po[1] = j;
                    poch = v[i][j];
                }
            }
        }
        vector<char> instructs;
        while(S--){
            cin>>c;
            instructs.push_back(c);
        }
        for(char ch:instructs){
            if(ch=='D' || ch=='E'){
                poch = turn(ch, poch);
            }
            else if(ch=='F'){
                int ti, tj;
                if(poch=='N'){
                    ti=-1; tj=0;
                }else if(poch=='L'){
                    ti=0; tj=1;
                }else if(poch=='S'){
                    ti=1; tj=0;
                }else if(poch=='O'){
                    ti=0; tj=-1;
                }
                if(ti+po[0]>=0 && ti+po[0]<N && tj+po[1]>=0 && tj+po[1]<M && v[ti+po[0]][tj+po[1]]!='#'){
                    po[0] = po[0]+ti;
                    po[1] = po[1]+tj;
                    if(v[po[0]][po[1]] == '*'){
                        res++;
                        v[po[0]][po[1]] = '.';
                    }
                }
            }
        }
        cout<<res<<'\n';
    }
    return 0;
}
```