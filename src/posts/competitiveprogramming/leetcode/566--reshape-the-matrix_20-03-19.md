# 566. Reshape the Matrix
Posted on 20-03-19
tags =  #brute_force

We create a matrix with the given specifications(r rows and c columns), we can observe that we can keep one variable "count", index of the cell we reached. We can deduce the appropriate row and column index from it, the column index being count%c and row index being count/c.

```
class Solution {
public:
    vector<vector<int>> matrixReshape(vector<vector<int>>& nums, int r, int c) {
        if(r*c != nums.size()*nums[0].size()) return nums;
        vector<vector<int>> res(r, vector<int>(c));
        int count = 0;
        for(int i=0 ; i<nums.size() ; i++){
            for(int j=0 ; j<nums[0].size() ; j++){
                res[count/c][count%c] = nums[i][j];
                count++;
            }
        }
        return res;
    }
};
```
