# 766. Toeplitz Matrix
Posted on 19-03-19
tags =  #brute_force

To check that that a matrix is a Toeplitz matrix, we need to make sure that every two consecutive lines look like this: 
[a, b, c, d, - ] , [-, a, b, c, d], meaning for every line i, for 1<=j<=matrix[0].size() matrix[i][j]==matrix[i-1][j-1].
Let's implement this.

```
class Solution {
public:
    bool isToeplitzMatrix(vector<vector<int>>& matrix) {
        for(int i=1 ; i<matrix.size() ; i++){
            for(int j=1 ; j<matrix[0].size() ; j++){
                if(matrix[i][j]!=matrix[i-1][j-1])
                    return 0;
            }
        }
        return 1;
    }
};
```
