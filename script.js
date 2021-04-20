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


//functions 

function greet(nameFun, greating = 'good morning'){
    console.log(`${greating} ${nameFun}`);
    console.log(`${nameFun} is a good boy`);
}

let name2 = 'shajidur rahman';
let name3 = 'sifat ';
let name4 = 'jannat';
let greating = 'good morning '
greet(name2);
greet(name3);
greet(name4);



// return function

function sum(a,b,c){
    d = a + b + c;
    return d;
}

let result = sum(2,5,8);
console.log(result);

// greater than function

function greater(num1, num2){
    if(num1 > num2){
        console.log(`the ${num1} is greater than ${num2}`)
        
    }
    else{
        console.log(`the ${num2} is greater than ${num1}`)

    }

}

greater(34,2);

// tutorial 53 finished
// tutorial 54 started

// alart promt confirm


// alart in js

// alert('this is a message')


// prompt 

// let gamer = prompt('what is your name?' , 'Guest')
// document.getElementById('prompt').innerHTML = gamer;


// confirm 

// let deletpost = confirm('do you really want to delet this post? ')
// console.log(deletpost)

// if(deletpost == true){
//     document.getElementById('con').innerHTML = 'post deleted';
    
// }
// else{
//     document.getElementById('con').innerHTML = 'post not deleted';

// }


// same thing




// let deletpost = confirm('do you really want to delet this post? ')
// console.log(deletpost)

// if(deletpost){
//     document.getElementById('con').innerHTML = 'post deleted';
    
// }
// else{
//     document.getElementById('con').innerHTML = 'post not deleted';

// }

// tutoral 54 finished 
// tutoral 55 started 

// for loop and while loop

// for looop
for(i=0; i<3; i++){
    console.log(i)
}

let friends = ['sifat', 'saad', 'jannat', 'baba'];
for (let index = 0; index < friends.length; index++) {
    console.log('hello '+ friends[index]);
    
}



// moder js 
friends.forEach(
    function friends(elements){
        console.log('hello ' + elements);
    }
);

// other js
for(element of friends){
    console.log('hello ' + element + 'to modern js')
};

// for loops in objects
person2 = {
    nameper : 'shajidur rahman',
    ageper : 12,
    schoolper : 'dinahpur zilla school'
};
// use this loop for Objects
for(key in person2){
    console.log(`the ${key} of employe is ${person2[key]}`);
};



// while loop
let iw = 0;
while (iw <10) {
    console.log(`${iw} is less than 10`);
    iw++;
};


// tutorial 54 finished
// tutorial 55 started




