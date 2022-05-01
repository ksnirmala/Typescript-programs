abstract class student{
var name1:string;

constructor(name1:string){
this.name1 = name1;
}

abstract display():void;
}
class person extends student{
age:number;
constructor(age:number,name1:string){
super(name1);
this.age=age;
console.log("age  =" +age);
}
display():void{
console.log("name = "+name1);
}
}
let s: student = new person(20,"ashwin");
s.display();