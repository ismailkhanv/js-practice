//var datatype
var a = 10;
console.log(a);  // 'a' value is 10

var a = 20;
console.log(a); // now 'a' value is 20 because it is now updated in line no:5

// Note: 'var' datatype we can declare more than once


//let datatype
let c = 30;
c= 4;
console.log(c);

console.log(typeof(c));
// Note: 'let' datatype can declare only once

/*
can give like that,
let c = 10;
let c = 5;
console.log(c);
*/

// const datatype

const d = 100;
console.log(d);

/*   Invalid assaignment to const d
d = 101;
console.log(d);
*/

let n1 = 10;
let n2 = 20;
console.log(n1+n2);
let n3 = n1+n2;
console.log(n3);

// function method
function sum(){
    let n1 = 20;
    let n2 = 25;
    console.log(n1+n2);  //answer is 45
}

sum();

function add(x,y){
    console.log(30+30);
}
add();

function addition(x,y){
    let z = x+y;
    console.log(z); //answer is 70
}
addition(30,40);

// Array

let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr[1]);  //pointing indexof 2 variable in array

let array = [{
    name : "isma",
    age : 28,
    dob : 1996,
},
{
    name : "ismail",
    age : 27,
    dob : 1997,
}
]

console.log(array[0]);
console.log(array[1].dob); //calling dob key in array by using 'dot'

let calcy = document.getElementById('sum_btn');
//data display by using click event
calcy.addEventListener('click',()=>{
    console.log('hello ik'); //calling dob key in array by using 'dot'
    alert('click event works fine');
});

//operators = +,-,*,/,%,++,-- arithmetic operators

let num1 = 10;
let num2 = 15;
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1++); //10++ = > 10+1 = post increment
console.log(num1); // now num1 = 11
num2 = num1;
console.log(num2); // now num1 value '11' is assaigned to num2, so it will print 15 in console
console.log(num1--); //it will display num1 value is 11, but it is reduced now as 10
console.log(num1); // now num1 = 10
console.log(--num2); // now num2 value is 11 after doing this pre decrement then it will change to 10

//Logical Operators  = 
// Conditional operators: &&,||,!=,==,===

let num3 = 25;
let num4 = 20;

if((num3 > num4) && (num1 > num3)){
    console.log('if condition display');
}else{
    console.log('else condition display');
}

if((num3 > num4) || (num1 > num3)){
    console.log('if condition display');
}else{
    console.log('else condition display');
}

if(10!=5){
    console.log('10 is not equal');
}else{
    console.log('10 is equal');
}

//Ternary operators: ?

let num5 = 10==10?"10 is equal":"10 is not equal";
console.log(num5);

let day = 3;
switch(day) {
    case 1:
        console.log("Monday: Week day");
        break;
    case 2:
        console.log("Tuesday: Week day");
        break;
    case 3:
        console.log("Wednesday: Week day");
        break;
    case 4:
        console.log("Thursday: Week day");
        break;
    case 5:
        console.log("Friday: Week day");
        break;
    case 6:
        console.log("Saturday: Week day");
        break;
    default:
        console.log("Sunday: Holiday");
    
}


let uname = document.querySelectorAll('.uname');
let fname = "Ismail-khan";
let lname = "V";

//uname.textContent = "Name is " +fname+ "" +lname+ "!";
//uname.textContent = `Name is ${fname} ${lname}`;

//uname.forEach(e=> e.textContent = "Name is " +fname+ "" +lname+ "!");
uname.forEach(e=> e.textContent = `Name is ${fname} ${lname}!`);

let mul1 = 10;
let mul2 = 20;
let multiplication = mul1*mul2;
let multi = document.querySelector('.multi');
multi.textContent = multiplication;                                                                            


//01-02-2025

//Loop methods:

// 1.while
// 2.do-while
// 3.for loop

//while condition
let n = 10;
let m = 12;
while(n<m){ //checks 10<12 , condition is true. so it go under the function 
    n++;  // then it increase the value of n by 1 , now value is 11
    console.log("N Value is " + n); 
}


//do-while condition

//first it prints the value befor the condition
let d1 = 12;
let d2 = 15;
do{
    d1++;
    console.log("D1 value is" + d1);
    
} while(d1<d2);


//for loop
let arr1 = [10,20,30,40,50];
let i;
for(i=0;i<arr1.length;i++){
    console.log( i+1 + " Array value is " + arr1[i]);
}

//map function
let arr2 = [5,10,15,20,25,30,35];
arr2.map((x,index)=>{
    console.log(index+1 + " Array Value is " + x);
});

//for of:

let arr3 = [2,4,6,8,10];
let arr3x;

for(arr3x of arr3){
    console.log("Array data Values " + arr3x);  // returns the value of arrays
}

//for in: index values of array
for(arr3x in arr3){
    console.log("Array Index Values " + arr3x);  // returns the index of arrays
}

//forEach loop
//forEach function for check each and every elements of array
let arr4 = [3,6,9,12,15];
arr4.forEach((x,y)=>{
    y = x+1;
    console.log(x + " Added by one then " + y);
});


//Reduce  = total
//help to total sum, multiplication of number

let arr5 = [1,2,3,4,5];
let index= arr5.join("+");
let total = arr5.reduce((oldest,latest)=>oldest+latest);
console.log("Total of " + index + "=" + total);


//Filter =  It filter perticular elements in array using our condition
let filterMethod = arr5.filter((x)=> x%2 === 0);
console.log(filterMethod);


// find  = checks whather element is there or not in our respective array. 
// if it is there then it will return output and immediately stop will not check again wheather same content is there in array's other position or not

let arr6 = [100,50,25,50,75];
let findMethod = arr6.find((x)=>x===50);
let filterCount = arr6.filter((x) => x === 50).length;

console.log(findMethod + " is Found " + filterCount + "times");


//indexOf
//indexof method helps to show index value of value
let arr7 = [6,12,18,24,30];
console.log(arr7.indexOf(18)); //returns 2

//push:
//push add the values at the end of array
//now arr7 = 6,12,18,24,30
arr7.push(100);
console.log("After Pushing array is " +arr7); //returns 6,12,18,24,30,100
console.log(arr7.pop()); //returns 6,12,18,24,30

arr7.unshift(100);
console.log(arr7); //returns 100,6,12,18,24,30

arr7.shift();
console.log(arr7); // returns 6,12,18,24,30


//Object

// 1. keys
// 2. Values
// 3. entries

let arr8 = [
        uname = 'ismail',
        uno = 5,
        age = 27
]

let arr8key = Object.keys(arr8).map((x)=>x);
let arr8values = Object.values(arr8).map((x)=>x);
let arr8entries = Object.entries(arr8).map((x)=>x);

console.log("Array's Key Values " +arr8key); //returns uname,uno,age
console.log("Array's data Values " +arr8values); //returns ismail,5,27
console.log("Array's Entries " +arr8entries); //returns 0,ismail,1,5,2,27

//Split:  helps to split two words in same string

let message = "Hello-Ik";

let info = message.split('-');
console.log(info);

//Slice: help to take perticular position value from array

let marks = [8,16,24,32,40];
let sliceOutput = marks.slice(2,4); //here 2nd is start index value, 4 is end index value
console.log(sliceOutput); //returns 2nd value 24,and before 4th value 32



//Operators: (...)
//1. spread
//2. rest

// spread -  helps to store one array value to another array

let arr9 = [10,11,12,13];
let arr10 = [...arr9];
let arr11 = [14,15,16];
arr11 = [...arr10,...arr11];
console.log("Array 10 value is " + arr10); //returns Array 10 value is 10,11,12,13
console.log("Array 11 value is " + arr11); //returns Array 11 value is 10,11,12,13,14,15,16


//rest :
let arr12 = [17,18,19,20,21,22,23];
let [v1,v2,...v3] = arr12;
console.log(v1);
console.log(v2);
console.log(v3); 




//Task 1:

let myname = "Ismail khan";
let result = "";

for(let i=0;i<myname.length;i++){
    result= result + myname[i];
    console.log(result);
}

//output: 
// I 
// Is
// Ism
// Isma 
// Ismai 
// Ismail
// Ismail
// Ismail k 
// Ismail kh
// Ismail kha
// Ismail khan

for(let j = myname.length;j>0;j--){
    console.log(myname);
    myname = myname.slice(0,-1);
}

//output: 
// Ismail khan 
// Ismail kha 
// Ismail kh 
// Ismail k 
// Ismail 
// Ismail 
// Ismai 
// Isma 
// Ism 
// Is
// I


//.................................

//Task 2:


let students = [
    {
        sName : "Ismail",
        rollno: 1,
        marks: [90,89,92,81,95] 
    },
    {
        sName : "Sanjay",
        rollno: 2,
        marks: [80,81,92,85,75] 
    },
    {
        sName : "Ajay",
        rollno: 3,
        marks: [90,89,92,81,95] 
    },
    {
        sName : "Vijay",
        rollno: 4,
        marks: [90,89,92,81,95] 
    },
    {
        sName : "Shiva",
        rollno: 5,
        marks: [90,89,92,81,95] 
    },
    {
        sName : "Alex",
        rollno: 6,
        marks: [90,89,92,81,95] 
    },
    {
        sName : "Nadeem",
        rollno: 7,
        marks: [64,61,66,74,69] 
    },
    {
        sName : "Afsal",
        rollno: 8,
        marks: [77,59,72,49,62] 
    },
    {
        sName : "Hamid",
        rollno: 9,
        marks: [70,10,29,60,45] 
    },
    {
        sName : "Khan",
        rollno: 10,
        marks: [60,43,32,25,39] 
    },
];

for(let i=0;i<students.length;i++){

    let totalMarks = students[i].marks.reduce((num1,num2)=> num1+num2);
    console.log("Student Name is " + students[i].sName);
    console.log("Student Roll Number is " + students[i].rollno);
    console.log("Total of " + students[i].marks.join('+') + '= ' + totalMarks);
    
    let average = (totalMarks / 500)*100;
    console.log("Average = " +  average + '%');

    let result = average < 60? "Average" : (average < 70) && (average >= 60)? "Above Average" : "First Class" ;
    console.log("Result = " +  result);

}



//printing star value

let star = "*";
let starvalue = "";

for(let i=0;i<5;i++){
    starvalue = starvalue + star;
    console.log(starvalue);
}

// Task3: Going to display prime number between 2 to 50


function primeNumber(count){
    let primeList = document.getElementById('primelist');
    let num=2;

    while(num<count){
        let isPrime = true;
        for(let i=2;i<num;i++){
            if(num%i === 0){
                isPrime = false;
            }
        }
        if(isPrime === true){
            console.log(num);
            primeList.innerHTML += `${num} <br/>`;
        }
        num++;
    }
}


primeNumber(50);



//Task 4: Show Prime number by using select value

let primeSelect = document.getElementById('primeselect');
let primeSelectWrapper = document.getElementById('primeselectwrapper');

primeSelect.addEventListener('change',function(){
    let counts = parseInt(this.value);
    primeSelectfunc(counts);
});

function primeSelectfunc(counts){
    primeSelectWrapper.innerHTML = "";
    let num = 2;
    while(num<=counts){
        let isPrimeNum = true;
        for(let i=2;i<num;i++){
            if(num%i === 0){
                isPrimeNum = false;
            }
        }
        if(isPrimeNum === true){
            primeSelectWrapper.innerHTML += `${num} <br/>`;
        }
        num++;
    }
}

primeSelectfunc(parseInt(primeSelect.value));



//8-2-25

//setTimeout() - works based on our given timeout value

let sums = (a,b)=>{
    let c = a+b;
    setTimeout(()=>{
        console.log("Sum of A and B is " +c)
    },5000);  // we can print sum value by 5secs delay
}

sums(5,15); //calling sum function


//setInverval - repeats same output as loop based on we gave

let interval = ()=>{
    let messages = "Hello ik";
    setInterval(() => {
        console.log(messages);
    }, 6000);
}

interval(); //calling interval function


//callback -  connecting one function with another one

let infomessage = ()=>{
    let msg = "Call Back function will display";
    displaymessage(msg);
}

let displaymessage = (msg)=>{
    let symbol = "!";
    console.log(msg,symbol);
}

infomessage();



//promise method: reject / resolved

// reject - error  - err
// resolved -  success -  then

//Sync method:
let Promises = new Promise ((resolved,reject)=>{
    let status = true; 
    if(!status){
        reject('User Status: InActive');
    }else{
        resolved('User Status: Active')
    }
});

Promises.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
});

//ASync method:
async function addition(a,b){
    return a + b;
}

async function totals(){
    let result = await addition(100,300);
    console.log('Addition of numbers is = ' +result);
}

totals();


//async 2

// let async = async ()=>{

//     try{
//         let data = await fetch('https://jsonplaceholder.typicode.com/posts/');
//         console.log(data);
//         if(data.ok){
//            console.log('Json Connected')
//         }else{
//             console.log('Json not Connected')
//         }
//         let JsonValue = await data.json();
//         console.log(JsonValue);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// async();


//DOM = Doucment object Module - by the help of this we can create html website within js code 
// without using html file for increase speed of website


// let div =  document.createElement('div');
// let table = document.createElement('table');
// let thead = document.createElement('thead');
// let tbody = document.createElement('tbody');
// let tr = document.createElement('tr');
// let thValues = ['S.No','Name','Age'];

// for (let i of thValues){
//     let th = document.createElement('th');
//     th.innerHTML = i;
//     tr.appendChild(th);
// }

// let tdValues = [
//     [1,'Ismail',28],
//     [2,'Khan',28],
//     [3,'Sanjay',28],
//     [4,'Kumar',28],
//     [5,'Ajay',28],
// ];

// for (let j of tdValues){
//     let tr = document.createElement('tr');
//     for(let k of j){
//         let td = document.createElement('td');
//         td.innerHTML += k;
//         tr.appendChild(td);
//     }
//     tbody.appendChild(tr);
// }

// div.appendChild(table);
// table.appendChild(thead);
// table.appendChild(tbody);
// thead.appendChild(tr);
// table.setAttribute('class','ik-table');
// document.body.append(div);




let nameDisplay = document.querySelectorAll('.nameDisplays');

let mainName = "Ismail";
let subName = "Khan";
let initial = "V";

//nameDisplay.innerHTML += `${mainName} - ${subName}`;
nameDisplay.forEach(x => x.textContent = `${mainName} - ${subName}`);




//Async method to try
let jsonValue = async () =>{
    try{
        let JsonPrint = document.getElementById('JsonPrint');
        let dataValue = await fetch('https://jsonplaceholder.typicode.com/posts/');
            console.log("Json List:");
            console.log(dataValue);
            let JsonPrintValue = await dataValue.json();
            JsonPrintValue.push(
                {
                    userId:	11,
                    id:	100,
                    title: "Ismail",
                    body: "Khan Bhai",
                },
                {
                    userId:	12,
                    id:	101,
                    title: "Ismail",
                    body: "Khan Bhai",
                }
            );
            
            JsonPrint.innerHTML = JSON.stringify(JsonPrintValue, null, 2);
    }
    catch(err){
        console.log(err);
    }
}

// jsonValue();


//Form input wrapper

let ikformInput = document.querySelectorAll('.ikformInput');
let ikSumbitFormData =  document.getElementById('ikSumbitFormData');
let ikSumbitFormBtn = document.getElementById('ikSumbitFormBtn');

ikSumbitFormBtn.addEventListener('click',function(){
    let ikformInputValue = '';  
    ikformInput.forEach((x,i)=>{
        if(i===0)  ikformInputValue +=  `<p>Id: ${x.value}</p>`;
        if(i===1)  ikformInputValue +=  `<p>Name: ${x.value}</p>`;
        if(i===2)  ikformInputValue +=  `<p>Number: ${x.value}</p>`;
    });
    ikSumbitFormData.innerHTML += ikformInputValue;
})



//new primeSelect



let newSelect = document.getElementById('newSelect');
let newSelectWrapper = document.getElementById('newSelectWrapper');

newSelect.addEventListener('change',function(){
    let counts = parseInt(this.value);
    newPrimeSelect(counts);
})

function newPrimeSelect(counts){
    newSelectWrapper.innerHTML = '';
    let num = 2;
    while(num<=counts){
        let primeNo = true;
        for(let i=2;i<=Math.sqrt(num);i++){
            if(num%i === 0){
                primeNo = false;
            }
        }
        if(primeNo === true){
            newSelectWrapper.innerHTML += `${num} <br/>`;
        }
        num++;
    }
}


newPrimeSelect(parseInt(newSelect.value));


//New form data
let formMain = document.getElementById('formMain');
let formDataBtn = document.getElementById('formDataBtn');
let formNewData = document.getElementById('formNewData');
let formNewValue = document.querySelectorAll('.form-input');
formDataBtn.addEventListener('click', function(event){
    event.preventDefault();
    let formNewDataValue = '';
    formNewValue.forEach((x)=>{
        formNewDataValue += `<p>${x.value}</p>`;
        formNewData.innerHTML = formNewDataValue;
    })
})




// new Json Value printing as Table view

async function JsonMainDatas(){
    try{
        let jsonTableView = document.getElementById('json-table-view');
        let jsonData = await fetch ('https://jsonplaceholder.typicode.com/posts/');
        let jsonDataMain = await jsonData.json();
        //jsonTableView.innerHTML += JSON.stringify(jsonDataMain,null,2);

        let table = document.createElement('table');
        let thead = document.createElement('thead');
        let tbody = document.createElement('tbody');
        table.setAttribute('class','ik-table');
        let thRow = document.createElement('tr');
        

        ['userId','id','title','body'].forEach((x)=>{
            let th = document.createElement('th');
            th.innerHTML += x;
            thRow.appendChild(th);
        });

        for(let j = 0; j<jsonDataMain.length;j++){
            let tr = document.createElement('tr');

            [jsonDataMain[j].userId, jsonDataMain[j].id, jsonDataMain[j].userId, jsonDataMain[j].body].forEach((x)=>{
                let td = document.createElement('td');
                td.innerHTML += x;
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        }
        
        table.appendChild(thead);
        thead.appendChild(thRow);
        table.appendChild(tbody);
        jsonTableView.appendChild(table);

    }

    catch(e){
        console.log(err);
    }
    
}

JsonMainDatas();



// Fibonacci series
let fiboselect = document.getElementById('fibo-select');
let fiboWrapper = document.getElementById('fiboWrapper');

fiboselect.addEventListener('change',function(){
    let fibocount = parseInt(this.value);
    console.log(fibocount);
    fibo(fibocount);
});


function fibo(fibocount){
let f1 = 0;
let f2 = 1;
let summy;

fiboWrapper.innerHTML = '';

fiboWrapper.innerHTML += `${f1},${f2}`;

for(let f=2;f<fibocount;f++){
    summy = f1+f2;
    fiboWrapper.innerHTML += `,${summy}`;
    f1 = f2;
    f2 = summy;
}

}

fibo(parseInt(fiboselect.value));