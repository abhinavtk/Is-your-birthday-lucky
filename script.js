const dateOfBirth = document.querySelector('#dob');
const luckyNumber = document.querySelector("#lucky-no");
const checkNumberButton = document.querySelector("#check-number");
const outputText = document.querySelector("#output-txt");

function checkNumberIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (dob&&luckyNumber.value)
        compareValues(sum, luckyNumber.value);
    
    else
        outputText.innerText = "Please enter both values!";
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index of dob){  // when we have iterator,wecanuse for loop like this
        sum += Number(index);   //Number(dob.charAt(index));
    }
    return sum;
}

function compareValues(sum, luckyNumber){
    if (sum%luckyNumber === 0){
        outputText.innerText = "Awesome!! Your birthday is Lucky!!! 😍😍";
    }
    else{
        outputText.innerText = "Sorry :( Your birthday is not lucky!!! 🤔"
    }
}

checkNumberButton.addEventListener('click', checkNumberIsLucky);