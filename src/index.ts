
function greet(name:string) {
  console.log("Hello " +  name );
}

//greet("Vijay");

function sum(a: number, b: number) {
  return(a + b);
}

//console.log(sum(2, 3));

function delayedCall(anotherFn:()=>void) {
  setTimeout(anotherFn, 1000);  
}
function log() {
  console.log("Hi,There!")
}

//delayedCall(log);

let greet1=() => {
  console.log("Hi,There"); 
}
//greet1();

// ---- Interfaces---- //
interface UserType{
  firstName: string,
  lastName: string,
  age:number
}

function greet2(user:UserType) {
  console.log(user.firstName);
}

let user:UserType = {
  firstName: "BHALU",
  age: 25,
  lastName:"Kumar",
}
//greet2(user);

interface Address{
   city?: string,
    country?: string,
    pincode?:number
}
interface User1{
  name: string,
  age: number,
  address?: Address
}

interface office{
  address:Address
}

let user1:User1 = {
  name: "Chalu",
  age: 23,
  address: {
    city: "Chandigarh",
    country: "India",
    pincode:1234
  }
}

let user2: User1 = {
  name: "Raman",
  age: 22,
  address: {
    pincode:8765
  }
}

function isLegal(user1: User1):boolean {
  return user1.age >= 18;
}

//console.log(isLegal(user1));

interface People{
  name: string,
  age: number,
  greet: ()=> string,
}

let person: People = {
  name: "TALU",
  age: 26,
  greet: ()=>{
    return "hello";
  }
}

console.log(person.greet());