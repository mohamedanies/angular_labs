// let num1;
// let num2;
// num1=123;
// num2="pass is :";
// console.log(num2+num1+" >> the concatenation happend with no erroe! ");
// // now it will threw an error although the types.js is created ok.
// let num3 : number;
// let num4 : number;
// num3=10;
// num4="123";  // error string instead of number
// num5=num3+num4;
// arrays
// var cities: string[] = ['Delhi', 'New York', 'London'];
// //OR
// var cities: Array<string> =['Delhi', 'New York', 'London'];
// console.log(cities);
// for looping on arrays
// let myarr : number[]=[10,20,30,40,50];
// casses to pring array Indices
// for (;;) and for in
// for(let i=0;i<myarr.length;i++){
//     console.log("index is: "+ i + " and the correspend element is : "+myarr[i]);
// }
// for(let i in myarr){
//     console.log("index is: "+ i + " and the correspend element is : "+myarr[i]);
// }
// now print array elements directly
// for(let i of myarr){
//     console.log("the array element is : "+i);
// }
// myarr.forEach(x=>{
//     console.log(x);
// });
// explicit casting
// let myname; // no it is any
// myname="mohamed_anis";
// console.log((myname as string).length);
// casting in template form
// console.log((<string> myname).length);
// console.log((<string> myname).split("_"));
//-----------functions-----------------------
// function add(x:number,y:number): number|string{
//     return x+y;
// }  
// console.log(add(5,6));
// let myvar=function(x,y){
//     return x+y;
// }
// console.log(myvar(5,7));
// let myvar=(x,y)=> x+y;
// console.log(myvar(5,7));
// function myfun(x,y, ...arr:number[]){
//     for(let i of arr){
//         console.log(i);
// }
// return(x+y)
// }
// console.log(myfun(2,3,4,5,6,7));
// enum
// enum days{
//     sat,
//     sun,
//     mon,
//     tus,
//     wen,
//     thu,
//     fri
// }
// console.log(typeof(days));
// for(let i in days){
//     console.log(typeof(i));
// }
// console.log(days[3]);
// ----- classes-------
// class student{
//     id:number;
//     name:string;
//     constructor(_id:number,_name:string){
//          this.id=_id;
//          this.name=_name;
//     }
// }
// let std:student=new student(1,"mohamed");
// // console.log(std.id,std.name);
// let std2:student=new student(2,"ahmed");
// std=std2;  // refrence equality
// std2.name="ali";
// console.log(std.id,std.name);
// let x:number=3;
// let y:number=2;
// x=y; // value equality
// console.log(x,y);
// class student{
//     private salary:number;
//     public  setsal(_salary){
//         this.salary=_salary;
//     }
//     public  getsal(){
//         return this.salary;
//     }
//     constructor(public id:number,public name ? :string){
//     }
// }
// let std:student=new student(1,"ahmed");
// // console.log(std.id,std.name);
// let std2:student=new student(2);
// std2=std;  // refrence equality
// // std2.name="ali";
// console.log(std2.id,std2.name);
// std2.setsal(3)
// console.log(std2.getsal());
// class student{
//     private salary:number;
//     public  set salar(_salary:number){
//         this.salary=_salary;
//     }
//     public  get salar(){
//         return this.salary;
//     }
//     constructor(public id:number,public name ? :string){
//     }
// }
// let std:student=new student(1,"ahmed");
// // console.log(std.id,std.name);
// let std2:student=new student(2);
// std2=std;  // refrence equality
// // std2.name="ali";
// console.log(std2.id,std2.name);
// std2.salar=3;
// console.log(std2.salar);
// --- decorators----
// function mydecorator(target){
//  Object.defineProperty(target.prototype,
//     "salary",{value:()=>(console.log("mysalary"))}
// );
// }
// @mydecorator
// class person{
//     id:number;
//     name:string;
//     constructor(){
//         console.log("empty constructor, object created");
//     }
// }
// let per:person=new person();
// per.salary(); // error in compile but works when run 
// // console.log(per);
var p3 = { x: 1, y: 2 };
Object.defineProperty(p3, "z", { value: 4 });
console.log(p3);
