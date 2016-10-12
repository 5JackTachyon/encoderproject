
var letter

function keyCode(event) {
    var x = event.keyCode;
    if (x == 65) {
      document.getElementById("textArea").innerHTML += "a";
    }
    else if(x == 66) {
      document.getElementById("textArea").innerHTML += "b";
    }
    else if(x == 67) {
      document.getElementById("textArea").innerHTML += "c";
    }
    else if(x == 68) {
      document.getElementById("textArea").innerHTML += "d";
    }
    else if(x == 69) {
      document.getElementById("textArea").innerHTML += "e";
    }
    else if(x == 70) {
      document.getElementById("textArea").innerHTML += "f";
    }
    else if(x == 71) {
      document.getElementById("textArea").innerHTML += "g";
    }
    else if(x == 72) {
      document.getElementById("textArea").innerHTML += "h";
    }
    else if(x == 73) {
      document.getElementById("textArea").innerHTML += "i";
    }
    else if(x == 74) {
      document.getElementById("textArea").innerHTML += "j";
    }
    else if(x == 75) {
      document.getElementById("textArea").innerHTML += "k";
    }
    else if(x == 76) {
      document.getElementById("textArea").innerHTML += "l";
    }
    else if(x == 77) {
      document.getElementById("textArea").innerHTML += "m";
    }
    else if(x == 78) {
      document.getElementById("textArea").innerHTML += "n";
    }
    else if(x == 79) {
      document.getElementById("textArea").innerHTML += "o";
    }
    else if(x == 80) {
      document.getElementById("textArea").innerHTML += "p";
    }
    else if(x == 81) {
      document.getElementById("textArea").innerHTML += "q";
    }
    else if(x == 82) {
      document.getElementById("textArea").innerHTML += "r";
    }
    else if(x == 83) {
      document.getElementById("textArea").innerHTML += "s";
    }
    else if(x == 84) {
      document.getElementById("textArea").innerHTML += "t";
    }
    else if(x == 85) {
      document.getElementById("textArea").innerHTML += "u";
    }
    else if(x == 86) {
      document.getElementById("textArea").innerHTML += "v";
    }
    else if(x == 87) {
      document.getElementById("textArea").innerHTML += "w";
    }
    else if(x == 88) {
      document.getElementById("textArea").innerHTML += "x";
    }
    else if(x == 89) {
      document.getElementById("textArea").innerHTML += "y";
    }
    else if(x == 90) {
      document.getElementById("textArea").innerHTML += "z";
    }
    else if(x == 32) {
      document.getElementById("textArea").innerHTML += " ";
    }
    else if(x == 49) {
      document.getElementById("textArea").innerHTML += "1";
    }
    else if(x == 191) {
      document.getElementById("textArea").innerHTML += "?";
    }
    else if(x == 188) {
      document.getElementById("textArea").innerHTML += ",";
    }
    else if(x == 190) {
      document.getElementById("textArea").innerHTML += ".";
    }
    else if(x == 48) {
      document.getElementById("textArea").innerHTML += "0";
    }
    else if(x == 50) {
      document.getElementById("textArea").innerHTML += "2";
    }
    else if(x == 51) {
      document.getElementById("textArea").innerHTML += "3";
    }
    else if(x == 52) {
      document.getElementById("textArea").innerHTML += "4";
    }
    else if(x == 53) {
      document.getElementById("textArea").innerHTML += "5";
    }
    else if(x == 54) {
      document.getElementById("textArea").innerHTML += "6";
    }
    else if(x == 55) {
      document.getElementById("textArea").innerHTML += "7";
    }
    else if(x == 56) {
      document.getElementById("textArea").innerHTML += "8";
    }
    else if(x == 57) {
      document.getElementById("textArea").innerHTML += "9";
    }
    else if(x == 187) {
      document.getElementById("textArea").innerHTML += "=";
    }





  }

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});
