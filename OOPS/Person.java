//title : CopyConstructor
//Author:Kalaiarasan P
//Reviewed By:


public class Person {
	private String name;
	private int age;

	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public Person(Person another) {
		this.name=another.name;
        this.age=another.age;
	}
    public void printDetails() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }
        public static void main(String[] args) {
            Person person1 = new Person("kalai", 21);
            Person person2 = new Person(person1);
            System.out.println("Details of Person2:");
            person2.printDetails();
        }
    
}


