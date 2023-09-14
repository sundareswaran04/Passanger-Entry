let count_el=0
let countel=document.getElementById("count-el")


function increment(){
    count_el=count_el+1
    document.getElementById("count-el").innerText=count_el;
}
function save(){
    
    document.getElementById("entry").innerText+=count_el+'-'
    
    
}
function clearMode()
{
    document.getElementById("count-el").innerText=""
    count_el=0
    document.getElementById("entry").innerText=""
    window.alert("Do you want to Clear")
}