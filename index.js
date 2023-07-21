// function my(a,b){
//    var ab =   a* b 
//      console.log(ab)
// }
// my(6,22)
//   my(12,33)

//  my(111,22)



//  my(35,22) 
// my(222,22)
 var sum = [1,2,3,4,58,7,8,9]  
for (var  index = 0; index <sum.length; index++) {
  const dd = index + sum[index]
  if(dd%2===0){
    console.log(dd)
  }
  else{
    dd
  }
  
}

const a = 'hello world'
const b = 'mohammad farhad'
const c = `hi i am farhad, how are you?
whats is your name ?
yesterday i going chittagong
`

const d = [11,22,111,55,66,88,44,66,]
const e = [41,1,11,75,106,98,44,66,]
const f = [11,22,111,400,500,400,300,200,]
// const g = d.concat(e).concat([2525,123]).concat(f)
const g = [...d,...e,...f]

console.log(g)
// const student = {
//   name: 'farhad',
//   age: 20,
//   email: 'farhadctg222@gmail.com',
//   adress: 'satkania'
// }
const y = [{
  name: 'farhad',adrees:'satkania'}]

const x =  y.map(ab => ab.name)
console.log(x)
