
import java.util.Scanner;
import java.util.Arrays;

public class Sum{
    public static boolean binarySearch(int[] arr, int n, int l, int r, int t){
        while(l<=r){
            int mid = l+(r-l)/2;
            if(arr[mid]==t){
                return true;
            }else{
               if(arr[mid]>t){
                   r=mid-1;
               }else{
                   l=mid+1;
               }
            }
        }
        return false;
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        int q = scanner.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i]=scanner.nextInt();
        }
        Arrays.sort(arr);
       
        for(int i=0;i<q;i++){
            int t = scanner.nextInt();
            boolean res = binarySearch(arr, n,0, n-1, t);
            if(res==true){
                System.out.println("YES");
            }else{
                System.out.println("NO");
            }
        }
    }
}
