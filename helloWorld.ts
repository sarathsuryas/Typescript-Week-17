// interface Details {
//   name : string,
//   age : number,
//   salary : number
//   getname : () => void;
// }
// type Details = {
//     name : string,
//   age : number | string,
//   salary : number
//   getname?: () => void;
// }

// let userDetail : Details = {
//   name: 'Sarath',
//   age : 20,
//   salary : 50000,
//   getname () {
//     console.log(this.name)
//   }
// }

// function getUserName(userDetail:Details):string{
//   return userDetail.name
// }
// let newValue = getUserName(userDetail)

// type Status = "pending" | 'completed' |'failed';
// type ToggleSwitch = 'on'|'off'
// let currentStatus:Status = 'failed'
// let toggleSwitch:ToggleSwitch = 'off'


// function overloading 

// function add(num1:string,num2:string):string;
// function add(num1:number,num2:number):number
// function add(num1:any,num2:any):any{
//   return num1 + num2
// }
// add(2,2)
// add('2','2')

// generics
// function getAge<T>(age:T): T {
//    return age;
// }

// getAge<number>(10)
// getAge<string>('10')

// interface UserDetail  {
//   name:string;
//   age:number;
// }
// interface AdminDetail extends UserDetail  {
//   role:string;
// }

// const userDetail:UserDetail = {
//   name:'Sarath',
//   age: 25
// }
// const adminDetail:AdminDetail = {
//   name:'Sarath',
//   age:30,
//   role:'Admin'
// }

// function getDetails<T>(Details:T):T{
//   return Details;
// }

// const userValue = getDetails<UserDetail>(userDetail)
// const adminValue = getDetails<AdminDetail>(adminDetail)

// enums
//type StatusType = 'pending'|'completed'|'failed'|'';

// enum StatusType {
//   PENDING,
//   completed,
//   FAILED,
// }

// function getStatus(orderId:string,status:StatusType){
//   console.log(orderId,'==',status)
// }

// getStatus("12345",StatusType.FAILED)

// as const 
// let userName = 'Sarath' as const;
// userName = 'Sarath'

const StatusType ={
  PENDING:"pending",
  COMPLETED:'completed',
  FAILED:'failed'
} as const;
//type StatusType = 'pending'|'completed'|'failed'|'';

function getStatus(orderId:string,status: keyof typeof StatusType){
  console.log(orderId,'==',StatusType[status])
}

getStatus("12345",'COMPLETED');