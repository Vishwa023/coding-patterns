// creater class declares the factory method that is supposed to create an object of product class.
// The creater's subclass usually provides the implementation of this method
abstract class Creator { 
    
    // Creator may have some default implementation of factory method
    public abstract factoryMethod(): Product; 

    public someOperation(): string {
        const product = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${product.operation()}`
    }
}

// ConcreteCreater1 implements the factory method to change the resulting product's type
class ConcreteCreator1 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct1();
    }
}

// ConcreteCreater2 implements the factory method to change the resulting product's type
class ConcreteCreator2 extends Creator {
    public factoryMethod(): Product {
        return new ConcreteProduct2();
    }
}

interface Product {
    operation(): string;
}

// Can be thought as CAR
class ConcreteProduct1 implements Product {
    public operation(): string {
        return 'Result of the ConcreteProduct1'
    }
}

// Can be thought as SHIP
class ConcreteProduct2 implements Product {
    public operation(): string {
        return 'Result of the ConcreteProduct2'
    }
}

// Client code

function clientCode(creator: Creator) {
    console.log(creator.someOperation())
}

clientCode(new ConcreteCreator1())
clientCode(new ConcreteCreator2())


//SOURCE::::: https://refactoring.guru/design-patterns/factory-method/typescript/example