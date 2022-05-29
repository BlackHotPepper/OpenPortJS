const express = require("express");
const app = express();
const readline = require('readline');

const begin = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("                           ");
console.log("    ___ ___ _____ ____     ");
console.log("   | . | . |_   _|  __|    ");
console.log("   | | |  _|_| | |__  |       CREATED BY: black-hot-pepper ");
console.log("   |___|_| |___. |____|    ");
console.log("                           ");

console.log("Open one specific port             -    1");
console.log("Open multiple ports in a range     -    2");

begin.question('>> ', (ans) => {

  if (ans == 1){

    console.log("\nEnter the port number")
    begin.question('>> ', (port) => {

      app.listen(`${port}`, function (){

        console.log(`Open server on port: ${port}`)

      })

    });
  }else if (ans != 1 && ans == 2){

    console.log("\nEnter the min port")
    begin.question('>> ', (min) => {

      console.log("\nEnter the max port")
      begin.question('>> ', (max) => {

        console.log("\n=================PORTS=================");
        for (var i = `${min}`; i <= `${max}`; i++){

          app.listen(i, function (){

            console.log(`Open server on port: ${min++}`);
            console.log(`http://localhost:${min-1}\n`);

          })

        }

      });

    });

  }else{
    console.log("Please, restart the terminal and type a correct answer!")
  }

});
