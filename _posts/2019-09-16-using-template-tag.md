---
layout: post
title:  "template 태그 사용하기"
author: Elliott Yoon
date:   2019-09-16
categories: [JavaScript]
---

  

  

  오늘은 **template tag**를 사용해서 동적인 화면을 만들어보았다.

  

### template tag실습

* [윤은채 template tag실습](https://codepen.io/elliottyoon7/pen/JjPZgxP)

  이제 진짜 querySelector를 이해했다.

  ```js
  /*
  1. 템플릿을 가져와야 합니다.
  2. 템플릿 내용을 클론 합니다.
  3. 클론한 엘리먼트에 내용을 채워준다.
  4. 클론한 엘리먼트를 #comments에 추가한다.
  */
  
  let target = document.querySelector('#comments');
  let template = document.querySelector('#commentTemplate');
  
  for(let i=0; i<3; i++) {
    
    //여기서 오타가 있었어서 계속 못풀어내고있었다 importNode 기억하겠다..
    let newComment = document.importNode(template.content, true);  
     
    newComment.querySelector(".username").textContent = '사용자' + i;
    newComment.querySelector(".body").textContent = '내용' + i;
  
    target.appendChild(newComment);
  }
  ```

  이코드는 기본틀이기 때문에 외워야한다. 이해를 하면 딱히 외울것도 없지만...

  문제를 잘게 쪼게는 연습을 계속 들이자.

  

### 내가 실수한것

**오타** 였다.  뭐가 계속 화면이 안떠서 시간이 엄청 오래걸렸는데 나중에 보니까 importNode를 잘못썻더라... 이렇게 허무하다니;;;;  **오타조심하자!!!**











