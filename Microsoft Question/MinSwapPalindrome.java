import java.util.HashMap;
public class MinSwapPalindrome {
    
    public static void main(String[] args) {
        String example1 = "mamad";
        String example2 = "asflkj";
        String example3 = "aabb";
        String example4 = "ntiin";
        
        System.out.println(getMinsSwaps(example2));
    }

    private static int getMinsSwaps(String s) {
        int minsSwap = 0;

        HashMap<Character, Integer> map = new HashMap<>();
        char[] string = s.toCharArray();

        for (char letter : string)
            map.put(letter, map.getOrDefault(letter, 0) + 1);

        for (int i = 0; i < s.length() / 2;  i++) {
            char frontLetter = string[i];
            char backLetter  = string[string.length - (i + 1)];
            
            if (frontLetter != backLetter) {
                if (map.get(frontLetter) > 1)
                    for (int j = i + 1; j < string.length - (i + 1); j++) {
                        if (string[j] == frontLetter) {
                            swap(string, j, j + 1);
                            minsSwap++;
                        }
                    }
                else if (map.get(backLetter) > 1)
                    for (int j = string.length - (i + 1) - 1; j > i; j--) {
                        if (string[j] == backLetter) {
                            swap(string, j, j - 1);
                            minsSwap++;
                        }
                    }
            }
        }
            

        return minsSwap > 0 ? minsSwap : -1;
    }

    private static void swap (char[] string, int index1, int index2) {
        char tmp       = string[index1];
        string[index1] = string[index2];
        string[index2] = tmp;
    }
}
