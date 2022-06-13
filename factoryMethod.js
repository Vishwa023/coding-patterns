var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creater class declares the factory method that is supposed to create an object of product class.
// The creater's subclass usually provides the implementation of this method
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with " + product.operation();
    };
    return Creator;
}());
// ConcreteCreater1 implements the factory method to change the resulting product's type
var ConcreteCreator1 = /** @class */ (function (_super) {
    __extends(ConcreteCreator1, _super);
    function ConcreteCreator1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator1.prototype.factoryMethod = function () {
        return new ConcreteProduct1();
    };
    return ConcreteCreator1;
}(Creator));
// ConcreteCreater2 implements the factory method to change the resulting product's type
var ConcreteCreator2 = /** @class */ (function (_super) {
    __extends(ConcreteCreator2, _super);
    function ConcreteCreator2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreator2.prototype.factoryMethod = function () {
        return new ConcreteProduct2();
    };
    return ConcreteCreator2;
}(Creator));
// Can be thought as CAR
var ConcreteProduct1 = /** @class */ (function () {
    function ConcreteProduct1() {
    }
    ConcreteProduct1.prototype.operation = function () {
        return 'Result of the ConcreteProduct1';
    };
    return ConcreteProduct1;
}());
// Can be thought as SHIP
var ConcreteProduct2 = /** @class */ (function () {
    function ConcreteProduct2() {
    }
    ConcreteProduct2.prototype.operation = function () {
        return 'Result of the ConcreteProduct2';
    };
    return ConcreteProduct2;
}());
// Client code
function clientCode(creator) {
    console.log(creator.someOperation());
}
clientCode(new ConcreteCreator1());
clientCode(new ConcreteCreator2());
