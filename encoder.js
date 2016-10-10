var inputEcho
var echo








function echoInput(){
inputEcho = document.getElementById("inputArea").value;
//document.getElemmentById("chat-area").textContent += inputTalk;
echo = inputEcho;
document.getElementById("textArea").innerHTML += echo;


}


function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 13){
      echoInput();
    }
}
