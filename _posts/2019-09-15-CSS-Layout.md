---
layout: post
title:  "CSS Layout"
description: ""
author: Elliott Yoon
date:   2019-09-15
categories: [CSS]
---



오늘은 코드스테이츠 Pre Course 7주차 CSS 강의를 들으며 실습했다.



### CODE PEN 웹사이트 사용하기

* [코드펜](https://codepen.io/)

  아주 간단한 코드들을 실습할수 있는 좋은 웹사이트이다. 

  이곳에서 간단한것들을 실습해볼수도있고 저장할수도 있다.

### CSS Layout 실습

* [윤은채 레이아웃 만들기 실습](https://codepen.io/elliottyoon7/pen/JjPBNwb)

  주목해서 보아야할 CSS문법

  ```css
  * {
    box-sizing: border-box;
  }
  
  #container {
    height: 600px;
    position: relative;
  }
  
  .col {
    border: 1px dotted red;
    float: left;
    position: relative;
    height: 100%    //이 문법이 여기서는 핵심이다.
  }
  
  .row {
    border: 1px dotted blue;
    position: relative;
  }
  
  .w30 { width: 30%; }
  .w70 { width: 70%; }
  .h20 { height: 20%; }
  .h40 { height: 40%; }
  .h80 { height: 80%; }
  ```

  ```css
  .col {
      height: 100%;
  }
  
  //이코드가 레이아웃을 만드는데 핵심이었다. 저것을 안넣어주면 레이아웃 모양이 안나온다.
  ```

  







