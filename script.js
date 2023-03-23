//Declare Variable
let display =document.getElementsByName("display")[0]

//function to append a value to the display
function appendvalue(val){
display.value += val
}
//function to clear the display field
function cleaarDisplay(){
    display.value =""
}
//function delete for the last appending value in the display field
function deleteValue(){
    display.value =display.value.toString().slice(0,-1)
}
//function to evaluate the expression
function calculate(){
    display.value =eval(display.value)
}