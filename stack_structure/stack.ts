class Stack {
  private memory: {}[] = [];

  constructor() {}

  add(data: {}) {
    this.memory.push(data);
  }

  pop() {
    return this.memory.pop();
  }

  list() {
    return [...this.memory];
  }
}
