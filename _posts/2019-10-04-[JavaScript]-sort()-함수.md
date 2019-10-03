---
layout: post
title:  "[JavaScript] 정렬함수 sort()"
author: Elliott Yoon
date:   2019-10-04 
categories: [JavaScript]
---

### sort()

[출처 :  더디미의 개발로그](http://dudmy.net/javascript/2015/11/16/javascript-sort/)

### 문자 정렬

```
var fruit = ['orange', 'apple', 'banana'];

/* 일반적인 방법 */
fruit.sort(); // apple, banana, orange
```

### 숫자 정렬

```
var score = [4, 11, 2, 10, 3, 1]; 

/* 오류 */
score.sort(); // 1, 10, 11, 2, 3, 4 
              // ASCII 문자 순서로 정렬되어 숫자의 크기대로 나오지 않음

/* 정상 동작 */
score.sort(function(a, b) { // 오름차순
    return a - b;
    // 1, 2, 3, 4, 10, 11
});

score.sort(function(a, b) { // 내림차순
    return b - a;
    // 11, 10, 4, 3, 2, 1
});
```

### Object 정렬

```
var student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]

/* 이름순으로 정렬 */
student.sort(function(a, b) { // 오름차순
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    // 광희, 명수, 재석, 형돈
});

student.sort(function(a, b) { // 내림차순
    return a.name > b.name ? -1 : a.name < b.name ? 1 : 0;
    // 형돈, 재석, 명수, 광희
});

/* 나이순으로 정렬 */
var sortingField = "age";

student.sort(function(a, b) { // 오름차순
    return a[sortingField] - b[sortingField];
    // 13, 21, 25, 44
});

student.sort(function(a, b) { // 내림차순
    return b[sortingField] - a[sortingField];
    // 44, 25, 21, 13
});
```

ps. 정렬할 Array의 요소의 개수가 2개 미만일 경우 ‘sort is not a function’ 오류가 난다. [2015-11-30 추가]

