const billAmount = document.querySelector("#bill-amount");
const checkButton = document.querySelector("#check-button");
const cashGiven = document.querySelector("#cash-given");
const message = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".notes");

const availableNotes = [2000,500,200,100,50,20,10,5,2,1];

checkButton.addEventListener("click", function validateEverything() {
    hideMessage();
    if(billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);        
        }
        else{
            showMessage("go wash the plates");
        }
    }
    else{
        showMessage("bill amount should be greater than 0");
    }
});

function hideMessage(){
    message.style.display = "none";
}

function calculateChange(amountToBeReturned){
    hideMessage();
    for(let i = 0; i<availableNotes.length; i++){
        const numOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        numberOfNotes[i].innerText = numOfNotes;
    }
}

function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}