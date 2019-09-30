---

layout: post
title:  "[Algorithm] a009_computeSquareRoot.js  "
description: ""
author: Elliott Yoon
date:   2019-09-30
categories: [Algorithm] 

---



### 문제

Write a function called "computeSquareRoot". ("computeSquareRoot" 함수를 작성하세요.)

Given a number, "computeSquareRoot" returns its square root. (숫자가 주어졌을때, "computeSquareRoot" 함수는 해당 수의 제곱근 값을 반환합니다.)

```js
let output = computeSquareRoot(9);
console.log(output); // --> 3
```

Do not use Math.sqrt(); for this problem. Instead, use this iterative way of solving the problem: (Math.sqrt()를 사용하지 말고, 아래 링크에서 나온 방법을 통해 해결하세요.)

https://wwwproxy.deltacollege.edu/dept/basicmath/documents/BABYLONIAN.doc



### 풀이

```js
function computeSquareRoot(num) {
  //guess값을 0으로 설정한다.
  let guess = 0
  
  // guess * guess값을 num보다 작으면서 가장큰수를 찾는 방법 while문.  이거 만드는게 핵심이었다!
  while (guess * guess < num) {
    guess++;
  }
  
  // 수학공식을 세번반복한다.
  for(let i=0; i < 3; i++) {
    guess = (guess + (num / guess)) / 2
  }
  
  return guess;

}
```










  