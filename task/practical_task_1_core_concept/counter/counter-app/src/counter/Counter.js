export class Counter {
  constructor() {
    this.value = 0;
  }

  increment() {
    this.value++;
    console.log("Incremented:", this.value);
  }

  decrement() {
    this.value--;
    console.log("Decremented:", this.value);
  }

  getValue() {
    return this.value;
  }
}