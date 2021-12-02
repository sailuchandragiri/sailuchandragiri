import java.util.Scanner;

class Fact{
    public static int fac(int n){
        if(n==0){
            return 1;
        }else{
            return n*fac(n-1);
        }
    }
    public static void main(String[] args){
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        System.out.println(fac(n));
    }
}