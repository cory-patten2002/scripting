const buttons = document.querySelectorAll('button');
const disp = document.querySelector('#display');
const res = document.querySelector('#result');
const calc = document.querySelector('#calculation');

let calculation = '';
let prevResult = null;

buttons.forEach((button) => {
    button.addEventListener('click', buttonEvent, false);
})

function buttonEvent(ev){
    const data = ev.target.textContent;
    console.log(data);
    switch(data) {
        case '+':        
        case '-':
        case '*':
        case '/':{
            calculation += ` ${data} `;
            calc.textContent = calculation;
            break;
        }
        case '=':{
            prevResult = calculate(calculation);
            res.textContent = prevResult;
            calculation = '';
            currentNum = '';
            break;
        }
        case '1':        
        case '2':
        case '3':
        case '4':       
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':{
            calculation += data;
            calc.textContent = calculation
            break;
        }
        case 'c':{
            calculation = '';
            calc.innerHTML = calculation;
            break;
        }
        case 'prev':{
            if(prevResult != null){
                calculation += prevResult;
            } else {
                calculation += '0';
            }
            calc.innerHTML = calculation;
            break;
        }
    } 
}

function calculate(calculation){
    const result = eval(calculation);
    console.log(`Calculation: ${calculation}`);
    console.log(`Result: ${result}`);
    String(result);
    return result;
}