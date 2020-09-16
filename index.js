var fetch = require("node-fetch");

// console.log("Welcome!")

// var  x = 5;
// function varTest(){
//   var x = 1;
//   if(x === 1){
//     var x = 2;
//     console.log('var x is inside if block', x);
//   }
//   console.log('var x - outside of block', x);
// }
// varTest();
// console.log('var x - global', x)

// let y = 5;
// function letTest(){
//   let y = 1;
//   if(y === 1){
//     let y = 2;
//     console.log('let y is inside if block', y);
//   }
//   console.log('let y - outside of block', y);
// }
// letTest();
// console.log('global value of y', y);

// const employee = {
//   firstName: "Joe",
//   lastName: "Doe"
// };

// console.log('Employee', employee);
// console.log('firstname:', employee.firstName);
// console.log('lastName:', employee["lastName"]);

// // spread operator
// const employeeWithInfo = {
//   ...employee,
//   firstName: "John",
//   jobTitle: "Software Engineer",
//   location: "Waterloo"
// };
// console.log('employee with info', employeeWithInfo);

// // destructuring
// const firstName = employeeWithInfo.firstName;
// const lastName = employeeWithInfo.lastName;
// const Name = employeeWithInfo.lastName;
// const{ firstName: name, jobTitle, location, country="Canada"}=employeeWithInfo;
// console.log(`${name} ${lastName} is a ${jobTitle} who works in ${location}, ${country}`);

// const array1 = [1, 2, 3, 4];
// console.log('Array', array1);

// const array2 = [0, ...array1, 5];
// console.log('Array 2', array2);

// function calcAreaRegular(height, width){
//   return height*width;
// }
// var calcAreaArrow = (height, width) => height*width;

// // rest parameter

// const calcAreaWithRest = (height, width, ...rest) => {
//   console.log('Rest params', rest);
//   console.log('First rest params', rest[0]);
//   return height * width;
// }
// console.log('Calculate area with rest:', calcAreaWithRest(...array1));

// //array map
// const array1map = array1.map((item) => item*2);
// console.log("Array 1 map", array1map);

// //array filter
// const array1filter = array1.filter((item)=>item>2);
// console.log("array 1 filter", array1filter);

// //chaining methods
// const array1chained = array1.filter((item) => item>2).map((item) => item*2);
// console.log("array 1 chained", array1chained);

// //reduce
// const reducefunction = (accumulator, current) => accumulator + current;
// const array1sum = array1.reduce(reducefunction, 5);
// console.log("Array 1 Reduce", array1sum);

// class Polygon {
//   constructor(height, width){
//     this.height = height;
//     this.width = width;
//   }
//   get area(){
//     return this.height * this.width;
//   }
// }
// const myPolygon = new Polygon(4, 5);

// console.log('Polygon Height:', myPolygon.height);
// console.log('Polygon area:', myPolygon.area);

// const myPromise = fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2')
// console.log('fetching the url');

// myPromise
//   .then((response) => response.json())
//   .then((data) => console.log('data', data))
//   .catch((error) => console.log('Error', error));

//   console.log("doing something in between");

async function myAsyncFunc(){
  try{
    const response = await fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2');
    const data = await response.json();
    console.log("something more here after getting the response");
    console.log("Async/await fetch data:", data);
  }catch (error){
    console.log("Async/await error", error);
  }
}

myAsyncFunc();
console.log("myAsyncAwait involked....");
