// Defination: Observer is a behavioral design pattern that allows some objects to notify other objects about changes in their state.


interface  Subject {
    add(observer: Observer): void; // Add an observer to the subject
    remove(observer: Observer): void; // Remove an observer to the subject
    notify(): void; // Notify all observers about an event
    getState(): number; // return the state of the subject
}

class ConcreteSubject implements Subject {

    public state: number; // subject's state

    private observers: Observer[] = [] // keeps list of all observers

    // Add new observer
    public add(observer: Observer): void {
        const isExist: boolean = this.observers.includes(observer)
        if(isExist) {
            return console.log(`${observer} already exists`)
        }
        this.observers.push(observer)
        console.log(`Added ${observer} to the observers list`)
    }
    
    // Reomve requested observer
    public remove(observer: Observer): void {
        const observerIndex: number = this.observers.indexOf(observer)
        if(observerIndex === -1) {
            return console.log(`${observer} not exists`)
        }
        this.observers.splice(observerIndex, 1)
        console.log(`Removed ${observer} from observers list`)
    }

    // Notify to all observers
    public notify(): void {
        console.log(`Notifying all observers ....... `)
        for(const observer of this.observers) {
            observer.update(this)
        }
    }

    // return the state
    public getState(): number {
        return this.state
    }

    public someBusinessLogic(): void {
        console.log('I am doing some important')
        this.state = Math.floor(Math.random() * 10)
        console.log(`changes state to :::::: ${this.state}`)
        this.notify()
    }
}

// The Observer method implements the update method
interface Observer {
    update(subject: Subject): void;
}

// Concrete implementation of observer A when update is called
class ConcreteObserverA implements Observer {

    public update(subject: Subject): void {
        const state = subject.getState()
        if(state< 3) {
            console.log(`concrete observer A reacts to the event ....... ${state}`)
        }
    }
}

// Concrete implementation of observer B when update is called
class ConcreteObserverB implements Observer {

    public update(subject: Subject): void {
        const state = subject.getState()
        if(state>= 3 || state=== 0) {
            console.log(`concrete observer B reacts to the event ....... ${state}`)
        }
    }
}

//client code
const subject = new ConcreteSubject() // created object of subject
const observerA = new ConcreteObserverA() // created object of observer A
subject.add(observerA) // added observer A to the subject
const observerB = new ConcreteObserverB() // created object of observer B
subject.add(observerB) // added observer B to the subject

subject.someBusinessLogic()
// subject.someBusinessLogic()

subject.remove(observerA)
subject.remove(observerA)

subject.someBusinessLogic()


// ************** SOURCE :::: https://refactoring.guru/design-patterns/observer/typescript/example ********
// /**
//  * The Subject interface declares a set of methods for managing subscribers.
//  */
//  interface Subject {
//     // Attach an observer to the subject.
//     attach(observer: Observer): void;

//     // Detach an observer from the subject.
//     detach(observer: Observer): void;

//     // Notify all observers about an event.
//     notify(): void;
// }

// /**
//  * The Subject owns some important state and notifies observers when the state
//  * changes.
//  */
// class ConcreteSubject implements Subject {
//     /**
//      * @type {number} For the sake of simplicity, the Subject's state, essential
//      * to all subscribers, is stored in this variable.
//      */
//     public state: number;

//     /**
//      * @type {Observer[]} List of subscribers. In real life, the list of
//      * subscribers can be stored more comprehensively (categorized by event
//      * type, etc.).
//      */
//     private observers: Observer[] = [];

//     /**
//      * The subscription management methods.
//      */
//     public attach(observer: Observer): void {
//         const isExist = this.observers.includes(observer);
//         if (isExist) {
//             return console.log('Subject: Observer has been attached already.');
//         }

//         console.log('Subject: Attached an observer.');
//         this.observers.push(observer);
//     }

//     public detach(observer: Observer): void {
//         const observerIndex = this.observers.indexOf(observer);
//         if (observerIndex === -1) {
//             return console.log('Subject: Nonexistent observer.');
//         }

//         this.observers.splice(observerIndex, 1);
//         console.log('Subject: Detached an observer.');
//     }

//     /**
//      * Trigger an update in each subscriber.
//      */
//     public notify(): void {
//         console.log('Subject: Notifying observers...');
//         for (const observer of this.observers) {
//             observer.update(this);
//         }
//     }

//     /**
//      * Usually, the subscription logic is only a fraction of what a Subject can
//      * really do. Subjects commonly hold some important business logic, that
//      * triggers a notification method whenever something important is about to
//      * happen (or after it).
//      */
//     public someBusinessLogic(): void {
//         console.log('\nSubject: I\'m doing something important.');
//         this.state = Math.floor(Math.random() * (10 + 1));

//         console.log(`Subject: My state has just changed to: ${this.state}`);
//         this.notify();
//     }
// }

// /**
//  * The Observer interface declares the update method, used by subjects.
//  */
// interface Observer {
//     // Receive update from subject.
//     update(subject: Subject): void;
// }

// /**
//  * Concrete Observers react to the updates issued by the Subject they had been
//  * attached to.
//  */
// class ConcreteObserverA implements Observer {
//     public update(subject: Subject): void {
//         if (subject instanceof ConcreteSubject && state < 3) {
//             console.log('ConcreteObserverA: Reacted to the event.');
//         }
//     }
// }

// class ConcreteObserverB implements Observer {
//     public update(subject: Subject): void {
//         if (subject instanceof ConcreteSubject && (state === 0 || state >= 2)) {
//             console.log('ConcreteObserverB: Reacted to the event.');
//         }
//     }
// }

// /**
//  * The client code.
//  */

// const subject = new ConcreteSubject();

// const observer1 = new ConcreteObserverA();
// subject.attach(observer1);

// const observer2 = new ConcreteObserverB();
// subject.attach(observer2);

// subject.someBusinessLogic();
// subject.someBusinessLogic();

// subject.detach(observer2);

// subject.someBusinessLogic();