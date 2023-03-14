
const buttons = document.querySelectorAll('.btn');
const para =document.querySelector('#main');
const para3 = document.querySelector('dup2')
const para2=document.querySelector('#dup');
let choice;

let intcho;
let compcho;

let playscore;
let compscore;
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
function playround(){
    let win =[[0,2,1],[1,0,2],[2,1,0]];
}
function playgame(){
    para.textContent = 'Choose rock,paper or scissors'
    playround();
    if (playscore ==5){
        para2.textContent= 'you won'
        playscore=0;
        compscore=0;

    }
    else if(compscore ==5){
        para2.textContent ='You lost'
        playscore=0;
        compscore=0;

    }


}
console.log('hi')
