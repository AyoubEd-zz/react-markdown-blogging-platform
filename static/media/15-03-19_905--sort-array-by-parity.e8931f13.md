# 905. Sort Array By Parity
Posted on 15-03-19
tags =  #two_pointers #quicksort

Use two pointers and check wether the elements are misplaced, swap them if they are.

```
class Solution {
public:
     vector<int> sortArrayByParity(vector<int>& A) {
          int i = 0, j = A.size() - 1;
          while (i < j) {
              if (A[i] % 2 > A[j] % 2) swap(A[i], A[j]);
              if (A[i] % 2 == 0) i++;
              if (A[j] % 2 == 1) j--;
          }
          return A;
      }

};
```
