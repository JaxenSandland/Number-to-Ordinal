function numberToOrdinal(n) {

    var output = "";

    var j = n % 10;
    var k = n % 100;
   

     if(((n*10) % 10) != 0) {
        alert("Please only enter whole numbers")
        return;
     }
     if(n >= 100) {
        alert("Number too large >:(")
        return;
     }
     if(n <= -1) {
        alert("Number too small >:(")
        return;
     }

     if (j == 0 && n == 0) {
        output = "0, pronounced zero";
        return output;
     }if(n <= 10){
        output = parseInt(n);
        if (n == 1) {
            output += "st, pronounced first";
            return output;
        }
        if (n == 2) {
            output += "nd, pronounced second";
            return output;
        }
        if (n == 3) {
            output += "rd, pronounced third";
            return output;
        }
        if (n == 4) {
            output += "th, pronounced fourth";
            return output;
        }
        if (n == 5) {
            output += "th, pronounced fifth";
            return output;
        }
        if (n == 6) {
            output += "th, pronounced sixth";
            return output;
        }
        if (n == 7) {
            output += "th, pronounced seventh";
            return output;
        }
        if (n == 8) {
            output += "th, pronounced eighth";
            return output;
        }
        if (n == 9) {
            output += "th, pronounced nineth";
            return output;
        }
        if (n == 10) {
            output += "th, pronounced tenth";
            return output;
        }
     }


     if (j == 1 && k != 11) {
        output = parseInt(n) + "st, pronounced " + parseTenth(n) + "y-first";
        return output;
     }
     if (j == 2 && k != 12) {
        output = parseInt(n) + "nd, pronounced " + parseTenth(n) + "y-second";
        return output;
     }
     if (j == 3 && k != 13) {
        output = parseInt(n) + "rd, pronounced " + parseTenth(n) + "y-third";
        return output;
     }

    output = parseInt(n) + "th";

     if (j == 4 && k != 13) {
        output += ", pronounced " + parseTenth(n) + "y-forth";
        return output;
     }
     if (j == 5 && k != 13) {
        output += ", pronounced " + parseTenth(n) + "y-fifth";
        return output;
     }
     if (j == 6 && k != 13) {
        output += ", pronounced " + parseTenth(n) + "y-sixth";
        return output;
     }
     if (j == 7 && k != 13) {
        output += ", pronounced " + parseTenth(n) + "y-seventh";
        return output;
     }
     if (j == 8 && k != 13) {
        output += ", pronounced " + parseTenth(n) + "y-eighth";
        return output;
     }
     if (j == 9 && k != 13) {
        output += ", pronounced " + parseTenth(n) + "y-ninth";
        return output;
     }

    if(n > 10 && n < 20) {
        output = weirdNumber(n);
        return output;
    }

    if(j == 0) {
        output += ", pronounced " + parseTenth(n) + "ieth";
        return output;
    }
 }

 function weirdNumber(n) {

    var output

    if (n == 11) {
        output += ", pronounced eleventh";
        return output;
    }
    if (n == 12) {
        output += ", pronounced twelfth";
        return output;
    }
    if (n == 13) {
        output += ", pronounced thirteenth";
        return output;
    }
    if (n == 14) {
        output += ", pronounced fourteenth";
        return output;
    }
    if (n == 15) {
        output += ", pronounced fifteenth";
        return output;
    }
    if (n == 16) {
        output += ", pronounced sixteenth";
        return output;
    }
    if (n == 17) {
        output += ", pronounced seventeenth";
        return output;
    }
    if (n == 18) {
        output += ", pronounced eigteenth";
        return output;
    }
    if (n == 19) {
        output += ", pronounced ninteenth";
        return output;
    }
 }

 function parseTenth(n) {
    var j = (n / 10) % 10
    var f = Math.floor(j);

    if (f == 2) {
        return "twent";
    }
    if (f == 3) {
        return "thirt";
    }
    if (f == 4) {
        return "fort";
    }
    if (f == 5) {
        return "fift";
    }
    if (f == 6) {
        return "sixt";
    }
    if (f == 7) {
        return "sevent";
    }
    if (f == 8) {
        return "eight";
    }
    if (f == 9) {
        return "nint";
    }
    
 }
