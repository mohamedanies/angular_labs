"use strict";
/* when we write a classes that depends on other class : any change in the first class will require the
modification of the other classes , it is a problem maintanance and testing >>to solve those problems
we use "IOC" >> inversion of control principal */
exports.__esModule = true;
/* "IOC" >> (factory design patern ) you should create the required objects in diffrent
 place(servicr provider or contaioner) then start using it */
/*concreate class: is a classs that i can create object from it >>> opisite to abstarct class */
//-------------------- the process of dependency object------------------------
//>>> reading the following article
// https://www.freecodecamp.org/news/a-quick-intro-to-dependency-injection-what-it-is-and-when-to-use-it-7578c84fa88f/
//-------modules in typescript-----------------------
//- export >> impoert classes
var person = /** @class */ (function () {
    function person() {
        console.log("i'm a person");
    }
    return person;
}());
exports.person = person;
// let p1:person=new person();
