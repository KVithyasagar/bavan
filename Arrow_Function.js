//1
sub=()=>{
 console.log("Hello World")
}
sub()
//2
add=(num1,num2)=>{
	let sum=num1+num2
	return sum
	// console.log(sum)
}

console.log(add(2,4))
//sum()
//3
add2=(num1,fun)=>{
	let sum=num1
	console.log(sum)
	 fun()
}
add2(10,()=>{console.log("Hello Viththi")})
//4
viththi=(...n)=>{
	console.log(n)
}
viththi(1,2,3,4,5)
//5
//viththi=(n,...n)=>{
	//console.log(n)
	//6 using arrow function or function print 10

function Viththi2(){
	console.log("Hello My Dear FAM")
}
Viththi2()
/* 
  //7 check whether is prime or not?
  //8 sum of int in arrow function
  */
  
  arr=[1,2,3,4]
  let sum_fun=0
  arr.forEach(function sum(item,index){
	  console.log(item,index);
  })
  
  arr.forEach(function add(item){
	  sum_fun+=item;
	   
  })
  console.log(sum_fun)
  
  