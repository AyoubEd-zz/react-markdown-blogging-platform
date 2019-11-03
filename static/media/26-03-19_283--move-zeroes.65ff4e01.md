# 283. Move Zeroes
Posted on 26-03-19
tags =  #brute_force #two_pointers

### 1st Approach - snowball

We go through the array and keep track of the number of zeroes we've seen so far, and once we find an element different than zero we move we swao it with the first zero.

```
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int snowBall = 0, t;
        for(int i=0 ; i<nums.size() ; i++){
            if(nums[i]==0) snowBall ++;
            else if(snowBall>0) {
                swap(nums[i - snowBall], nums[i]);
            }
        }
    }
};
```

runtime: 16ms

### 2nd Approach - two pointers

We keep a pointer that has just non-zero elements before it, and the rest is like the solution above.

```
class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        for(int lazy = 0, i =0 ; i<nums.size()  ; i++){
            if(nums[i]!=0) swap(nums[i], nums[lazy++]);
        }
    }
};
```

runtime: 20ms
