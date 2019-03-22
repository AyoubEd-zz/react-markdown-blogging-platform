# 509. Fibonacci Number
Posted on 18-03-19
tags =  #dp

There are many possible solutions to get Fibonacci values.

The recursive approach is more natural since we only need to plug the mathematical formula, it goes like this

```
int fib(int N) {
        if(N == 0)  return 0;
        if(N == 1)  return 1;
        return fib(N-1) + fib(N-2);
}
```

The problem with this approach is it recalculates previous values for each recursive call. so we will try to keep a memorization table.

```
int fib(int N) {
        if(N < 2)
            return N;
        int memo[N+1];
        memo[0] = 0;
        memo[1] = 1;
        for(int i=2; i<=N; i++)
            memo[i] = memo[i-1] + memo[i-2];
        return memo[N];
}
```

This is already good since we have a time complexity of O(n), but we can optimize the space complexity further, since we only need the two previous values.

```
int fib(int N) {
        if(N < 2)
            return N;
    	int a = 0, b = 1, c = 0;
        for(int i = 1; i < N; i++)
        {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
}
```

Time Complexity - O(N)
Space Complexity - O(1)

