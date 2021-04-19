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
let subs = js.slice(1, 3); // can handle negetive value and will count like this (1,3) = {1,(3-1)} = (1,2)
console.log(subs)

let substring = js.substring(1, 3); // can't handle negetive value and will count like this (1,3) = {1,(3-1)} = (1,2)
console.log(substring);

let subsr = js.substr(1, 3); // 
console.log(subsr);

// replaceing items 
let replace = js.replace('javascript', 'python');
console.log(js);
console.log(replace);

// uppercase

console.log(js.toUpperCase());  // the () is must 

// lowercase

console.log(js.toLowerCase());

// tutorial 50 finished
// tutorial 51 started 

// scope 
const a = "it cant be changed "  // const cant be changed 

// if else conditions

let age = 2;
if(age > 18){
    console.log('you cant drink it ');
}
else if (age == 12){
    console.log('you are 12');
}
else {
    console.log('you can drink it ');
}

// switch 

let cups = 20;
switch (cups) {  // break must needed
    case 23:
        console.log('there are 23 cups')
        break;
    case 74:
        console.log('there are 74 cups')
        break;
    case 221:
        console.log('there are 221 cups')
        break;
    case 2:
        console.log('there are 2 cups')
        break;
    case 203:
        console.log('there are 20 cups')
        break;
    case 2323:
        console.log('there are 233434 cups')
        break;

    default:
        console.log('the value of cups is none if them')
        break;
}

// tutorial 51 finished 
// tutorial 52 started 

// arrys and objects

let person = {
    name_of_person: "shajidurrahman",
    age: 12,
    school: "dinajpur_zilla_school"
}
console.log(person);
console.log(person.name_of_person);

let arrys = [2,4,5,6,7,7, 'shajidur rahman'];
console.log(arrys);


let arrys2 = new Array(2,47384,5,648,7,7, 'shajidur rahman');
console.log(arrys2);


// to know the lenght use .lenght
let arrys3 = new Array(2,4,5,6,7,7, 'shajidur rahman');
console.log(arrys3.length);


// to shot the use .sort
let arrys4 = [233,4,545,6,7,7454, 'shajidur rahman'];
arrys4 = arrys4.sort();
console.log(arrys4);


// to push to a arry use push

arrys4.push('this is push');
console.log(arrys4)

let number = new Array(23);
console.log(number);


// tutorial 52 finished
// tutorial 53 started
