
class ProductOfNumbers {
    #INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1;
    #prefixMultiplication = new Array();

    constructor() {
        this.#prefixMultiplication.push(this.#INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
    }

    /** 
     * @param {number} num
     * @return {void}
     */
    add(value) {
        if (value === 0) {
            this.#prefixMultiplication = new Array();
            this.#prefixMultiplication.push(this.#INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
        } else {
            this.#prefixMultiplication.push(value * this.#prefixMultiplication[this.#prefixMultiplication.length - 1]);
        }
    }

    /** 
     * @param {number} numberOfElements
     * @return {number}
     */
    getProduct(numberOfElements) {
        if (numberOfElements > this.#prefixMultiplication.length - 1) {
            return 0;
        }
        return this.#prefixMultiplication[this.#prefixMultiplication.length - 1]
                / this.#prefixMultiplication[this.#prefixMultiplication.length - numberOfElements - 1];
    }
}
