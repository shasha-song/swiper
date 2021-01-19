html结构：

```
    <div class="box">
        <!-- 图片列表 -->
        <ul class="images-list">
            <li><img src="">1</li>
            <li><img src="">2</li>
            <li><img src="">3</li>
            <li><img src="">4</li>
            <li><img src="">5</li>
            <li><img src="">6</li>
           <!--按实际情况增加图片即可-->
        </ul>
        <!-- 左侧按钮箭头 -->
        <a href="javascript:;" class="prev">&lt;</a>
        <!-- 右侧按钮箭头 -->
        <a href="javascript:;" class="next">&gt;</a>
        <!-- 小圆点 -->
        <ol class="promo-nav">
            <li class="selected"></li>
        </ol>
    </div>
```

css样式：


```
    .box {
      /* 只是为了让轮播的大盒子在页面中间，实际随意 */
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      /* 盒子要给个高度 */
      width: 600px;
      height: 400px;/* 必须设置 */
    }
    .box>ul>li {
        float: left; /* 必须设置 */
        width: 14.29%; 
        height: 400px;
        background-color: pink;
        line-height: 400px;
        text-align: center;
        font-size: 100px;
    }
    /* 必须设置 */
    .box > a {
      position: absolute;
      top: 50%;
      margin-top: -15px;
      width: 20px;
      height: 30px;
      background: rgba(34, 24, 24, 0.3);
      text-align: center;
      line-height: 30px;
      color: #fff;
      text-decoration: none;
}
.prev {
    left: 0;
    border-radius: 0px 15px 15px 0px;
}
.next {
    right: 0;
    border-radius: 15px 0px 0px 15px;
}
.prev:hover,
.next:hover {
    color:orange
}
/* 小圆点 */
.box>ol {
    position: absolute;
    bottom: 15px;
    left: 50%;
    margin-left: -35px;
    height: 13px;
    background: rgba(z55, 255, 255, .7);
    border-radius: 7px;
}

.box>ol > li {
    float: left;
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 50%;
    margin: 3px;
}

/* 不要忘记选择器权重的问题 */
.box>ol > li.selected {
    background-color: #ff5000;
}
```

使用

```

```

示例

```
new Swiper('.box',{
        autoplay: true, // 设置自动轮播效果，默认true
        time: 3 // 自动轮播间隔时间，默认2s 
    })
```







