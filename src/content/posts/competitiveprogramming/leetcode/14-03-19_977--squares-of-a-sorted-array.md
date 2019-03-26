<h1 style="color: #f19f46">977. Squares of a Sorted Array</h1>

<i>Posted on 14-03-19</i>

<h5>#two_pointers</h3>

In this problem, the array is already sorted wich simplifies the task. All we have to do is compare the rightmost and leftmost elements of the array because - if it happens that the array contains negative values - they can have the biggest absolute values.

We choose each time the bigger value to fill an array starting from the end.

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
