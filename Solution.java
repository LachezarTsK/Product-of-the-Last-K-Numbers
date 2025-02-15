
import java.util.ArrayList;
import java.util.List;

public class ProductOfNumbers {

    private static final int INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1;
    private List<Integer> prefixMultiplication = new ArrayList<>();

    public ProductOfNumbers() {
        prefixMultiplication.add(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
    }

    public void add(int value) {
        if (value == 0) {
            prefixMultiplication = new ArrayList<>();
            prefixMultiplication.add(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
        } else {
            prefixMultiplication.add(value * prefixMultiplication.get(prefixMultiplication.size() - 1));
        }
    }

    public int getProduct(int numberOfElements) {
        if (numberOfElements > prefixMultiplication.size() - 1) {
            return 0;
        }
        return prefixMultiplication.get(prefixMultiplication.size() - 1)
                / prefixMultiplication.get(prefixMultiplication.size() - numberOfElements - 1);
    }
}
