# hano

![截屏2021-11-30 下午10.44.28.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d6ccb28117e2401cb67432466e27026e~tplv-k3u1fbpfcp-watermark.image?)

使用ES6编写，设置module引入可直接在浏览器内部运行。

[code repo](https://github.com/angryreid/hano)

## 二、操作步骤

1. 输入框输入汉诺塔的层数
2. 输入后自动创建汉诺塔
3. 点击next往下一步出发
4. 点击end完成到最后一步

## 三、分析

### 1. 获取输入值

```js
 // 获取输入值
function getNumber() {
    return document.getElementById('number').value;
}
```

### 2. 生成随机颜色

```js
// 生成随机颜色
function randomColor() {
    var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += colors[Math.floor(Math.random() * 16)]
    }
    return color;
}
```

### 3. 渲染汉诺塔

```js
 // 渲染汉诺塔初始化
function init() {
    // 生成三个柱子
    var number = getNumber();
    var A = document.getElementById('A');
    var B = document.getElementById('B');
    var C = document.getElementById('C');
    // 清空柱子C
    C.innerHTML = "";
    var htmlA = "";
    // 渲染柱子A
    for (var i = 0; i < number; i++) {
        htmlA += "<div style='width:" + 100 * ((i + 1) / number) + "%;background:" + randomColor() + "'></div>";
    }
    A.innerHTML = htmlA;
    hano(number, A, B, C);
}
```

### 4.汉诺塔递归

```js
// 执行汉诺塔递归函数
function hano(n, A, B, C) {
    if (n == 1) {
        //汉诺塔移动代码
        
    } else {
        hano(n - 1, A, C, B);
        hano(1, A, B, C);
        hano(n - 1, B, A, C);
    }
}
```

### 5.汉诺塔类

```js

export class MoveAction {
  
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  next() {
    this.move(this.start, this.end);
  }

  back() {
    this.move(this.end, this.start);
  }

  move(start, end) {
    if (end.childNodes[0]) {
      end.insertBefore(start.childNodes[0], end.childNodes[0]);
    } else {
      end.appendChild(start.childNodes[0]);
    }
  }
}
```

### 四、总结

1. 使用队列存储汉诺塔所有操作步骤
2. 递归时无法对汉诺塔进行单步操作
3. 待添加移动时动画
