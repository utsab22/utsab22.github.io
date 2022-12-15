const readline = require('readline').createInterface({
    input: process.stdin ,
    output: process.stdout,
});

let sum = 0;

function getNumber(){
    readline.question("Enter the number?  ", num=>{
        if(num.toLowerCase() != "stop"){
            sum += parseInt(num); 
            getNumber();
        }else{
            console.log(`The sum of all the numbers that the user has entered. is ${sum} .`);
            readline.close();
        }

    });
}

getNumber();