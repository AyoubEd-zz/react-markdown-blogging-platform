# 561. Array Partition I
Posted on 15-03-19
tags =  #indices_sort

Sometimes, we can use a vector v2 containing the occurences of the input vector v1, this way looping through v2 insures the elements of v1 are sorted.

```
class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        vector<int> v(20001, 0);
        for(int i:nums) v[i+10000]++;
        int res=0, flag=1, i=0;
        while(i<20001){
            if(v[i]>0){
                res = flag? res+i-10000 : res;
                flag = flag ^ 1;
                v[i]--;
            }
            if(v[i]==0) i++;
        }
        return res;
    }
};
```
