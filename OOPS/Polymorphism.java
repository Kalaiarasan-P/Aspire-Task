class Adder{
    static int add(int a, int b){
        return a+b;
    }
    static int add(int a, int b, int c){
        return a+b+c;
    }
}

public class Polymorphism {
    public static void main(String[] args) {
        System.out.println(Adder.add(2,4));
        System.out.println(Adder.add(2,4,7));
    }
}
