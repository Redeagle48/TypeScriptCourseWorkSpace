class Person {
    name: string = "as";
    private age: number = 4;

    constructor(name: string = "Max", age: number = 0) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }
}

const a = new Person("Anne", 29);
console.log(a);