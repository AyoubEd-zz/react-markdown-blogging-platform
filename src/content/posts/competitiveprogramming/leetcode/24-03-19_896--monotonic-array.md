# 896. Monotonic Array
Posted on 24-03-19
tags =  #brute_force

This problem can be approached in a number of ways, but I like this cool trick of having two booleans.

```
class Solution {
public:
    bool isMonotonic(vector<int>& A) {
        int p=1, n=1;
        for(int i=0 ; i<A.size()-1 ; i++){
            if(A[i]<A[i+1])n=0;
            else if(A[i]>A[i+1])p=0;
        }
        return p || n;
    }
};
```
