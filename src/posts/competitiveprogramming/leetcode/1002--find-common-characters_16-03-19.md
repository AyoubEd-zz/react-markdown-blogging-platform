# 1002. Find Common Characters
Posted on 16-03-19
tags =  #alphabet_vector

Usually problems involving alphabets and occurences, require keeping a vector of occurences wich is easy since we only have 26 element.
For this problem, to find the common characters we need to keep score of the min occurence of each alphabet in each string.

```
class Solution {
public:
    vector<string> commonChars(vector<string>& A) {
        vector<int> v(26, INT_MAX);
        for(auto a:A){
            vector<int> w(26, 0);
            for(auto b:a) w[b-'a']++;
            for(int i=0 ; i<26 ; i++){
                v[i] = min(v[i], w[i]);
            }
        }
        vector<string> res;
        for(int i=0 ; i<26 ; i++){
            if(v[i]<INT_MAX){
                while(v[i]>0) {
                    res.push_back((string(1, (char)i+'a')));
                    v[i]--;
                }
            }
        }
        return res;
    }
};
```
