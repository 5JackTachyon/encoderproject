
var letter

/* Radio Button Code */
$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
});

/*Function Where The Echo, Caesar Cipher, And Heirglypgics Input Checked If/Else If Statements Are*/
  function keyCode(event) {

/*If Statement For Echo*/
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

/*If Statement For Cipher*/
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

/*If Statement For Heiroglyph*/
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
      document.getElementById("translationArea").innerHTML += "b";
    }
    else if(x == 66) {
      document.getElementById("translationArea").innerHTML += "c";
    }
    else if(x == 67) {
      document.getElementById("translationArea").innerHTML += "d";
    }
    else if(x == 68) {
      document.getElementById("translationArea").innerHTML += "e";
    }
    else if(x == 69) {
      document.getElementById("translationArea").innerHTML += "f";
    }
    else if(x == 70) {
      document.getElementById("translationArea").innerHTML += "g";
    }
    else if(x == 71) {
      document.getElementById("translationArea").innerHTML += "h";
    }
    else if(x == 72) {
      document.getElementById("translationArea").innerHTML += "i";
    }
    else if(x == 73) {
      document.getElementById("translationArea").innerHTML += "j";
    }
    else if(x == 74) {
      document.getElementById("translationArea").innerHTML += "k";
    }
    else if(x == 75) {
      document.getElementById("translationArea").innerHTML += "l";
    }
    else if(x == 76) {
      document.getElementById("translationArea").innerHTML += "m";
    }
    else if(x == 77) {
      document.getElementById("translationArea").innerHTML += "n";
    }
    else if(x == 78) {
      document.getElementById("translationArea").innerHTML += "o";
    }
    else if(x == 79) {
      document.getElementById("translationArea").innerHTML += "p";
    }
    else if(x == 80) {
      document.getElementById("translationArea").innerHTML += "q";
    }
    else if(x == 81) {
      document.getElementById("translationArea").innerHTML += "r";
    }
    else if(x == 82) {
      document.getElementById("translationArea").innerHTML += "s";
    }
    else if(x == 83) {
      document.getElementById("translationArea").innerHTML += "t";
    }
    else if(x == 84) {
      document.getElementById("translationArea").innerHTML += "u";
    }
    else if(x == 85) {
      document.getElementById("translationArea").innerHTML += "v";
    }
    else if(x == 86) {
      document.getElementById("translationArea").innerHTML += "w";
    }
    else if(x == 87) {
      document.getElementById("translationArea").innerHTML += "x";
    }
    else if(x == 88) {
      document.getElementById("translationArea").innerHTML += "y";
    }
    else if(x == 89) {
      document.getElementById("translationArea").innerHTML += "z";
    }
    else if(x == 90) {
      document.getElementById("translationArea").innerHTML += "a";
    }
    else if(x == 32) {
      document.getElementById("translationArea").innerHTML += "1";
    }
    else if(x == 49) {
      document.getElementById("translationArea").innerHTML += "?";
    }
    else if(x == 191) {
      document.getElementById("translationArea").innerHTML += ",";
    }
    else if(x == 188) {
      document.getElementById("translationArea").innerHTML += ".";
    }
    else if(x == 190) {
      document.getElementById("translationArea").innerHTML += "0";
    }
    else if(x == 48) {
      document.getElementById("translationArea").innerHTML += "2";
    }
    else if(x == 50) {
      document.getElementById("translationArea").innerHTML += "3";
    }
    else if(x == 51) {
      document.getElementById("translationArea").innerHTML += "4";
    }
    else if(x == 52) {
      document.getElementById("translationArea").innerHTML += "5";
    }
    else if(x == 53) {
      document.getElementById("translationArea").innerHTML += "6";
    }
    else if(x == 54) {
      document.getElementById("translationArea").innerHTML += "7";
    }
    else if(x == 55) {
      document.getElementById("translationArea").innerHTML += "8";
    }
    else if(x == 56) {
      document.getElementById("translationArea").innerHTML += "9";
    }
    else if(x == 57) {
      document.getElementById("translationArea").innerHTML += "=";
    }
    else if(x == 187) {
      document.getElementById("translationArea").innerHTML += " ";
    }


}
/*this part doesn't work*/
function decodeTheBrode() {
  var str = document.getElementById("translationArea").innerHTML;
  var a = str.replace("a", "<img src='images/heiroglyphics/a.gif'>");
  document.getElementById("translationArea").innerHTML += a;
  var b = str.replace("b", "<img src='images/heiroglyphics/b.gif'>");
  document.getElementById("translationArea").innerHTML += b;
  var c = str.replace("c", "<img src='images/heiroglyphics/c.gif'>");
  document.getElementById("translationArea").innerHTML += c;
  var d = str.replace("d", "<img src='images/heiroglyphics/d.gif'>");
  document.getElementById("translationArea").innerHTML += d;
  var e = str.replace("e", "<img src='images/heiroglyphics/e.gif'>");
  document.getElementById("translationArea").innerHTML += e;
  var f = str.replace("f", "<img src='images/heiroglyphics/f.gif'>");
  document.getElementById("translationArea").innerHTML += f;
  var g = str.replace("g", "<img src='images/heiroglyphics/g.gif'>");
  document.getElementById("translationArea").innerHTML += g;
  var h = str.replace("h", "<img src='images/heiroglyphics/h.gif'>");
  document.getElementById("translationArea").innerHTML += h;
  var i = str.replace("i", "<img src='images/heiroglyphics/i.gif'>");
  document.getElementById("translationArea").innerHTML += i;
  var j = str.replace("j", "<img src='images/heiroglyphics/j.gif'>");
  document.getElementById("translationArea").innerHTML += j;
  var k = str.replace("k", "<img src='images/heiroglyphics/k.gif'>");
  document.getElementById("translationArea").innerHTML += k;
  var l = str.replace("l", "<img src='images/heiroglyphics/l.gif'>");
  document.getElementById("translationArea").innerHTML += l;
  var m = str.replace("m", "<img src='images/heiroglyphics/m.gif'>");
  document.getElementById("translationArea").innerHTML += m;
  var n = str.replace("n", "<img src='images/heiroglyphics/n.gif'>");
  document.getElementById("translationArea").innerHTML += n;
  var o = str.replace("o", "<img src='images/heiroglyphics/o.gif'>");
  document.getElementById("translationArea").innerHTML += o;
  var p = str.replace("p", "<img src='images/heiroglyphics/p.gif'>");
  document.getElementById("translationArea").innerHTML += p;
  var q = str.replace("q", "<img src='images/heiroglyphics/q.gif'>");
  document.getElementById("translationArea").innerHTML += q;
  var r = str.replace("r", "<img src='images/heiroglyphics/r.gif'>");
  document.getElementById("translationArea").innerHTML += r;
  var s = str.replace("s", "<img src='images/heiroglyphics/s.gif'>");
  document.getElementById("translationArea").innerHTML += s;
  var t = str.replace("t", "<img src='images/heiroglyphics/t.gif'>");
  document.getElementById("translationArea").innerHTML += t;
  var u = str.replace("u", "<img src='images/heiroglyphics/u.gif'>");
  document.getElementById("translationArea").innerHTML += u;
  var v = str.replace("v", "<img src='images/heiroglyphics/v.gif'>");
  document.getElementById("translationArea").innerHTML += v;
  var w = str.replace("w", "<img src='images/heiroglyphics/w.gif'>");
  document.getElementById("translationArea").innerHTML += w;
  var x = str.replace("x", "<img src='images/heiroglyphics/x.gif'>");
  document.getElementById("translationArea").innerHTML += x;
  var y = str.replace("y", "<img src='images/heiroglyphics/y.gif'>");
  document.getElementById("translationArea").innerHTML += y;
  var z = str.replace("z", "<img src='images/heiroglyphics/z.gif'>")
  document.getElementById("translationArea").innerHTML += z;
}
