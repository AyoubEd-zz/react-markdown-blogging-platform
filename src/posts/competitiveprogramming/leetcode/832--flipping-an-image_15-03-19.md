# 832. Flipping an Image
Posted on 15-03-19
tags = 

```
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& A) {
        for(int i=0 ; i<A.size() ; i++){
            int a=0, b=A[0].size()-1;
            while(a<=b){
                if(A[i][a]==A[i][b]){
                    A[i][a]=A[i][b]=!A[i][b];
                }
                a++;b--;
            }
        }
        return A;
    }
};
```

one thing to remember in a for loop,
 - if we want to access the middle <(A.size()+1)/2
 - if not <(A.size())/2
