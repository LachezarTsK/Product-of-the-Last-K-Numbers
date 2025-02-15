
package main

const INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1

type ProductOfNumbers struct {
    prefixMultiplication []int
}

func Constructor() ProductOfNumbers {
    productOfNumbers := ProductOfNumbers{
        prefixMultiplication: make([]int, 1),
    }
    productOfNumbers.prefixMultiplication[0] = INITIAL_PLACEHOLDER_FOR_MULTIPLICATION
    return productOfNumbers
}

func (this *ProductOfNumbers) Add(value int) {
    if value == 0 {
        this.prefixMultiplication = make([]int, 1)
        this.prefixMultiplication[0] = INITIAL_PLACEHOLDER_FOR_MULTIPLICATION
    } else {
        this.prefixMultiplication = append(this.prefixMultiplication, value*this.prefixMultiplication[len(this.prefixMultiplication) - 1])
    }
}

func (this *ProductOfNumbers) GetProduct(numberOfElements int) int {
    if numberOfElements > len(this.prefixMultiplication) - 1 {
        return 0
    }
    return this.prefixMultiplication[len(this.prefixMultiplication) - 1] /
            this.prefixMultiplication[len(this.prefixMultiplication) - numberOfElements - 1]
}
