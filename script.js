// this a js tutorial from code with harry
// JavaScript 

// writing varyables in js 
let name = "shajidur rahman"; // ';' is not case sensetive 
// printing to the browser console

console.log(name); 

console.log(`my name is ${name}`); // `` is must needed

// you can write String in others way 
let fullname = new String('shajidur rahman saad');
console.log(fullname)



// tutorial 50 started 
// java script functions

// to get position use indexOf / lastIndexOf

let js = 'JavaScript';
let position = js.indexOf('s')
console.log(`the position of 's' is ${position}`);


// substring strings 
let subs = js.slice(1,3); // can handle negetive value and will count like this (1,3) = {1,(3-1)} = (1,2)
console.log(subs)

let substring = js.substring(1,3); // can't handle negetive value and will count like this (1,3) = {1,(3-1)} = (1,2)
console.log(substring);

let subsr = js.substr(1,3); // 
console.log(subsr);

// replaceing items 
let replace = js.replace('javascript', 'python');
console.log(js);
console.log(replace);

// uppercase

console.log(js.toUpperCase());  // the () is must 

// lowercase

console.log(js.toLowerCase());