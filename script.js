var billValue = 0,peopleCount=0,rateValue=0,tipAmount = 0.0,totalAmount = 0.0 ;
const tipAmountElement =  document.getElementsByClassName("tip-amount")[0];
const totalAmountElement =  document.getElementsByClassName("total-amount")[0];
const resetButtton = document.getElementsByClassName("reset")[0];
resetButtton.disabled = true;

resetButtton.addEventListener("click",()=>{
    console.log("click")
    totalAmountElement.innerHTML = `$0.00`;
    tipAmountElement.innerHTML = `$0.00`;
});
function setValue()
{
    if(peopleCount != 0)
    {
        tipAmount = (billValue*rateValue)/(peopleCount*100);
        totalAmount = ((billValue*rateValue*0.01)+billValue)/peopleCount;
        resetButtton.disabled = false;
        // /Number(peopleCount);
    }
    console.log(totalAmount);
    // console.log(document.getElementsByClassName("tip-amount")[0])
    
    // document.getElementsByClassName("tip-amount")[0].innerHTML =`<h1>$${totalAmount.toFixed(2).toString()}</h1>`;
    
    
    totalAmountElement.innerHTML = `$${totalAmount.toFixed(2).toString()}`;
    tipAmountElement.innerHTML = `$${tipAmount.toFixed(2).toString()}`;
    // console.log(totalAmount)
}
Array.from(document.getElementsByClassName("rate-button")).forEach((element,i)=>{
    element.addEventListener("click",()=>{
        rateValue=Number(element.value);
        setValue();
        console.log(rateValue);
    });

    // console.log(element)
});
document.getElementsByClassName("editable")[0].addEventListener("input",(e)=>{
    rateValue = Number(e.target.value);
    setValue();
    console.log(rateValue);
});

document.getElementsByClassName("bill-input")[0].addEventListener("input",(e)=>{
    billValue = Number(e.target.value);
    setValue();
    console.log(billValue);
});

document.getElementsByClassName("people-input")[0].addEventListener("input",(e)=>{
    peopleCount = Number(e.target.value);
    console.log(typeof Number(peopleCount));
    
    if(peopleCount == 0)
    {   
        const style={"background":"red","width":"10rem"}
        document.getElementsByClassName("people-input")[0].style.border="2px solid red";
        document.getElementsByClassName("warning")[0].style="display:block;color:red;text-align:right";
        totalAmountElement.innerHTML = `$${0.00.toString()}`;
        tipAmountElement.innerHTML = `$${0.00.toString()}`;
    }
    else
    {
        document.getElementsByClassName("warning")[0].style.display="none";
        document.getElementsByClassName("people-input")[0].style.border="none";        
        setValue();

    }
})
// console.log(value);