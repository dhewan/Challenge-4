
const getinput1 = () =>{
    let value1=document.getElementById("input1").value
    return value1
}
const getinput2 = () =>{
    let value2=document.getElementById("input2").value
    return value2
}
const getinput3 = () =>{
    let value3=document.getElementById("input3").value
    return value3
}
const getinput4 = () =>{
    let value4=document.getElementById("input4").value
    return value4
}
const buttonSearch = document.getElementById("submit")
buttonSearch.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(getinput1());
    console.log(getinput2());
    console.log(getinput3());
    console.log(getinput4());

if(getinput4 === ""){
    filterCar(getinput1,getinput2,getinput3)
}
if (getinput4 !== "") {
    filterCar(getinput1,getinput2,getinput3,getinput4)
}
})