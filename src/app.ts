import {Greeting} from './Greeting';
import { Person } from './Person';
class Test {
    modify(){
        var temp = document.querySelector("#ts") as HTMLElement;
        temp.innerHTML="Dynamically loaded";
    }
}

var testing: Test =new Test();
testing.modify();
const person: Person = new Person('Henrik');
let greeter= new Greeting();
var x:string = greeter.greet(person.getName());
var tt= document.querySelector("#ts") as HTMLElement;
var p=document.createElement("p");
p.innerHTML="test"+x;
tt.appendChild(p); 