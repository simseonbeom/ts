
// any type


let obj:any = {x:10};


obj = 123;
obj = ()=>{}
obj.toUpperCase();




// unknown

let arr: unknown;

arr = 1;
arr = 'hi'

// 타입 좁히기 (정제) narrowing

if(typeof arr === 'number'){
  arr.toFixed()
}




















