
class ProductOfNumbers {
    
    private INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1;
    private prefixMultiplication = new Array<number>();

    constructor() {
        this.prefixMultiplication.push(this.INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
    }

    add(value: number): void {
        if (value === 0) {
            this.prefixMultiplication = new Array<number>();
            this.prefixMultiplication.push(this.INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
        } else {
            this.prefixMultiplication.push(value * this.prefixMultiplication[this.prefixMultiplication.length - 1]);
        }
    }

    getProduct(numberOfElements: number): number {
        if (numberOfElements > this.prefixMultiplication.length - 1) {
            return 0;
        }
        return this.prefixMultiplication[this.prefixMultiplication.length - 1]
                / this.prefixMultiplication[this.prefixMultiplication.length - numberOfElements - 1];
    }
}
