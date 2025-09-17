const body=document.body;

const calculator=document.createElement('div');
calculator.className="calculator"
body.append(calculator)

const display=document.createElement('div');
display.className="display";
calculator.append(display);

const numPad=document.createElement('div');
numPad.className="numPad";

const opPad=document.createElement('div');
opPad.className="opPad"
calculator.append(numPad);
calculator.append(opPad);

// operator buttons
const addBtn=document.createElement('button');
const subBtn=document.createElement('button');
const multBtn=document.createElement('button');
const divBtn=document.createElement('button');
const equalBtn=document.createElement('button');
const clearBtn=document.createElement('button');

addBtn.className="op";
subBtn.className="op";
multBtn.className="op";
divBtn.className="op";
equalBtn.className="op";
clearBtn.className="op"

addBtn.id="+"
subBtn.id="-"
multBtn.id="*"
divBtn.id="/"
equalBtn.id="="
clearBtn.id="c"

addBtn.textContent='+';
subBtn.textContent='-';
multBtn.textContent='*';
divBtn.textContent='/';
equalBtn.textContent='=';
clearBtn.textContent='c';

opPad.append(addBtn);
opPad.append(subBtn);
opPad.append(multBtn);
opPad.append(divBtn);
opPad.append(equalBtn);
opPad.append(clearBtn);

function createNumBtn(){
    for(i=1;i<10;i++){
        const button = document.createElement('button');
        button.className="num";
        button.id=`${i}`;
        button.textContent=`${i}`;
        numPad.append(button);
    }
    const zero = document.createElement('button');
    zero.className="num";
    zero.id='0';
    zero.textContent='0';
    numPad.append(zero)
}

createNumBtn();

// operation
displayArray=[];

// turn strings to number
const numBtns=document.querySelectorAll('.num');
numBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        display.textContent+=btn.textContent;
    })
})
// push numbers on display into array
function pushNumber(){
    const number = parseInt(display.textContent)
    displayArray.push(number);
    console.log(displayArray);
}
// add
addBtn.addEventListener('click',()=>{
    pushNumber();
    displayArray.push(addBtn.textContent);
    console.log(displayArray);
    display.textContent='';
})

equalBtn.addEventListener('click',()=>{
    pushNumber();
    const evenIndex = displayArray.filter((element, index)=>{
        return index % 2 === 0;
    })
    console.log(evenIndex);
})

clearBtn.addEventListener('click',()=>{
    display.textContent='';
    displayArray=[];
    console.log(displayArray)
})