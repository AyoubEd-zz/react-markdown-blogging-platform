#include <bits/stdc++.h>
using namespace std;
#define UNVISITED -1

int n, id;
map<string, int> mpsi;
map<int, string> mpis;

vector<vector<int>> vg;
vector<int> ids, lows;
vector<bool> onStack;
stack<int> st;

void dfs(int i){
    st.push(i);
    onStack[i] = true;
    ids[i]=lows[i]=id++;

    for(auto u:vg[i]){
        if(ids[u] == UNVISITED) dfs(u);
        if(onStack[u]) lows[i] = min(lows[i], lows[u]);
    }
    vector<int> re;
    if(ids[i]==lows[i]) {
        int comma = 0;
        while (!st.empty()) {
            int node = st.top();
            onStack[node] = false;
            lows[node] = ids[i];
            st.pop();
            if(comma++>0)cout<<", ";
            cout<<mpis[node];
            if (node == i) break;
        }
        cout<<'\n';
    }
}

void tarjan(){
    for(int i=0 ; i<n;  i++){
        if(ids[i]==UNVISITED) dfs(i);
    }
}

int addToMaps(string s, int k){
    if (!mpsi.count(s)){
        mpsi[s] = k;
        mpis[k] = s;
        k++;
    }
    return k;
}

int main()
{
    ios_base::sync_with_stdio(NULL);
    cin.tie(NULL);
    cout.tie(NULL);
    int w=1, m;
    while (cin >> n >> m && !(n == 0 && m == 0))
    {
        if(w>1)cout<<'\n';
        cout<<"Calling circles for data set "<<w++<<":\n";
        vg.clear(); mpsi.clear(); mpis.clear(); ids.clear(); lows.clear(); onStack.clear(); vg.resize(n); ids.resize(n, UNVISITED); lows.resize(n, 0); onStack.resize(n, 0); st = stack<int>();
        id=0;
        string s1, s2;
        int k = 0;

        while (m--)
        {
            cin >> s1 >> s2;
            k = addToMaps(s1, k);
            k = addToMaps(s2, k);
            vg[mpsi[s1]].push_back(mpsi[s2]);
        }
        tarjan();
    }
}