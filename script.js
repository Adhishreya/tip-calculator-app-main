var billValue = 0,peopleCount=0,rateValue=0,tipAmount = 0.0,totalAmount = 0.0,index = 0,prevIndex = 0 ;
const tipAmountElement =  document.getElementsByClassName("tip-amount")[0];
const totalAmountElement =  document.getElementsByClassName("total-amount")[0];
const peopleCountElement = document.getElementsByClassName("people-input")[0];
const resetButtton = document.getElementsByClassName("reset")[0];
const billCountElement = document.getElementsByClassName("bill-input")[0];
var buttonArray = Array.from(document.getElementsByClassName("rate-button"));
resetButtton.disabled = true;
resetButtton.style="background-color:hsl(184, 14%, 56%)"
resetButtton.addEventListener("click",()=>{
    // console.log("click")
    buttonArray[prevIndex].style="background-color:hsl(183, 100%, 15%);color:hsl(0, 0%, 100%);";
    totalAmountElement.innerHTML = `$0.00`;
    tipAmountElement.innerHTML = `$0.00`;
    billCountElement.value = '';
    peopleCountElement.value = '';
});
function setValue()
{
    if(peopleCount != 0 && rateValue !=0)
    {
        tipAmount = (billValue*rateValue)/(peopleCount*100);
        totalAmount = ((billValue*rateValue*0.01)+billValue)/peopleCount;
        resetButtton.disabled = false;
    }
    // console.log(totalAmount);
    totalAmountElement.innerHTML = `$${totalAmount.toFixed(2).toString()}`;
    tipAmountElement.innerHTML = `$${tipAmount.toFixed(2).toString()}`;
}

buttonArray.forEach((element,i)=>{
    
    element.addEventListener("click",()=>{
        rateValue=Number(element.value);
        index = i;
    buttonArray[prevIndex].style="background-color:hsl(183, 100%, 15%);color:hsl(0, 0%, 100%);";
    buttonArray[index].style="background-color: hsl(172, 67%, 45%);color:hsl(183, 100%, 15%);"
        setValue();
        prevIndex=i;
    });

});
document.getElementsByClassName("editable")[0].addEventListener("input",(e)=>{
    rateValue = Math.abs(Number(e.target.value));
    document.getElementsByClassName("editable")[0].value=rateValue;
    setValue();
});

billCountElement.addEventListener("input",(e)=>{
    billValue = Math.abs(Number(e.target.value));
    billCountElement.value=billValue;
    setValue();
});

peopleCountElement.addEventListener("input",(e)=>{
    peopleCount = Math.abs(Number(e.target.value));
    peopleCountElement.value=peopleCount;
    if(peopleCount == 0)
    {   
        document.getElementsByClassName("people-input")[0].style.border="2px solid red";
        document.getElementById("warning").style="display:flex;color:red;text-align:right;position:relative;left:1rem;";
        totalAmountElement.innerHTML = `$0.00`;
        tipAmountElement.innerHTML = `$0.00`;
    }
    else
    {
        document.getElementById("warning").style.display="none";
        document.getElementsByClassName("people-input")[0].style.border="none";        
        setValue();
        resetButtton.style="background-color: hsl(172, 67%, 45%)";

    }
});