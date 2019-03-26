# 888. Fair Candy Swap
Posted on 21-03-19
tags =  #brute_force




### Brute force Solution

we calculate the sum of the two arrays, and then we loop through through them to see if we could satisfy the condition 
sum1 - A[i] + B[j] = sum2 + A[i] - B[j]

```
class Solution {
public:
    vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
        int sum1=0, sum2=0;
        for(int a:A) sum1+=a;
        for(int b:B) sum2+=b;
        for(int i=0 ; i<A.size() ; i++){
            for(int j=0 ; j<B.size() ; j++){
                if(sum2+2*A[i] == sum1+2*B[j]) return {A[i], B[j]};
            }
        }
        return {0, 0};
    }
};
```

O(n^2), runtime: 804 ms

### Solution using a set

Whenever we see a two nested loop, we think about prestoring in a map or a set, to achieve that we have to store a value that is independant of the second array. We can rearrange the equation in this way: sum1 - 2A[i] = sum2 - 2B[j].

```
class Solution {
public:
    vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
        int sum1=0, sum2=0, val;
        unordered_set<int> st;
        for(int a:A){ 
                sum1+=a;
                st.insert(a);
        }
        for(int b:B) sum2+=b;
        
        val = (sum1-sum2)/2;

        for(int b:B) {
            if(st.count(val+b)) return { val+b , b };
        }
        return {0, 0};
    }
};
```
O(n), runtime 128ms

### Solution using bitset

Bitsets offer a very good advantage in term of speed and storage space. 

```
class Solution {
public:
    vector<int> fairCandySwap(vector<int>& A, vector<int>& B) {
        int sum1=0, sum2=0, val;
        bitset<100001> st;
        for(int a:A){
            st.set(a);
            sum1+=a;
        }
        for(int b:B) sum2+=b;
        val = (sum1-sum2)/2;

        for(int b:B){
            if(b+val>0 && b+val<= 100000 && st.test(b+val)) return {b+val, b};
        }
        return {0, 0};
    }
};
```
O(n), runtime 84ms
