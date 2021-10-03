import {clientList } from './data.js'
// console.log(clientList);


//MAP
// const clients = clientList.map((client,index) =>(
    //     client
    // ))
    
    //Filter
    // const clients = clientList.filter((client) =>(
        //     client.deposit === "M"
        // ))
        
        
        let sum = clientList.map((client,index) =>(
                client.deposit
            )).reduce((accumulator,number) => accumulator + number)
        
        console.log(sum);