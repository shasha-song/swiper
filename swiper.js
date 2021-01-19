
/* 
轮播图 面向对象
属性 this.btns 左右按钮
属性 图片this.images
属性 this.circles 下方小圆点
方法： 点击事件让左右按钮和小圆点控制图片前后
属性：配置自动轮播true

*/
function Swiper(ele, options = {
    autoplay: true,
    time: 2
}) {
    this.options = options
    this.ele = document.querySelector(ele);
    this.ul = this.ele.querySelector('ul');
    this.lis = this.ele.querySelectorAll('ul>li');
    this.len = parseInt(this.ele.querySelectorAll('ul>li').length)
    this.prevBtn = this.ele.querySelector('.prev');
    this.nextBtn = this.ele.querySelector('.next');
    this.ol = this.ele.querySelector('ol')
    // 定义每次移动的百分比
    this.percent = 1 / (this.len + 2) * 100
    // 定义当前正在显示的图片的index
    this.index = 0
    this.setStyle()
    this.next()
    this.prev()
    this.onCircle()
    if (this.options.autoplay) {
        let timer = setInterval(this.nextBtn.onclick, this.options.time * 1000 || 2000)
    }

}
Swiper.prototype.setStyle = function () {
    this.ele.style.overflow = "hidden"
    //  克隆第一张图片放到最后
    let clone = this.ul.children[0].cloneNode(true)
    this.ul.appendChild(clone)
    this.ol.children[0].setAttribute('data-n', 0)
    // 创建对应数量小圆点
    for (let i = 0; i < this.len - 1; i++) {
        let clone = this.ol.children[0].cloneNode(true)
        clone.classList.remove('selected')
        clone.setAttribute('data-n', i + 1)
        this.ol.appendChild(clone)
    }
    // 创建完成之后获取小圆点
    this.circles = this.ele.querySelectorAll('ol>li')
    // 让ul能放下假图
    this.ul.style.width = `${(this.len + 2) * 100}%`
    this.lis.forEach((item, index) => {
        item.style.width = `${this.percent}%`
    });
}
// 右边按钮点击效果
Swiper.prototype.next = function () {
    this.nextBtn.onclick = () => {
        this.index++;
        // console.log(this.index)
        this.ul.style.transform = `translateX(${-this.percent * this.index}%)`
        // 定时器中清除掉效果以后，再加回来动画效果
        this.ul.style.transition = 'transform .5s ease 0s'
        // 如果是最后一张，500ms让最后一张变成第一张
        if (this.index === this.len) { // 5
            setTimeout(() => {
                // 删除transform属性
                this.ul.style.transform = "none"
                // 删除过渡动画
                this.ul.style.transition = "none"
                // 然后图片序列号变为0
                this.index = 0
            }, 500);
        }
        this.circlesMove()
    }
}
// 左边按钮点击效果
Swiper.prototype.prev = function () {
    this.prevBtn.onclick = () => {
        // 如果index是0 说明是第一张图片，点击左边按钮就要瞬间去到假图，利用异步定时器延迟0毫秒的效果，然后去到最后一张，接着往后走
        // console.log(this.index)
        // console.log(this.index % this.len)
        if (this.index === 0) {
            // 不要有延时跳到最后一张
            this.ul.style.transition = "none"
            this.ul.style.transform = `translateX(${-this.percent * this.len}%)`
            // 同时改变index值为最后一个
            // 写到定时器里面就会有问题了，异步执行index还未变就按0做小圆点的调用了
            this.index = this.len - 1
            setTimeout(() => {
                this.ul.style.transform = `translateX(${-this.percent * (this.len - 1)}%)`
                this.ul.style.transition = 'transform .5s ease 0s'
            }, 0);
        } else {
            this.index--;
            this.ul.style.transform = `translateX(${-this.percent * this.index}%)`
        }
        // 点击调用判断圆点位置方法
        this.circlesMove()
    }
}
// 小圆点跟随图片index去移动
Swiper.prototype.circlesMove = function () {
    for (let i = 0; i < this.len; i++) {
        // % 1,2,3,4除以5的余数是他本身，5%5 的余数是0
        if (i === this.index % this.len) {
            this.circles[i].classList.add('selected')
        } else {
            this.circles[i].classList.remove('selected')
        }
    }
}
// 事件委托 e.target小圆点点击 去到对应位置图片
Swiper.prototype.onCircle = function () {

    this.ol.onclick = (e) => {
        // console.log(e.target)
        if (e.target.tagName.toLowerCase() == 'li') {
            let n = Number(e.target.getAttribute('data-n'))
            // console.log(n+1)
            // 方案一
            this.index = n
            this.ul.style.transform = `translateX(${-this.percent * n}%)`
            this.circlesMove()
            /* 
            //方案二：
            this.index = n + 1
            this.prevBtn.click()
            */
            // bug 一上来直接点击小圆点就没有动画效果，必须点一下按钮之后才会有匀速动画的效果
        }
    }
}