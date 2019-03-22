# 922. Sort Array By Parity II
Posted on 18-03-19
tags =  #two_pointers #quicksort

This sort of question where we have have to sort an array given a special condition can be usually solved using quicksort approach of swapping misplaced elements and that's what we did here. 

We have two pointers, one goes through evens and the other one through odds, and we swap the misplaced elements.

```
class Solution {
public:
    vector<int> sortArrayByParityII(vector<int>& A) {
        int i=0, j=1;
        while(i<A.size() && j<A.size()){
            if(A[i]%2==0) i+=2;
            else if(A[j]%2==1) j+=2;
            else {
                swap(A[i], A[j]);
                i+=2, j+=2;
            }
        }
        return A;
    }
};
```
