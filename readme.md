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

使用

```
new Swiper(ele, {
    autoplay: Boolean,
    time: Number
})
```

示例

```
new Swiper('.box',{
        autoplay: true, // 设置自动轮播效果，默认true
        time: 3 // 自动轮播间隔时间，默认2s 
    })
```







