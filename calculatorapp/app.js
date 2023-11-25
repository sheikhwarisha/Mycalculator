var result = document.getElementById('result');

function display(number) {
    result.value += number;
}
function calculate() {
  var finalnum = result.value;
    var finalresult = eval(finalnum);
    result.value = finalresult ;

}
// function clear(){
//   result.value = "";

// }
function cl(){
  result.value = "";

}
function del(){
        result.value = result.value.slice(0,-1); 
}
