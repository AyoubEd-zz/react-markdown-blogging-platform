#include <bits/stdc++.h>
using namespace std;

map<string, int> mpsi;
map<int, string> mpis;

int addToMaps(string s, int k)
{

    if (!mpsi.count(s))
    {
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

    int n, m;
    while (cin >> n >> m && !(n == 0 && m == 0))
    {
        vector<vector<int>> v(n);
        mpsi.clear();
        mpis.clear();
        string s1, s2;
        int k = 0;

        while (m--)
        {
            cin >> s1 >> s2;
            k = addToMaps(s1, k);
            k = addToMaps(s2, k);
            v[mpsi[s1]].push_back(mpsi[s2]);
        }
    }
}
