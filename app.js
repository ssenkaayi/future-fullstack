

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m

const log = console.log;

// implementing synchronous 

// on tasks that execute instantly.

// log("go to restuarant");
// log("check if what you want is there");
// log("make order");


// implementing Async 
// because some actions take sometime to operate.

// using time function to implicitly wait for 1 minute

// log("if restaurant is open");
// setTimeout(()=>log(`go to restuarant for ${1} minute`),1000);
// setTimeout(()=>log(`check if what you want is there for ${2} minutes`),2000);
// log("make order");

// however, javascript cant automatically controll it because its single threaded.

// this can be corrected with call back function

// function ifRestaurantOpen(){log("if restaurant is open");

//     setTimeout(()=>{log(`go to restuarant for ${1} minute`)

//         setTimeout(()=>{log(`check if what you want is there for ${2} minutes`)

//             setTimeout(()=>{log(`taking ${3} minutes to make an order`)

//             },30000) 
//         },20000)
//     },10000);
// }

// ifRestaurantOpen();

// to avoid the callback hell, we opt for promises.

const makeOrde = new Promise((resolve,reject)=>{

    let error = false;

    setTimeout(()=>{

    if(!error){
        resolve('success');
    }else{
        reject('failed')
    }

    },1000)

});

log(makeOrde);
makeOrde
.then(res => {log(res)})


function makeOrder(){

    return new Promise((resolve,reject)=>{

    let error = false;

    setTimeout(()=>{

    if(!error){
        resolve({
            message:'success',
            
        }
        );
    }else{
        reject('failed')
    }

    },1000)

});
    
}

log(makeOrder())

makeOrder()
.then(response => {log(response)})
// .then(mess => {log(mess.getvalue())})









