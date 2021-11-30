import {
  debounce,
  getInputDom,
  watchInput,
} from "./utils.js";
import { MoveAction } from "./moveAction.js";

class Hano {
  constructor(maxNumber = 10) {
    this.maxNumber = maxNumber;
    this.hanoQueue = [];
  }

  init() {
    // 点击开始按钮事件
    window.onload = () => {
      console.log("start from here...");
      console.log(new MoveAction(1, 2));
      const end = document.getElementById("end");
      const next = document.getElementById("next");
      const A = document.getElementById("A");
      const B = document.getElementById("B");
      const C = document.getElementById("C");
      this.render(this.maxNumber, A, B, C);

      next.addEventListener("click", () => {
        this.moveNextStep();
      });

      end.addEventListener("click", () => {
        this.moveAllSteps();
      });
    };
  }

  render(maxNumber, A, B, C) {
    getInputDom("number").addEventListener(
      "input",
      (events) => {
        return debounce(watchInput, 300, true).bind(this)(events, maxNumber, A, B, C, this.clear, this.hano);
      }
    );
  }

  hano(n, A, B, C) {
    if (n == 1) {
      // push into stack
      this.hanoQueue.push(new MoveAction(A, C));
    } else {
      this.hano(n - 1, A, C, B);
      this.hano(1, A, B, C);
      this.hano(n - 1, B, A, C);
    }
  }

  moveNextStep() {
    this.hanoQueue.shift().next();
  }

  moveAllSteps() {
    while (this.hanoQueue.length) {
      this.hanoQueue.shift().next();
    }
  }

  clear() {
    this.hanoQueue = [];
  }
}

const hano = new Hano();
hano.init();
