



// void type
// 비어있는



function sayHi() : string{
  return 'hello'
}


function printHi():void{
  console.log('Hello');
}




// never type 존재하지 않는 / 불가능한 타임 어떤 값도 정의할 수 없는 


function showError(message:string):never{
  throw new Error(message)
}


showError('에러가 발생했습니다!')














