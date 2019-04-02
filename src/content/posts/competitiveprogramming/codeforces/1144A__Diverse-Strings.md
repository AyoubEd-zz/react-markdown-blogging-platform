# 1144A. Diverse Strings

Posted on 31 March 2019

Things I should remember:
 - we can sort a string using sort:
         sort(s.begin(), s.end());
 - faster I/O:
        ios_base::sync_with_stdio(0);
        cin.tie(NULL);

```
#include <bits/stdc++.h>

using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n, ss, sum, sum_ver;
    string s, verdict;
    cin>>n;
    while(n--){
        sum=0;
        cin>>s;
        sort(s.begin(), s.end());
        ss = s.size();
        sum_ver=((int)s[0])*ss + ss*(ss-1)/2;
        for(int i=0 ; i<s.size() ; i++){
            sum+=(int)s[i];
        }
        verdict = (sum==sum_ver)?"Yes":"No";
        cout<<verdict<<'\n';
    }
    return 0;
}
```
