
#include <vector>
using namespace std;

class ProductOfNumbers {

    inline static const int INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1;
    vector<int> prefixMultiplication;

public:
    ProductOfNumbers() {
        prefixMultiplication.push_back(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
    }


    void add(int value) {
        if (value == 0) {
            prefixMultiplication.clear();
            prefixMultiplication.push_back(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
        }
        else {
            prefixMultiplication.push_back(value * prefixMultiplication[prefixMultiplication.size() - 1]);
        }
    }

    int getProduct(int numberOfElements) {
        if (numberOfElements > prefixMultiplication.size() - 1) {
            return 0;
        }
        return prefixMultiplication[prefixMultiplication.size() - 1]
                / prefixMultiplication[prefixMultiplication.size() - numberOfElements - 1];
    }
};
