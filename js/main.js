//setTimeout
// setTimeout(()=>{
//     console.log("Hello");
    
// },5000)
//setInterval
// setInterval(()=>{
//     console.log("World");
// },5000)

//addEventlistener
// let btn = document.getElementById('btn')
// btn.addEventListener('click',()=>{
//     setTimeout(()=>{
//         btn.style.backgroundColor="red"
//         btn.style.color="white"
        
//     },5000)
// })
// callback
// const sub = (c)=>{
//     console.log(c);
    
// }

// const adding = ()=>{
//     let c = 20+30;
//     // sub(c)
//     return c
// }

// console.log(adding());

//Async
    //Promise
        // const booking = ()=>{
        //     return new Promise ((reject,resolved)=>{
        //         let success = false;
        //         if(success){
        //             resolved("Ticket is Booked Amount of the Ticket :230")
        //         }
        //         else{
        //             reject("Unable to Book the Ticket")
        //         }
        //     })
        // }
        // bookingTicket.then((result)=>{
        //     console.log(result);            
        // }).catch((error)=>{
        //     console.log(error);
            
        // })

        // const Employee1 = new Promise ((reject,resolved)=>{
        //     const Present = true;
        //     if(Present){
        //         setTimeout(()=>{
        //             resolved("He is working Today")
        //         },2000)
        //     }
        //     else{
        //         reject("He is Absent")
        //     }
        // })
        // const Employee2 = new Promise ((reject,resolved)=>{
        //     const Present = false;
        //     if(Present){
        //         setTimeout(()=>{
        //             resolved("Employee2 is working Today")
        //         },1000)
        //     }
        //     else{
        //         reject("Employee2 is Absent")
        //     }
        // })
        // const Employee3 = new Promise ((reject,resolved)=>{
        //     const Present = true;
        //     if(Present){
        //         setTimeout(() => {
        //             resolved("Employee3 is working Today")
        //         }, 10000);
        //     }
        //     else{
        //         reject("Employee3 is Absent")
        //     }
        // })
        // const Employee4 = new Promise ((reject,resolved)=>{
        //     const Present = true;
        //     if(Present){
        //         setTimeout(() => {
        //             resolved("Employee4 is working Today")
        //         }, 1000);
        //     }
        //     else{
        //         reject("Employee4 is Absent")
        //     }
        // })
        
        // Promise.allSettled([Employee1,Employee2,Employee3,Employee4]).then((res)=>{
        //     console.log(res);            
        // }).catch((err)=>{
        //     console.log(err);
            
        // })

// Aysnc/await
// async function names(){

// }
//fetch
// const APIS = new Promise ((resolved,reject)=>{
//     fetch('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         if(!res.ok){
//             reject("Unable to conncet")
//         }
//         else{
//             resolved(res)
//         }
        
//     })})
//     APIS.then(async(succ)=>{
//         let data = await succ.json()
//         console.log(data);        
//     }).catch((err)=>{
//         console.log(err);
        
//     })

const datas = async()=>{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/30',
        // {
        //     method:"PUT",
        //     headers:{
        //         "Content_type":"application/json"
        //     },
        //         body:JSON.stringify({
        //             userID:10,
        //             userName:"XYZ"
        //         })
        // }
        )
    console.log(response);
        if(!response.ok){
            console.log("Unale to connect API");        
        }
        let data = await response.json()
        console.log(data);
    }
    catch(err){
        console.log(err);
        
    }
    
}
datas();


//DOM
// Document Object Module

    // let btn = document.getElementsByTagName('button')
    // for(let i=0;i<btn.length;i++){
    //     btn[i].addEventListener('click',()=>{
    //         console.log("Button Clicked");
            
    //     })
    // }
    // let div = document.createElement('div')
    // let h1 = document.createElement('h1')
    // let text = document.createElement('input')
    // div.setAttribute("id","Box")
    // text.setAttribute("type","number")
    // h1.innerText = "Hello"
    // div.appendChild(text)
    // div.appendChild(h1)
    // document.body.append(div)

    let heading = ["SNo","Name","Age"]

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    for(let x of heading){
        let th = document.createElement('th')
        th.innerHTML = x
        thead.appendChild(th)
    }
    let tbody = document.createElement('tbody')
    table.appendChild(thead)
    table.appendChild(tbody)
    document.body.append(table)
    