# 448. Find All Numbers Disappeared in an Array
Posted on 26-03-19
tags =  #-1_trick #brute_force

### 1st Approach

Using a set

```
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int n = nums.size();
        unordered_set<int> st(nums.begin(), nums.end());
        int j = 0;
        vector<int> v(n - st.size());
        for(int i=1 ; i<=n ; i++){
            if(!st.count(i)) v[j++] = i;
        }
        return v;
    }
};
```

### 2nd Approach

We take advantage of the fact that indexes represent our 1 to n elements. So we mark the elements that we visited by a -1 on the corresponding index.

```
class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        int n = nums.size(), cur;
        vector<int> v;
        for(int i=0 ; i<nums.size() ; i++){
            cur = abs(nums[i]);
            if(nums[cur-1]>0){
                nums[cur-1]*=-1;
            }
        }
        for(int i=0 ; i<nums.size() ; i++){
            if(nums[i]>0) v.push_back(i+1);
        }
        return v;
    }
};
```
