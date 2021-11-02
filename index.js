window.onload = function () {
    var pre = document.querySelector('#pre-page');
    var next = document.querySelector('#next-page');
    var ul = document.querySelector('.slide-content');
    var li = document.querySelector('.slide-item');

    var longth = li.offsetWidth;
    var num = 0;
    next.addEventListener('click', function () {
        var currentPage = document.getElementById("current-page").innerHTML;
        currentPage++;
        if (currentPage == 5) {
            currentPage = 1;
        }
        document.getElementById("current-page").innerHTML = currentPage;
        if (num == ul.children.length - 1) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        animate(ul, -num * longth);
    })
    pre.addEventListener('click', function () {
        var currentPage = document.getElementById("current-page").innerHTML;
        currentPage--;
        if (currentPage == 0) {
            currentPage = 4;
        }
        document.getElementById("current-page").innerHTML = currentPage;
        if (num == 0) {
            num = ul.children.length - 1;
            ul.style.left = -num * longth + 'px';
        }
        num--;
        animate(ul, -num * longth);
    })
    // 自动播放
    var timer = setInterval(function () {
        next.click();
    }, 3000)
    //鼠标经过ul，停止自动播放
    ul.addEventListener('mouseenter', function () {
        clearInterval(timer);
        timer = null;
    })
    ul.addEventListener('mouseleave', function () {
        clearInterval(timer);
        timer = setInterval(function () {
            next.click();
        }, 3000)
    })
}