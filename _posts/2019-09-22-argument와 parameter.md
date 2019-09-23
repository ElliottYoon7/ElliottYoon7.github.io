---

layout: post
title:  "parameter(매개변수) 와 argument(argument)"
author: Elliott Yoon
date:   2019-09-22
categories: [JavaScript]

---

  

 

#### parameter(매개변수) argument(전달인자)

```js
//예제  집으로가는 시간 구하기  거리/시간
let timeToGoHome = function(distance, speed) {  //여기가 매개변수parameter
    let time = distance / speed;
    console.log(time);
}

timeToGoHome(300, 15) //여기가 전달인자argument
<-- 20
```



parameter와 argument가 자주 헛갈린다 개념을 잘 잡아놓자.