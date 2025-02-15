
class ProductOfNumbers() {

    private companion object {
        const val INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1
    }

    private var prefixMultiplication = ArrayList<Int>()

    init {
        prefixMultiplication.add(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION)
    }

    fun add(value: Int) {
        if (value == 0) {
            prefixMultiplication = ArrayList<Int>()
            prefixMultiplication.add(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION)
        } else {
            prefixMultiplication.add(value * prefixMultiplication.get(prefixMultiplication.size - 1))
        }
    }

    fun getProduct(numberOfElements: Int): Int {
        if (numberOfElements > prefixMultiplication.size - 1) {
            return 0
        }
        return prefixMultiplication[prefixMultiplication.size - 1] /
                prefixMultiplication[prefixMultiplication.size - numberOfElements - 1]
    }
}
