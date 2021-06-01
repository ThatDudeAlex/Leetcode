// Microsoft | OA 2019 | Min Steps to Make Piles Equal Height
// https://leetcode.com/discuss/interview-question/364618/Microsoft-or-OA-2019-or-Min-Steps-to-Make-Piles-Equal-Height

import java.util.Arrays;
import java.util.Comparator;

public class MinStepsPileEqualHeight {
    public static void main(String[] args) {
        int[] example1 = {5, 2, 1};
        int[] example2 = {1, 1, 2, 2, 2, 3, 3, 3, 4, 4};

        // sorts the array in decending order that way we always know what piles are the largest & second largest
        int[] sortedDecendingOrder = sortInDecendingOrder(example1);

        System.out.printf("\nInput  : %s\n", Arrays.toString(sortedDecendingOrder));
        System.out.printf("Output : %d\n\n",getMinsSteps(sortedDecendingOrder));

        sortedDecendingOrder = sortInDecendingOrder(example2);
        
        System.out.printf("Input  : %s\n", Arrays.toString(sortedDecendingOrder));
        System.out.printf("Output : %d\n\n",getMinsSteps(sortedDecendingOrder));
        
    }

    private static int getMinsSteps(int[] piles) {
        int minSteps = 0;
        boolean allNumsEqual = false;
        
        // only exits when all numbers are equal
        while (!allNumsEqual) {
            allNumsEqual = true;
            int i = 0;

            // Iterates while the 2 adjacent numbers are equal & stops iterating at the second to last index in the array 
            while (piles[i] == piles[i + 1] && i < piles.length - 2)
                i++;

            // since the array is sorted in decreasing order, if the current & next index dont have matching numbers, then that 
            // means we found the index of the highest & 2nd highest numbers in the array. Set highest number equal to highest number and 
            // increse count of minSteps
            if (piles[i] != piles[i + 1]) {
                piles[i] = piles[i + 1];
                minSteps++;
                allNumsEqual = false;
            }
        }

        return minSteps;
    }

    // streams the int[] and boxes them into Integers so that we can use Comparator.reverseOrder() which sorts from largest to smallest 
    // and return back the new sorted int[]
    private static int[] sortInDecendingOrder(int[] piles) {
        return Arrays.stream(piles).boxed().sorted(Comparator.reverseOrder()).mapToInt(Integer::intValue).toArray();
    }

}
