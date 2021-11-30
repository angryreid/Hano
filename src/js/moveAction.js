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