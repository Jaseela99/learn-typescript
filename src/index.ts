
//since type of age is set to nuber we cannot define it as a string again.
/* let age:number =20
 age="a"
if(age<50)
age+=10
console.log(age) */

let sales :number =123_456_789
let course : string ="TypeScript"
let is_published :boolean =true
 let level //any
level=1;
level="a";

function render(document:any){
   console.log(document) 
}

//arrays
/* let numbers:number[]
 numbers=[1,2,3] */

 let numbers:number[]=[]
 numbers.forEach(n=>n.toExponential)

 //tuples are fixed array with fixed characters
 let user:[number,string]=[1,"jasee"]
 user[1].endsWith
 //we can only add to tuple with the push method
 //user.push(3)

 //enums list of related constants-it assigns default integer values automatically else we can set it explicity
 const enum Size{Small,Medium,Large} // if we use const before enum then the generated code will be less
//  enum Size{Small=1,Medium,Large} 
//let mySize=Size.Medium
//console.log(mySize)
//  enum Size{Small="s",Medium="m",Large="l"} 
 /* ==>const Small=1  
 Medium=1
 Large=2
 */

 //functions
 function calculateTax(income:number,taxYear=50000):number{
    // let x no unused local
 if(taxYear<50000)
 return income*1.2
 return income
 }
calculateTax(20_0000) //exactly two arguement if one of them is optional give a ? or give it a default value


//objects
/* let employee:{
    id:number;
    name?:string;
    readonly fact:string; //if read only then it cannot be modified
    retire:(date:Date)=>void
}
={id:1,
    fact:"im good",
retire:(date:Date)=>{
    console.log(date)
}} */
// employee.fact="sick"


//aliases
//type alias

type Employee={
    id:number;
    name?:string;
    readonly fact:string;
    retire:(date:Date)=>void 
}
let employee :Employee={
    id:1,
        fact:"im good",
    retire:(date:Date)=>{
        console.log(date)
    }
}
//union types
function kgtoLbs(weight:number|string):number{
 //since it could be either num or string we do narrowing
 if(typeof weight==="number"){
   return  weight*2.2
 }else{
   return parseInt(weight)*2.2
 }
}
kgtoLbs(23)
kgtoLbs("45")
//intersection types both the types
type Draggable={
drag:()=>void;
}
type Resizable={
    resize:()=>void
}

type UI= Draggable & Resizable
let text :UI={
    drag:()=>{},
    resize:()=>{}
}

//literaltypes(exact ,specific)
type Quantity = 50|100
let quantity:Quantity=50

type Metric = "cm"|"m"
let width:Metric="m"

//Nullable Types
function greet(name:string|null){
    if(name)
    console.log(name.toUpperCase())
    else
    console.log("hello")
}
greet(null)

//optional chaining
type Customer={
    birthday:Date
}

function getCustomer(id:number):Customer|null|undefined{
    return id===0?null:{birthday:new Date()}
}
let customer=getCustomer(0)
let customer2=getCustomer(1)
// if(customer!==null && customer!==undefined)
//optional property access operator
console.log(customer?.birthday?.getFullYear())
//optional element access operator:only if thers is customers array
//customers?[0]
//optional call if log is referencing an actual functional only it will be considered
let log:any=null
log?.('a')