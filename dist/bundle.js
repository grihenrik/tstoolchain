define("Greeting", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Greeting = /** @class */ (function () {
        function Greeting() {
        }
        Greeting.prototype.greet = function (name) {
            return "Hello " + name + " from the greeter class.";
        };
        return Greeting;
    }());
    exports.Greeting = Greeting;
});
define("Person", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Person = /** @class */ (function () {
        function Person(name) {
            this.name = name;
        }
        Person.prototype.getName = function () {
            return this.name;
        };
        return Person;
    }());
    exports.Person = Person;
});
//export default Person;
define("app", ["require", "exports", "Greeting", "Person"], function (require, exports, Greeting_1, Person_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Test = /** @class */ (function () {
        function Test() {
        }
        Test.prototype.modify = function () {
            var temp = document.querySelector("#ts");
            temp.innerHTML = "Dynamically loaded";
        };
        return Test;
    }());
    var testing = new Test();
    testing.modify();
    var person = new Person_1.Person('Henrik');
    var greeter = new Greeting_1.Greeting();
    var x = greeter.greet(person.getName());
    var tt = document.querySelector("#ts");
    var p = document.createElement("p");
    p.innerHTML = x;
    tt.appendChild(p);
});
