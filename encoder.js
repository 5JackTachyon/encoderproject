
var letter


$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

  function keyCode(event) {

if($("input:checked").val() == "echo"){
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

else if($("input:checked").val() == "cipher"){

      var x = event.keyCode;
      if (x == 65) {
        document.getElementById("textArea").innerHTML += "z";
      }
      else if(x == 66) {
        document.getElementById("textArea").innerHTML += "a";
      }
      else if(x == 67) {
        document.getElementById("textArea").innerHTML += "b";
      }
      else if(x == 68) {
        document.getElementById("textArea").innerHTML += "c";
      }
      else if(x == 69) {
        document.getElementById("textArea").innerHTML += "d";
      }
      else if(x == 70) {
        document.getElementById("textArea").innerHTML += "e";
      }
      else if(x == 71) {
        document.getElementById("textArea").innerHTML += "f";
      }
      else if(x == 72) {
        document.getElementById("textArea").innerHTML += "g";
      }
      else if(x == 73) {
        document.getElementById("textArea").innerHTML += "h";
      }
      else if(x == 74) {
        document.getElementById("textArea").innerHTML += "i";
      }
      else if(x == 75) {
        document.getElementById("textArea").innerHTML += "j";
      }
      else if(x == 76) {
        document.getElementById("textArea").innerHTML += "k";
      }
      else if(x == 77) {
        document.getElementById("textArea").innerHTML += "l";
      }
      else if(x == 78) {
        document.getElementById("textArea").innerHTML += "m";
      }
      else if(x == 79) {
        document.getElementById("textArea").innerHTML += "n";
      }
      else if(x == 80) {
        document.getElementById("textArea").innerHTML += "o";
      }
      else if(x == 81) {
        document.getElementById("textArea").innerHTML += "p";
      }
      else if(x == 82) {
        document.getElementById("textArea").innerHTML += "q";
      }
      else if(x == 83) {
        document.getElementById("textArea").innerHTML += "r";
      }
      else if(x == 84) {
        document.getElementById("textArea").innerHTML += "s";
      }
      else if(x == 85) {
        document.getElementById("textArea").innerHTML += "t";
      }
      else if(x == 86) {
        document.getElementById("textArea").innerHTML += "u";
      }
      else if(x == 87) {
        document.getElementById("textArea").innerHTML += "v";
      }
      else if(x == 88) {
        document.getElementById("textArea").innerHTML += "w";
      }
      else if(x == 89) {
        document.getElementById("textArea").innerHTML += "x";
      }
      else if(x == 90) {
        document.getElementById("textArea").innerHTML += "y";
      }
      else if(x == 32) {
        document.getElementById("textArea").innerHTML += "=";
      }
      else if(x == 49) {
        document.getElementById("textArea").innerHTML += " ";
      }
      else if(x == 191) {
        document.getElementById("textArea").innerHTML += "1";
      }
      else if(x == 188) {
        document.getElementById("textArea").innerHTML += "?";
      }
      else if(x == 190) {
        document.getElementById("textArea").innerHTML += ",";
      }
      else if(x == 48) {
        document.getElementById("textArea").innerHTML += ".";
      }
      else if(x == 50) {
        document.getElementById("textArea").innerHTML += "0";
      }
      else if(x == 51) {
        document.getElementById("textArea").innerHTML += "2";
      }
      else if(x == 52) {
        document.getElementById("textArea").innerHTML += "3";
      }
      else if(x == 53) {
        document.getElementById("textArea").innerHTML += "4";
      }
      else if(x == 54) {
        document.getElementById("textArea").innerHTML += "5";
      }
      else if(x == 55) {
        document.getElementById("textArea").innerHTML += "6";
      }
      else if(x == 56) {
        document.getElementById("textArea").innerHTML += "7";
      }
      else if(x == 57) {
        document.getElementById("textArea").innerHTML += "8";
      }
      else if(x == 187) {
        document.getElementById("textArea").innerHTML += "9";
      }




}


else if($("input:checked").val() == "heiroglyphics"){

var x = event.keyCode;
if (x == 65) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/a.gif'>";
}
else if(x == 66) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/b.gif'>";
}
else if(x == 67) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/c.gif'>";
}
else if(x == 68) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/d.gif'>";
}
else if(x == 69) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/e.gif'>";
}
else if(x == 70) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/f.gif'>";
}
else if(x == 71) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/g.gif'>";
}
else if(x == 72) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/h.gif'>";
}
else if(x == 73) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/i.gif'>";
}
else if(x == 74) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/j.gif'>";
}
else if(x == 75) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/k.gif'>";
}
else if(x == 76) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/l.gif'>";
}
else if(x == 77) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/m.gif'>";
}
else if(x == 78) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/n.gif'>";
}
else if(x == 79) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/o.gif'>";
}
else if(x == 80) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/p.gif'>";
}
else if(x == 81) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/q.gif'>";
}
else if(x == 82) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/r.gif'>";
}
else if(x == 83) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/s.gif'>";
}
else if(x == 84) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/t.gif'>";
}
else if(x == 85) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/u.gif'>";
}
else if(x == 86) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/v.gif'>";
}
else if(x == 87) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/w.gif'>";
}
else if(x == 88) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/x.gif'>";
}
else if(x == 89) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/y.gif'>";
}
else if(x == 90) {
  document.getElementById("textArea").innerHTML += "<img src='images/heiroglyphics/z.gif'>";
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
}


function keyCodeAll(event) {

    var x = event.keyCode;
    if (x == 65) {
      document.getElementById("translationArea").innerHTML += "a";
    }
    else if(x == 66) {
      document.getElementById("translationArea").innerHTML += "b";
    }
    else if(x == 67) {
      document.getElementById("translationArea").innerHTML += "c";
    }
    else if(x == 68) {
      document.getElementById("translationArea").innerHTML += "d";
    }
    else if(x == 69) {
      document.getElementById("translationArea").innerHTML += "e";
    }
    else if(x == 70) {
      document.getElementById("translationArea").innerHTML += "f";
    }
    else if(x == 71) {
      document.getElementById("translationArea").innerHTML += "g";
    }
    else if(x == 72) {
      document.getElementById("translationArea").innerHTML += "h";
    }
    else if(x == 73) {
      document.getElementById("translationArea").innerHTML += "i";
    }
    else if(x == 74) {
      document.getElementById("translationArea").innerHTML += "j";
    }
    else if(x == 75) {
      document.getElementById("translationArea").innerHTML += "k";
    }
    else if(x == 76) {
      document.getElementById("translationArea").innerHTML += "l";
    }
    else if(x == 77) {
      document.getElementById("translationArea").innerHTML += "m";
    }
    else if(x == 78) {
      document.getElementById("translationArea").innerHTML += "n";
    }
    else if(x == 79) {
      document.getElementById("translationArea").innerHTML += "o";
    }
    else if(x == 80) {
      document.getElementById("translationArea").innerHTML += "p";
    }
    else if(x == 81) {
      document.getElementById("translationArea").innerHTML += "q";
    }
    else if(x == 82) {
      document.getElementById("translationArea").innerHTML += "r";
    }
    else if(x == 83) {
      document.getElementById("translationArea").innerHTML += "s";
    }
    else if(x == 84) {
      document.getElementById("translationArea").innerHTML += "t";
    }
    else if(x == 85) {
      document.getElementById("translationArea").innerHTML += "u";
    }
    else if(x == 86) {
      document.getElementById("translationArea").innerHTML += "v";
    }
    else if(x == 87) {
      document.getElementById("translationArea").innerHTML += "w";
    }
    else if(x == 88) {
      document.getElementById("translationArea").innerHTML += "x";
    }
    else if(x == 89) {
      document.getElementById("translationArea").innerHTML += "y";
    }
    else if(x == 90) {
      document.getElementById("translationArea").innerHTML += "z";
    }
    else if(x == 32) {
      document.getElementById("translationArea").innerHTML += " ";
    }
    else if(x == 49) {
      document.getElementById("translationArea").innerHTML += "1";
    }
    else if(x == 191) {
      document.getElementById("translationArea").innerHTML += "?";
    }
    else if(x == 188) {
      document.getElementById("translationArea").innerHTML += ",";
    }
    else if(x == 190) {
      document.getElementById("translationArea").innerHTML += ".";
    }
    else if(x == 48) {
      document.getElementById("translationArea").innerHTML += "0";
    }
    else if(x == 50) {
      document.getElementById("translationArea").innerHTML += "2";
    }
    else if(x == 51) {
      document.getElementById("translationArea").innerHTML += "3";
    }
    else if(x == 52) {
      document.getElementById("translationArea").innerHTML += "4";
    }
    else if(x == 53) {
      document.getElementById("translationArea").innerHTML += "5";
    }
    else if(x == 54) {
      document.getElementById("translationArea").innerHTML += "6";
    }
    else if(x == 55) {
      document.getElementById("translationArea").innerHTML += "7";
    }
    else if(x == 56) {
      document.getElementById("translationArea").innerHTML += "8";
    }
    else if(x == 57) {
      document.getElementById("translationArea").innerHTML += "9";
    }
    else if(x == 187) {
      document.getElementById("translationArea").innerHTML += "=";
    }


}

function decodeTheBrode() {
  var str = document.getElementById("translationArea").innerHTML;
  var a = str.replace("z", "a");
  var b = str.replace("a", "b");
  var c = str.replace("b", "c");
  var d = str.replace("c", "d");
  var e = str.replace("d", "e");
  var f = str.replace("e", "f");
  var g = str.replace("f", "g");
  var h = str.replace("g", "h");
  var i = str.replace("h", "i");
  var j = str.replace("i", "j");
  var k = str.replace("j", "k");
  var l = str.replace("k", "l");
  var m = str.replace("l", "m");
  var n = str.replace("m", "n");
  var o = str.replace("n", "o");
  var p = str.replace("o", "p");
  var q = str.replace("p", "q");
  var r = str.replace("q", "r");
  var s = str.replace("r", "s");
  var t = str.replace("s", "t");
  var u = str.replace("t", "u");
  var v = str.replace("u", "v");
  var w = str.replace("v", "w");
  var x = str.replace("w", "x");
  var y = str.replace("x", "y");
  var z = str.replace("y", "z");

}
