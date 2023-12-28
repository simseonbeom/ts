


// map method




const arr = [1,2,3];
const newArr = arr.map(n => n * 2);



function map<T,U>(arr:T[],callback:(item:T)=>U){
  // let result: T[] & U[] = [];
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(callback(arr[i]));
  }
  return result;
}


map(arr,(n)=>n*2)
map(['a','b','c'],(n)=> parseInt(n))





// forEach


const arr2 = [1,2,3];


// arr2.forEach((n)=>{
//   console.log(n);
// })



function forEach<T>(arr:T[],callback:(item:T)=>void):void{
  for(let i = 0; i < arr.length; i++){
    callback(arr[i])
  }
}



forEach(arr2,(n)=> console.log(n.toFixed()))














