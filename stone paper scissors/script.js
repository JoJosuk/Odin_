
const buttons = document.querySelectorAll('.btn');
const para =document.querySelector('p');
let choice;
let intcho;
buttons.forEach((button)=>{button.addEventListener('click',updatebutton)})


function updatebutton(){
    choice = this.id;

    if (choice =='stone'){
        intcho=0;

    }
    else if (choice=='paper'){
        intcho=1;
    }
    else if (choice=='scissors'){
        intcho=1;
    }

    playgame();

}
function playgame()
console.log('hi')
