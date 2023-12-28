type Person = {
  name: string;
  age: number;
  address: string;
};


function getProperty(obj:Person,key: keyof Person){
  return obj[key];
}


const person:Person = {
  name:'심선범',
  age:15,
  address:'서울시 중랑구 면목동'
}


getProperty(person,'name'); // 심선범




type Preset<T> = {
  [K in keyof T]?: T[K];
}

const userA: Preset<Person> = {age:30}
const userB: Preset<Person> = { name: 'tiger' };
const userC: Preset<Person> = { age: 15, name: 'tiger' };
const userD: Preset<Person> = {};













function getPropertyKey<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person2: Person = {
  name: 'John',
  age: 30,
  address: '123 Main St',
};

const personAge: number = getPropertyKey(person, 'age'); // 타입 안전하게 추출








