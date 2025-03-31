function textDisplay(){
    let textinfo = document.getElementById('text-display');
    let text = "Hello Ik!";
    textinfo.innerHTML = text;
}

textDisplay();


function textChange(){
    let textChange = document.getElementById('textChange');
    textChange.innerHTML = textChange.innerHTML === 'Ismail' ? "Khan" : "Ismail";
}

function arrayItemTotal(){
    let arrayCount = document.getElementById('arrayCount');
    let arrayitemsTotal = document.getElementById('arrayitemsTotal');
    let arr1 = [1,2,3,4,5];
    let total = 0;
    total = arr1.reduce((acc,num)=> acc + num); 
    arrayCount.innerHTML = `${arr1.length} number's are there in this list`;
    arrayitemsTotal.innerHTML = `${arr1.join('+')} is ${total}`;
} 

arrayItemTotal();

function arrayFind(){
    let arrayFindNumbers = document.getElementById('arrayFindNumbers');
    let arrayFilterNumber = document.getElementById('arrayFilterNumber');
    let arr1 = [6,12,18,24,30,18];
    let find;
    find = arr1.find((x)=>(
        x===18
    ))
    arrayFindNumbers.innerHTML = `Input List ${arr1.join(',')}`;
    arrayFindResult.innerHTML = find !== undefined ? `Number ${find} is there` : `Number ${find} is not here`;
}

arrayFind();


function arrayFilter(){
    let arrayFilterNumbers = document.getElementById('arrayFilterNumbers');
    let arrayFilterinputNumber = document.getElementById('arrayFilterinputNumber');
    let arrayFilterResult = document.getElementById('arrayFilterResult');
    let arr1 = [6,12,18,24,30,18];
    let arrayFilterNumber2 = parseInt(arrayFilterinputNumber.value) ;
    
    let Finalresult;
    let filterdata = arr1.filter((x)=> x === arrayFilterNumber2);
    Finalresult = filterdata.length > 0 ? `${arrayFilterNumber2} is there ${filterdata.length} times` : `${arrayFilterNumber2} is not there`

    arrayFilterNumbers.innerHTML = `Input List ${arr1.join(',')}`;
    arrayFilterResult.innerHTML = `${Finalresult} `;
}



let primeinputvalue = document.getElementById('primeinputvalue');
let primelist = document.getElementById('primelist');
primeinputvalue.addEventListener('change',function(){
    let count = parseInt(this.value);
    console.log(count);
    primelist.innerHTML = "";
    let num = 2;
    while(num<count){
        let primeNo = true;
        for (let i=2;i<Math.sqrt(num);i++){
            if(num%i===0){
                primeNo = false;
            } 
        }
        if(primeNo === true){
            primelist.innerHTML += `${num},`;
        }
        num++;
    }
    
})



let fiboinputvalue = document.getElementById('fiboinputvalue');
fiboinputvalue.addEventListener('change',function(){
    let num1 = 0;
    let num2 = 1;
    let count = parseInt(this.value);
    let fiboData = document.getElementById('fiboData');
    fiboData.innerHTML = "";


    fiboData.innerHTML += `${num1},${num2}`

    for(let i=2; i< count;i++){
        let result = num1 + num2;
        fiboData.innerHTML += `,${result}`;
        num1 = num2;
        num2 = result;
    }
})

let formBtn = document.getElementById('formBtn');
let formDisplay = document.getElementById('formDisplay');
let formInput =  document.querySelectorAll('.form-input');
formBtn.addEventListener('click',function(event){
    event.preventDefault(); 
    let formInputValue = "";
    formInput.forEach((x,i)=>{
        if(i===0){ formInputValue += `<div>Name is: ${x.value}</div>`;}
        if(i===1){ formInputValue += `<div>Email is: ${x.value}</div>`;}
        if(i===2){ formInputValue += `<div>Number is: ${x.value}</div>`;}
        formDisplay.innerHTML = formInputValue;
    })
})


// Table structure
async function tableDisplay(){
    let thValues = ['User Id','Id','Title','body'];
    let tableStructureDisplay = document.getElementById('tableStructure');
    let tableDataFetch = await fetch('https://jsonplaceholder.typicode.com/posts/');
    let tableData = await tableDataFetch.json();

    // Add a new row to JSON data using push()
    tableData.push({
        userId: 12, 
        id: 101, 
        title: "Ismail", 
        body: "Front End Developer."
    });

    tableData.pop();


    let table = document.createElement('table');
    table.setAttribute('class','table-view');
    let thead = document.createElement('thead');
    let thRow = document.createElement('tr');
    let tbody = document.createElement('tbody');

    
    thValues.forEach((x)=>{
        let th = document.createElement('th');
        th.innerHTML += x;
        thRow.appendChild(th);
    });

    for(let i=0;i<tableData.length;i++){
        let tr = document.createElement('tr');
        [tableData[i].userId,tableData[i].id,tableData[i].title,tableData[i].body].forEach((x)=>{
            let td = document.createElement('td');
            td.innerHTML += x;
            tr.appendChild(td);
        })

        tbody.appendChild(tr);
    }

   
    table.appendChild(thead);
    thead.appendChild(thRow);
    table.appendChild(tbody);
    tableStructureDisplay.appendChild(table);
}


tableDisplay();


// Printing star

let starSection = document.getElementById('starSection');
let star = '*';
let starvalue = '';
for(let k=0;k<5;k++){
    starvalue = starvalue + star;
    starSection.innerHTML += `${starvalue} <br/>`;
}


let RevstarSection = document.getElementById('RevstarSection');
let revoutput = "";
    for (let i = 5; i > 0; i--) {
        revoutput +=  `${'*'.repeat(i)} <br/>`;
    }
    RevstarSection.innerHTML += revoutput;

// Text Display
let nameSection = document.getElementById('nameSection');
let RevnameSection = document.getElementById('RevnameSection');
let uname = "Ismail Khan V";
let output = "";
for(let i=0;i<uname.length;i++){
    output += uname[i];
    nameSection.innerHTML += `${output} <br/>`;
}

let revname;
for(let j=uname.length;j > 0;j--){
    revname = uname.substring(0,j);
    RevnameSection.innerHTML += `${revname} <br/>`;
}


//spred Method
let spreadSection = document.getElementById('spreadSection');

let firstname = "Front Ismail";
let middlename = "end";
let lastname = "developer";
let fullname = [...firstname, ...middlename, ...lastname].join("");
spreadSection.innerText = firstname.split('-');

let newname = "Salman Khan";
console.log(newname.slice(0,6));


let word = "Hello-Ik";

let sp = word.split("-");
console.log(sp);

let arr1 = [5,10,15,20,25];

arr1.forEach((x)=>{
   console.log(++x); 
})

let arr2 = [5,10,15,20,25];

arr1.map((x)=>{
   console.log(++x); 
})

// rest method
let arr3 = [1,2,3,4,5,6];

let [x,y,...z] = arr3;

console.log("X Value is " +x);
console.log("Y Value is " +y);
console.log("Z Value is " +z);


// Object Methods : keys, Values, entries

let objectKeyValues =  document.getElementById('objectValues');
let data = [
    {
        uname: 'ik',
        age: '28',
        location: 'CBE'    
    },
    {
        uname: 'khan',
        age: '28',
        location: 'CBE'    
    },
]

data.forEach((x,index)=>{
    Object.keys(x).map((key)=>{
        objectKeyValues.innerHTML += `<div>${index+1}.<b>${key}: </b> ${x[key]}</div> `;
    });
});


setTimeout((x)=>{
    console.log("Set Timeout function display here");
},5000);

setInterval(()=>{
    console.log("Set Interval function display here");
},2000)

function add(){
    sum();
}

function sum(){
    let a=5;
    let b=10;
    let c= a+b;
    console.log("Sum Is " +c);
}

add();
