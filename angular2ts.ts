let check_name:string = "codekul";
let check_num:number = 456;
let check_bool:boolean = true;
let check_arr:string[] = ["arr1","arr2","arr3","arr4"];
 

let check2_arr:any[] = [1,2,true,false,"String",'abc'];
console.log("Checking the name : "+check_name);


let multi_string:string = `this is dummy text
this is demo for angular 2 lecture 
ok this may containes error`;

function check_fun(){
    console.log("we are learning the typescript basic");
}

check_fun();

function add_fun(num1:any,num2:any){
    console.log("Addition is : "+(num1+num2));
}
add_fun("code","kul");
add_fun(10,8);
add_fun("melayer",5);

class myNewclass{
    myName:string;
    constructor(class_para){
        this.myName = class_para;
        console.log("This is construtor : "+class_para);
    }
    myClassfun(){
        console.log("This is my function under the class : "+this.myName);
    }
    myClassFun2(){
        console.log("Multile functions");
    }
}

var new_obj = new myNewclass("Angular2");
var new_obj2 = new myNewclass("Node");
var new_obj3 = new myNewclass("Bootstrap");
new_obj.myClassfun();
new_obj2.myClassfun();
new_obj3.myClassfun();
new_obj3.myClassFun2();

class myNewclass2{
    myNum1:number;
    myNum2:number;
    constructor(arg1,arg2){
        this.myNum1 = arg1;
        this.myNum2 = arg2;
        console.log("Multiplication is  : "+((this.myNum1)*(this.myNum2)));
    }
    myClassfun(){
        console.log("This is my function under the class : "+this.myNum1);
    }
}
let class_obj2 = new myNewclass2(5,5);

class myColor1{
    mycolor:string
    constructor(newMycolor){
        this.mycolor = newMycolor;
        console.log("my New color : "+ newMycolor)
     }
    display(){
        console.log("New Color : "+this.mycolor);
    }
}

class myColor2 extends myColor1{
    constructor(newColor1){
        super(newColor1);
    }
}

let newObj4 = new myColor1("Purple"); 
newObj4.display();
let newObj5 = new myColor2("Red");


interface myInterFace{
    name?:string;
    age?:number;
}
function newInterface(myobj:myInterFace){
    console.log("Interface Name : "+myobj.name);
    console.log("Interface Age : "+myobj.age);
}
newInterface({name:'codekul',age:25});
newInterface({age:25});
newInterface({name:'melayer'});