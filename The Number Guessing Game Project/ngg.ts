#!/user/bin/env node
import inquirer from "inquirer";

console.log("Guess Number in b/w 1 to 10");
let randomnumb = Math.floor(Math.random()*10);
console.log("randomnumb is: random");

let sysNumb: number = randomnumb;
let numbTries : number = 3;


interface answertype {
    
    guessNumb : number,
}
while(numbTries > 0){
   
  let answer: answertype =  await inquirer.prompt([
    {
        type: "number" ,
        name: "guessNumb",
        message: "Choose your number",
        
   }]);
       console.log("answer");
    if (answer.guessNumb === sysNumb ){
      console.log("Hurray! \n You Win!");
      numbTries =0;
     }  else{
        console.log("YOU LOOSE");
        console.log(`Number of tries ${numbTries -1} left`);
     }
      numbTries--;

      
    };