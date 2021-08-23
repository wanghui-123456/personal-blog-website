function animate (obj,target,callback){//利用给对象添加属性的方法给不同元素设置不同的定时器
    clearInterval(obj.timer);//调用函数时先清除定时器，防止多次点击按钮时开启多个定时器，盒子会移动的越来越快
    obj.timer = setInterval(function(){ 
        var step = (target-obj.offsetLeft)/20;
        //将步长值改为整数，不要出现小数
        step=step>0?Math.ceil(step):Math.floor(step);
        if(obj.offsetLeft==target){
           clearInterval(obj.timer);
           //回调函数写道定时器结束之后
           if(callback){
               callback();
           }
        } obj.style.left=obj.offsetLeft + step + "px";
    },15);
}