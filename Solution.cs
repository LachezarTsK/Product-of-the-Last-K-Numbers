
using System;
using System.Collections.Generic;

public class ProductOfNumbers
{
    private static readonly int INITIAL_PLACEHOLDER_FOR_MULTIPLICATION = 1;
    private IList<int> prefixMultiplication = new List<int>();

    public ProductOfNumbers()
    {
        prefixMultiplication.Add(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
    }

    public void Add(int value)
    {
        if (value == 0)
        {
            prefixMultiplication = new List<int>();
            prefixMultiplication.Add(INITIAL_PLACEHOLDER_FOR_MULTIPLICATION);
        }
        else
        {
            prefixMultiplication.Add(value * prefixMultiplication[prefixMultiplication.Count - 1]);
        }
    }

    public int GetProduct(int numberOfElements)
    {
        if (numberOfElements > prefixMultiplication.Count - 1)
        {
            return 0;
        }
        return prefixMultiplication[prefixMultiplication.Count - 1]
                / prefixMultiplication[prefixMultiplication.Count - numberOfElements - 1];
    }
}
