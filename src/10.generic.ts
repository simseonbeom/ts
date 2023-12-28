// 제네식 타입  (포괄적인) 타입 변수 


function sumFunc<T>(value:T):T{
  return value
}



let a = sumFunc(10)
let b = sumFunc('10')
let c = sumFunc(true)


function swapAtoB<T,U>(a:T,b:U):(T|U)[]{
  return [b,a]
}


swapAtoB('hello','bye');
swapAtoB('a',1);



function getLength<T extends {length:number} >(data:T){

  return data.length;
}



const b1 = getLength([1,2,3])
const b2 = getLength('tiger')
const b3 = getLength({length:5})














function getNode(){

}


// function getCss(node:HTMLElement | string, prop: keyof CSSStyleDeclaration){

//   if(typeof node === 'string') {
//     node = getNode(node) as HTMLElement;
//   }


//   if(typeof prop === 'string'){
//     return getComputedStyle(node).getPropertyValue(prop)
//   }
// }












