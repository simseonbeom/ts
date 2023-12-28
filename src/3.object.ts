
// object literal type



let user:{
  id?:number; // 선택적 프로퍼티 optional property
  nickName:string
} = {
  id:1,
  nickName:'tiger'
}

user = {
  nickName:'kindtiger',
}



let config:{
  readonly apiKey:string;
} = {
  apiKey:'MY API KEY IS ...'
}


// config.apiKey = 'asdasdasd'










