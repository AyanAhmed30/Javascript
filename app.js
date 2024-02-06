// // // // //-------------------------------------------------------------------

// // // // // // // console.log("ayan")
// // // // // // // const nam="ayan"
// // // // // // // nam="ahmed"  //constant ki value change nh hogi
// // // // // // // console.log(nam)
// // // // // // let city="karachi"
// // // // // // city="lahore" //let ki value overwrite ho jaigi
// // // // // // console.log(city)
// // // // // var mail="ayan123@"
// // // // // mail="ayan123@@" //overwrite hogi
// // // // // console.log(mail)
// // // // // //tip
// // // // // //var kbhi use nh krte h q k us mai scope ki problem hoti h, always use const and let
// // // // // let code;
// // // // // console.log(code) //undefine aaiga



// // // // //---------------------------------------------------------------------

// // // // // "use strict" is ka mtlb h k new version ka code h
// // // // //null is object(data type)
// // // // //undefine is undefine data type
// // // // //console.log(typeof varibale_name)// for data type of var




// // // // //-------------------------------------
// // // // // convert string to number
// // // // let a= "44"
// // // // let b = Number(a)
// // // // console.log(typeof b)
// // // // console.log(typeof a)

// // // // let num=null
// // // // let con=Number(num)
// // // // console.log(typeof con) // conversion of null in number is zero
// // // // console.log(con)


// // // // let define = undefined
// // // // let un=Number(define)
// // // // console.table([typeof un],[un])

// // // // //for true number value is 1
// // // // //for false number value is 0
// // // // //convert "" to boolean = false
// // // // //convert "any string" to boolean is 0


// // // // let a = "ayan"
// // // // let b = Boolean(a)
// // // // console.log(b) // true
  

// // // let a =""
// // // let b= Boolean(a)
// // // console.log(b)





// // //---------------------------  STRING TO NUMBER CONVERSION  ------------------------------------

// // //string pehlay h tu sbhi ko string liya jaiga 
// // console.log("1"+2+3 ) // o/p =123
// // console.log("1"+2+3+"5" ) //o/p =1235


// // //string last m h tu pehlay sbko add krdiya jaiga aur string say concatenate krdenge
// // console.log(1+2+3+'5') // o/p =65
// // console.log(+true)=1
// // console.log(+"")=0


// let x = 3;
// const y = x++;

// console.log(`x:${x}, y:${y}`);
// // Expected output: "x:4, y:3"

// let a = 3;
// const b = ++a;

// console.log(`a:${a}, b:${b}`);
// // Expected output: "a:4, b:4"

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
 


// -------------------------------- COMPARISON     ------------------------------------------------------

// console.log("2">1) = true
// console.log(null ==0)
// console.log(null >=0)
// console.log(null <=0) 
// if we comapre null with using < or > so valuw will be true and direct comparison will be false
// comparison convert it to zero

// console.log(undefine =0) => false
// console.log(undefine >=0) => false
// console.log(undefine <=0) => false

// console.log("a">1)=> false
//  console.log(1>"a")=> false
// === "conversion say pehlay data type check krega"
  



// ++++++++++++++++++++++++ DATA TYPES SUMMARY+++++++++++++++++++++++++++++++++++++++++++++

// NON PRIMITIVE : array , object , functions in sbka data type function hota h
// is k ilawa saray primitive
// javasript is dynamic lang

// const id="123"
// const id1="123"
// console.log(id===id1)=> false

// const bigNumber=6425362875687526357n //bigInt


// Type	  typeof return value	  Object wrapper

// Null	    "object"	              N/A
// Undefined	"undefined"	               N/A
// Boolean	    "boolean"	              Boolean
// Number	    "number"	              Number
// BigInt	    "bigint"	              BigInt
// String	    "string"	              String
// Symbol	    "symbol"	              Symbol



// *******************************  STACK AND HEAP   ********************************* */
// STACK:
// let a ="ayan"
// let b = a
// b='ahmed'
// console.log(a) => ayan
// console.log(b) => ayan

// HEAP:
// let a={
//     nam:"ayan",
//     age:20
// }
// let b=a
// b.age=21
// console.log(a.age) => 21
// console.log(b.age) => 21



// *****************                STRINGS                ************************************
// const a = new String("ayan")
// console.log(a[1])


// let name='ayanahmed'
// console.log(name.length)

// console.log(name.toUpperCase())

// console.log(name.charAt(1))

// console.log(name.indexOf("n"))


// let email="ayan3092993@gmail.com"
// // console.log( email.substring(0,5))
// console.log(email.slice(-4,-1))

// let name="    ayan   "
// console.log(name)
// console.log(name.trim())

// let id="ayan34678dnf"
// console.log(id.replace("dnf",1233))
// console.log(id.includes("dnf"))

// let city="ka - ra -chi - 123"
// console.log(city.split("-"))



//******************* NUMBERS AND MATHS ******************************* */
// let num =122.088676
// console.log(num.toString().length)
// console.log(num.toFixed(3))
// console.log(num.toPrecision(2)) //decimal point say pehlay ki prority milegi
// let num1=100000000
// console.log(num1.toLocaleString("en-PK")) //pakistani standard k hisab say value dega with commas
// // console.log(Math.floor(Math.random()*10))
// const min=20
// const max =40
// console.log(Math.floor(Math.random()*(max-min +1)+min))  //formula for range in maths



//+++++++++++++++++++++ DATE AND TIME +++++++++++++++++++++++++++++++++++++
// TYPE OF DATE : OBJECT
//MONTHS 0 SAY START HOTE H
// const mydate=new Date()
// console.log(mydate.toString()) //Sun Feb 04 2024 15:29:16 GMT+0500 (Pakistan Standard Time)
// console.log(mydate.toISOString())//2024-02-04T10:29:16.796Z
// console.log(mydate.toDateString())//Sun Feb 04 2024
// let newdate= new Date("04-02-2024")
// console.log(newdate.toDateString())//Tue Apr 02 2024
// let time =Date.now()
// console.log(Math.floor(time/100000))


//comapsrison between 2 dates
// let startingdate= new Date("09-30-2003")
// let currentdate= new Date()
// console.log(startingdate.toDateString())
// let newDate= new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay())
// console.log(newDate.getYear())
//  //for locale string
//  const date = new Date();

// // Formatting date with parameters for locale (English - United States)
// const formattedDate = date.toLocaleString('en-US', {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: 'numeric',
//   minute: 'numeric',
//   second: 'numeric',
//   timeZoneName: 'short',
// });

// console.log(formattedDate);
// Output: Wednesday, February 3, 2024, 3:45:30 PM UTC




//+++++++++++++++++++++++ ARRAYS ++++++++++++++++++
//UNSHIFT: ADD ELEMENT ON 1ST INDEX
//SHIFT: REMOVE ELEMENT ON 1ST INDEX
// let arr=[1,2,3,4,5,6,7,8]
// arr.push(10)
// console.log(arr)
// arr.unshift()
// console.log(arr)
// arr.shift()
// console.log(arr)
// console.log(arr.join())

// DIFFERENCE BETWEEN SLICE AND SPLICE
// let arr=[13,4,45,67,89,2234,6,789,0]
// console.log(arr)
// let a=arr.slice(1,3)
// console.log(a)
// let b = arr.splice(1,3)
// console.log(b)
// console.log(arr)
//splice changes original array 

//difference between push and concat
// let a=[1,2,3,4]
// let b=[23,3,4,56]
// b.push(a) //push on same aray
// console.log(b)
// console.log(a)
// let c=[1,2]
// let d =c.concat(a) //return new array
// console.log(d)
// console.log(a)


//spread operator: write all values
// let a=[1,2,3,4,45]
// let b=[34,567,235]
// console.log(...a,...b)

//array.join
// let arr=[1,2,3,4,5,5,5,66]
// console.log(arr.join())

//array.flat
// let arr=[12,2,[123],7,8,9,[12,[22,[444]]]]
// console.log(arr.flat(Infinity))


//from array
// console.log(Array.from('ayan ahmed'))
// console.log(Array.from({name:"ayan"})) //for object return empty

//array.of
// let score1=100
// let name="ayan"
// let age=20
// console.log(Array.of(score1,name,age)) //return all elements in array




//+++++++++++++++++++++++++++    OBJECTS      +++++++++++++++++++++++++++++++++

//CONSTRUCTOR SAY BNEGA TU SINGLETON HOGA=> object.create()
//ADDING SYMBOL IN OBJECT
// let sum = Symbol("ayan");

// let obj = {
//   name: [sum] // adding as a value
// };

// console.log(obj.name[0].description); // Output: ayan

// let obj1 = {
//   [sum]: "hello"
// };

// console.log(typeof obj1[sum]); // Output: hello
 //if we want to freeze object

// let info={
//     name:"ayan",
//     age:123,
//     email:"ayna203@nsdgn"
// } 
// info.name="ahmed"
// console.log(info)
// // Object.freeze(info)
// console.log(info)
// info.greeting= function(){
//     console.log("hello")
// }
// info.greeting1= function(){
//     console.log(`hello,${this.name}`)
// }
// console.log(info.greeting())
// console.log(info.greeting1())


//CONSTRUCTOR SAY BNEGA TU SINGLETON HOGA=> object.create()

// let obj = new Object()
// obj.name="ayan"
// obj.age=20
// console.log(obj)
// let a={
//     1:"a",
//     2:"b"
// }
// let b={
//     3:"a",
//     4:"b"
// }
// const c=Object.assign({},a,b)
// console.log(c) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// let final={...a,...b,...c}
// console.log(final)

// //++++++++++++++++++++ ARRAY OF OBJECTS ++++++++++++++++++++++++++++++++++++
// let arr=[
//     {
//         name:"ayan",
//         age:20
//     },
//     {
//         name:"ahmed",
//         age:21
//     }
// ]
// console.log(Object.entries(arr))//  [ '0', { name: 'ayan', age: 20 } ],//  [ '1', { name: 'ahmed', age: 21 } ]


//checking for value exist or not
// console.log(Object.hasOwnProperty("email"))  //false
// console.log(Object.hasOwnProperty("name"))   //true


// //++++++++++++++++++++++ Object de-structure and JSON API intro +++++++++++++++
// let info={
//     name:"ayan",
//     age:20
// }
// const{name}=info  //de structuring
// console.log(name) 


//++++++++++++++++++++++++++++++++  Functions and parameter  ++++++++++++++++++++++++++++++++
// function myname ( name){
//     return name
// }
// nam=myname() //=> agar koi bhi argument nhi diya to undefine aaiga
// console.log(nam) 

//agar parameter km ho aur argument zada hoto kesay overcome kre isay
// function calculate(...num1){
//     return num1
// }
// obj=calculate(1,2,3,4,5,6,7,8,9,10)
// console.log(obj)   //return all values in array



// //for interview
// function calculate(num3,num2,  ...num1){
//     return num1
// }
// obj=calculate(1,2,3,4)
// console.log(obj) //[ 3, 4 ]


// HANDLE OBJECT THROUGH FUNCTION
// let info={
//          name:"ayan",
//          age:20
//      }
// function handleInfo(info){
//     console.log(`name is ${info.name} and age is ${info.age}`)
// }     
// handleInfo(info)

//+++++++++++++++++     CLOSURE PROPERTY     ++++++++++++++++++++++++
// function one(){
//     let nam="ayan"
//     function two(){
//         let age=20
//         console.log(nam)
//     }
//     console.log(age)   //error: under wala bahar walay ko access krlega but bahar wala under walay ko access nh krega
//     two()
// }
// one()



//+++++++++++++++++++++++++++ HOISTING ++++++++++++++++++++++++++++++++
// console.log(plus(1,2))
// function plus(num1,num2){
//     return num1+num2
// }   // agar function ko bagher variable m save kre bnaya h tu pehlay bhi call krdo tu chl jaiga

// let ans=minus(2,1)
// console.log(ans)
// let minus=function(num1,num2){
//     return num1-num2  
// }  //error: agar var m save h tu bad m hi call hoga pehlay nh




//++++++++++++++++++++++++ ARROW FUNCTION +++++++++++++++++++++++++++++++
//this key word current context ko refer krta h
//e.g
// const user={
//     nam: "ayan",
//     age:20,
//     greeting :function(){
//         console.log(`${this.nam},welcome`)

//     }
// }
// console.log(user.greeting()) // is time nam ayan tha tu ayan welcome aaya mtlb current ayan tha
// user.nam="ahmed"  // yaha nam change kra h current ahmed h ,,, mtlb ye k this wo refer krega jo current hoga
// console.log(user.greeting())

// console.log(this)  // empty object aaiga
// console.log(this) //agar ye browser pr kronga tu pura object aaiga window ka

// function subject(){
//     let name="maths"
//     console.log(`my fav sub is ${this.name}`)  //this function m kam nh krta sirf object m kam krta h
// }
// subject()

// const add= (num1,num2)=>{
//     return(num1+num2)  // curly braces use kiye tu retun likhna hoga

// }
// add(1,2)   
//                        //   OR
// const add1 =(num1,num2)=>(num1 + num2)       //round bracket use kiye tu retun nh likhna hoga            


//++++++++++++++++++++++++++ Immediately Invoked Function Expressions IIFE   ++++++++++++++++++++++++++++
//global variable k pollution say bachne k liye IIFE ka use hota h
//  (function one(){
//     console.log("function one")
//  }) ();

//  (
//     (num1,num2)=>(console.log(num1 +num2))
//  )(3,4)


//++++++++++++++++++++++++++++ How does javascript execute code + call stack  ++++++++++++++++++++
//this k value browser m window object aati h
   

//++++++++++++++++ CONTROL FLOW    +++++++++++++++++++++++++++++
//VAR IS A GLOBLE KEY WORD
// let score=100

// switch (true) {
//     case score<2:
//         console.log("1 executed")
        
//         break;
//     case score>2:
//         console.log("2 executed")
        
//         break;
//     case score<1:
//         console.log("3 executed")
        
//         break;

//     default:
//         console.log("you played well`")
//         break;
// }

//+++ FALSY VALUES : 0,-0,null,"",undefine, NaN, BigInt 0
//+++ TRUTHY VALUES: "0"," "(null string with space),[],{},function(){},"false",string mai jo bhi hoga true hoga

//+++++ HOW TO CHECK EMPTY ARRAY++++
// let array =[]
// if (array.length===0){
//     console.log("array exist")
// }


//+++++++ HOW TO CHECK EMPTY OBJECT
// let obj ={}
// if((Object.keys(obj)).length===0){
//     console.log("object exist")
// }


//++++ false==0  => true,  ""==0 => true,   false=="" => true

// +++++++++++++++++++++NULLISH COALESCING OPERATOR(??)++++++++++++++++++++++
// let val1;
// val1=5??10
// console.log(val1) => 5


// let val1;
// val1=null??30 
// console.log(val1)=> 30


// let val1;
// val1=undefined??null??"ayan"??30
// console.log(val1) => "ayan"



//++++++++++++++++  TERNIARY OPERATOR  +++++++++++++++++++++++++++++++
//SYNTAX: condition? true : false
// let score =100
// score<30 ? console.log("you win"): console.log("you lose")



//++++++++++++++++++++++ High Order Array loops  ++++++++++++++
//1) FOR OF LOOP:-  //use for array
// let arr=[1,2,3,4,5]
// for (const i of arr) {
//     // console.log(i) => 1,2,3,4,5
//     console.log(arr[i])   //for off loop hamesha 1th index say start hoga => 2,3,4,5
    
// }

//MAP  (it is  not iterable)
// let map = new Map()
// map.set("name","ayan")
// map.set("fname","fahim")
// console.log(map)
// for (const key of map) {
//     console.log(key)  //=>[ 'name', 'ayan' ]
//                         //[ 'fname', 'fahim' ]
    
// }
// for (const [key,value] of map) {
//     console.log(key,"=", value) //==>name = ayan
//                               //   fname = fahim
    
// }

//2) FOR IN LOOP: (objects pr apply krenge tu key value pr krega kam agar array pr kiya tu sirf index dega,access krne pr value dega )
// let dic={
//     name:"ayan",
//     age:20
// }
// for (const key in dic) {
//     console.log(key) //=> print only keys
//     console.log(dic[key])//=> print values
   
// }
// let  score=['ayan','ned','uni']
// for (const i in score) {
//     console.log(i)//=> return index
//     console.log(score[i])//=> return values
   
// }

//++++++++++++++++++++    FOR EACH LOOP  (never return any value) ++++++++++++++++++++
// let fruits =["apple","mango","banana"]
// fruits.forEach(  (item)=>{
//     console.log(item)

// } )

//FOR EACH K PAS 3 PARAMETERS HOTE H
// fruits.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)    //apple 0 [ 'apple', 'mango', 'banana' ]
//                                    //mango 1 [ 'apple', 'mango', 'banana' ]
//                                    //banana 2 [ 'apple', 'mango', 'banana' ]
 
// } )


//++++++++++++++++  FILTER FUNCTION (RETURN KRTA H VALUES IF STORE INA VARAIBALE) ++++++++++++
// let num=[1,2,3,4,5,6,7,8]
// const result=num.filter((num)=>{
//     return num>4

// })
// console.log(result)

// let students = [
//     { name: "Alice", age: 20, grade: "A" },
//     { name: "Bob", age: 21, grade: "B" },
//     { name: "Charlie", age: 22, grade: "C" },
//     { name: "David", age: 23, grade: "D" },
//     { name: "Eve", age: 24, grade: "E" }
//   ];
  
//   console.log(students);
// let result =students.filter((data)=>{
//     return data.name=="Eve"

// })
// console.log(object)





//+++++++++++++++++  MAP FUNCTION (return  krta h,  array k hr element pr operation krne k liye use hota h)++++++++++++++++++++++++++++++++++
// let num=[1,2,3,4,5,67,8]
// // let ans=num.map((num)=>{
// // return num*10
// // })
// // console.log(ans)

// //chaining

// let ans= num.map((num)=> num*10).
//              map((num)=>num+5).
//              filter((num)=>num>+50)
// console.log(ans)              


//++++++++++++++++++++++ REDUCER +++++++++++++++++++++=
// let num=[1,2,3,4,5]
// let initial=0
// let total=num.reduce((acc,currval)=>{
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval
// },initial)
// console.log(total)

//excersice add prices in shopping cart using reduce
let shoppingCart=[
    {
        book:"eng",
        price:100
    },
    {
        book:"urdu",
        price:200
    },
    {
        book:"math",
        price:300
    },
]

let initial =[]
let total= shoppingCart.forEach((item)=>{
   initial.push(item.price)

})
let ans = initial
console.log(ans)
let total_price=ans.reduce((acc,currval)=>{
    return acc+currval
},0)
console.log(total_price)
