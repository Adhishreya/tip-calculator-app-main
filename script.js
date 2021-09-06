var billValue = 0,peopleCount=0;
Array.from(document.getElementsByClassName("rate-button")).forEach((element,i)=>{
    element.addEventListener("click",()=>{
        billValue=Number(element.value);
        console.log(billValue);
    });

    // console.log(element)
});
document.getElementsByClassName("editable")[0].addEventListener("input",(e)=>{
    // console.log(e.target.value)
    billValue = e.target.value;
    console.log(billValue);
});

document.getElementsByClassName("reset")[0].addEventListener("click",()=>{
    if(peopleCount == 0)
    {   
        console.log('clicked')
        const style={"background":"red","width":"10rem"}
        document.getElementsByClassName("people-input")[0].style.border="1px solid red";
    }
})
// console.log(value);