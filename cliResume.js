//showing resume on command line
var inquirer = require('inquirer');
const cp = require('child_process')


function displayDetails(){
inquirer
  .prompt([
    {
           type:'list',
           name :'Selection',
           choices:['About' , 'Skills' , 'Projects' , 'Academics']
    }
  ])
  .then((choices) => {
       if(choices.Selection =='About'){
              console.log(`My name is Chirag,I am noob programmer learning DSA and DEV from pepcoding.`)
              displayNext()
       }

       else if(choices.Selection=='Skills'){
              console.log('JavaScript, Java ')
              displayNext()
       }

       else if(choices.Selection=='Projects'){
            cp.execSync('start chrome https://github.com/chirag16900')
            displayNext()
       }

       else if(choices.Selection=='Academics'){
              cp.execSync('start chrome')
              displayNext()
       }
  })
 
}

displayDetails()


function displayNext(){
       var inquirer = require('inquirer');
inquirer
  .prompt([
         { type:'list',
       name :'GoBack',
       choices:['back']
         }
  ])
  .then((choice) => {
    if(choice.GoBack = 'back'){
           displayDetails()
    }
  })
 
}