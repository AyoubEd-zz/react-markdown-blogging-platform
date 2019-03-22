# 977. Squares of a Sorted Array
Posted on 14-03-19
tags =  #two_pointers

In this problem, the array is already sorted wich simplifies the task. All we have to is compare the rightmost and leftmost elements of the array because - in the case of negative values in the left - they have the biggest absolute values.
We choose each time the bigger value to fill an array from the end.

 ```
 class Solution {
 public:
      vector<int> sortedSquares(vector<int>& A) {
          int i = 0, j = A.size()-1, k = A.size()-1, pi, pj;
          vector<int> v(A.size());
          while(i<j){
              pi = A[i] * A[i];
              pj = A[j] * A[j];
              if (pi < pj) {
                  v[k] = pj;
                  j--;
              } else {
                  v[k] = pi;
                  i++;
              }
              k--;
          }
          v[k] = A[i]*A[i];
          return v;
      }
};
```

