
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

function greet2(user: {
  name: string,
  age:number
}) {
  console.log(user.name);
}

let user = {
  name: "Vijay",
  age: 25
}

greet2(user);