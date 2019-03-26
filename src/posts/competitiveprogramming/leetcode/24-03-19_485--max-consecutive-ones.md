# 485. Max Consecutive Ones
Posted on 24-03-19
tags =  #brute_force 


```
class Solution {
public:
    int findMaxConsecutiveOnes(vector<int>& nums) {
        int count = 0, mx = 0;
        for(int i:nums){
            if(i==1)count++;
            else{
                mx = max(mx, count);
                count = 0;
            }
        }
        return max(mx, count);
    }
};
```
