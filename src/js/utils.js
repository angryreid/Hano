export function debounce(event, time, callNow) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);

    if (callNow && !timer) {
      event.apply(this, args);
    }

    timer = setTimeout(() => {
      // this point at return function, not excute function
      event.apply(this, args);
    }, time);
  };
}

// random color
export function randomColor() {
  const colors = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function calcHeight(dom, count, number = 20, titleHeight = 70) {
  dom.style.height = count * number + titleHeight + "px";
}

// 获取输入值
export function getInputDom(input) {
  return document.getElementById(input);
}
// 渲染汉诺塔初始化
function init(number, A, B, C) {
  // 清空柱子C
  C.innerHTML = "";
  let htmlA = "";
  // 渲染柱子A
  for (let i = 0; i < number; i++) {
    htmlA += `<div style='width:${
      100 * ((i + 1) / number)
    }%;background: ${randomColor()}'>${i + 1}</div>`;
  }
  A.innerHTML = htmlA;
  [A, B, C].forEach((dom) => calcHeight(dom.parentElement, number));
  
}

export function watchInput(e, maxNumber, A, B, C, clearCb, hanoCb) {
  let value = e.target.value;
  if (value == "") {
    return;
  }
  if (value > maxNumber) {
    value = maxNumber;
  }
  init(Number(value), A, B, C);
  clearCb && clearCb.bind(this)(value, A, B, C);
  hanoCb && hanoCb.bind(this)(value, A, B, C);
}