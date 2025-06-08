export class Counter{
    private value: number;
    constructor(){
        this.value = 0;
    }

    increment() {
        this.value++;
        console.log("incrementing counter:", this.value);
    }

    decrement() {
        this.value--;
        console.log("decrementing counter:", this.value);
    }

    getCounter() {
        return this.value;
    }
}