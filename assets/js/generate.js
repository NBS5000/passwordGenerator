function alpha ($type){
    /* function to generate letter*/
    /* l = lower, u = upper, e = either */
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var either = lower.concat(upper);
    var rand, rtrn;
    if ($type == "l"){
        rand = Math.floor(Math.random() * 26 );
        rtrn = lower[rand];
    } else if ($type == "u"){
        rand = Math.floor(Math.random() * 26 );
        rtrn = upper[rand];
    } else {
        rand = Math.floor(Math.random() * 52 );
        rtrn = either[rand];
    }
    pwd += rtrn;
}

function numeric (){
    /* function to generate number */
    var numbr = ["1","2","3","4","5","6","7","8","9","0"];
    var rand, rtrn;

    rand = Math.floor(Math.random() * 10 );
    rtrn = numbr[rand];

    pwd += rtrn;
}

function symbol (){
    /* function to generate symbol */
    var symb = ["-","_","!","@","#","$","%","^","&","*","+","~","?","\"","\'","(",")",",",".","/",":",";","<",">","=","[","]","\\","`","{","}","|"," "];
    
    var leng = symb.length;
    var rand, rtrn;

    rand = Math.floor(Math.random() * leng );
    rtrn = symb[rand];

    pwd += rtrn;
}

function popUp (){
    /* function to get requirements using prompts instead, to comply with homework requirements*/
    /* x var is to ensure a requirement is set, exits loop when valid number is entered */
    var x;
    while(!x){
        var _len = prompt("How long do you want it to be?");
        if(parseInt(_len) && _len >= 8 && _len <= 128){
            x = 1;
        }else{
            alert("Please enter a valid number between 8 and 128");
        }
    }
    /* set parameter and clear x*/
    document.getElementById("length").value = parseInt(_len);
    var x = "";
    /* set x when char type has been selected, can be all or only one, but at least one has to be selected*/
    /* the else statement clears selection in case it was set on previous run */
    while(!x){
        var _num = confirm("Do you want to use Numbers?");
        if(_num){
            x = 1;
            document.getElementById("number").checked = true;
        }else{
            document.getElementById("number").checked = false;
        }
        var _sym = confirm("Do you want to use Symbols?");
        if(_sym){
            x = 1;
            document.getElementById("symbol").checked = true;
        }else{
            document.getElementById("symbol").checked = false; 
        }
        /* if letters are selected, set requirement and then establish what type of letters needed*/
        var _let = confirm("How about Letters?");
        if(_let){
            document.getElementById("alpha").checked = true;
            /* y used to established letter type */
            var y = "";
            while(!y){
                var abc = prompt("Would you like your letters to be (u)pper case, (l)ower case, or (e)ither?");
                if(abc.toLowerCase() == "u" || abc.toLowerCase() == "l" || abc.toLowerCase() == "e"){
                    y = 1;
                }else{
                    alert("Please enter 'u' for Upper case, 'l' for Lower case, or 'e' for Either")
                }
            }
            abc = abc.toLowerCase();
            if(abc == "l"){
                document.getElementById("lower").checked = true;
            }else if (abc == "u"){
                document.getElementById("upper").checked = true;
            }else{
                document.getElementById("either").checked = true;
            }
            x = 1;
        }else{
            document.getElementById("alpha").checked = false;
        }
        if(!x){
            alert("Please select at least one character type!");
        }
    }
    /* once fields are completed, run generate script*/
    generate();
}

function generate (){
    /* function to establish requirements*/
    var last = document.getElementById("result");
    var _numeric = document.getElementById("number");
    var _symbol = document.getElementById("symbol");
    var _alpha = document.getElementById("alpha");
    var _length = parseInt(document.getElementById("length").value);

    /* 
    _alpha, _numeric, _symbol are boolean
    _length is integer
    _upper, lower, _either selected value if _alpha true
    */


    var req, reqA, req1, reqX;
    /*are letters needed?*/
    if(_alpha.checked){
        if(document.getElementById("lower").checked){
            reqA = "lower";
        } else if(document.getElementById("upper").checked){
            reqA = "upper";
        } else{
            reqA = "either";
        }
    }
    /* are numbers needed?*/
    if(_numeric.checked ){
        req1 = true
    }

    /* are symbols required?*/
    if(_symbol.checked ){
        reqX = true;
    }

    if(!reqA && !req1 && !reqX){
        alert("Please ensure you have selected at least one character type.");
        document.getElementById("selectChar").style.color ="red";
        return;
    }else{
        document.getElementById("selectChar").style.color ="black";
    }

    /*number combination:
    1 is number only,
    2 is symbol only,
    3 is number & symbol only,
    4 is number and lower case alpha,
    5 is number and upper case either,
    6 is number and either case alpha,
    7 is symbol and lower case alpha,
    8 is symbol and upper case alpha,
    9 is symbol and either case alpha,
    10 is number, symbol, and lower case alpha,
    11 is number, symbol, and upper case alpha,
    12 is number, symbol, and either case alpha,
    13 is lower only,
    14 is upper only,
    15 is either only
    */

    if (req1 && !reqX && !reqA ){
        req = 1;
    } else if(!req1 && reqX && !reqA ){
        req = 2;
    } else if(req1 && reqX && !reqA ){
        req = 3;
    } else if(req1 && !reqX && reqA == "lower" ){
        req = 4;
    } else if(req1 && !reqX && reqA == "upper" ){
        req = 5;
    } else if(req1 && !reqX && reqA == "either" ){
        req = 6;
    } else if(!req1 && reqX && reqA == "lower" ){
        req = 7;
    } else if(!req1 && reqX && reqA == "upper" ){
        req = 8;
    } else if(!req1 && reqX && reqA == "either" ){
        req = 9;
    } else if(req1 && reqX && reqA == "lower" ){
        req = 10;
    } else if(req1 && reqX && reqA == "upper" ){
        req = 11;
    } else if(req1 && reqX && reqA == "either" ){
        req = 12;
    } else if(!req1 && !reqX && reqA == "lower" ){
        req = 13;
    } else if(!req1 && !reqX && reqA == "upper" ){
        req = 14;
    } else if(!req1 && !reqX && reqA == "either" ){
        req = 15;
    } else {
        alert("There was an error");
        throw("bye, bye" + " " + req + " " + reqX + " " + req1 + " " + reqA );
    }
    

    compilePW (req, parseInt(_length));
}

function compilePW ($type, $length){
    /*function to run the loop and compile the password*/
    var loop = 1;
    /* track history */
    var last = document.getElementById("result").innerHTML;
    var hist = document.getElementById("hist").innerHTML;
    /* clear previous password */
    pwd = "";
    while(loop <= $length){

        if($type == 1){
            // number only,
            numeric();

        } else if($type == 2){
            // symbol only
            symbol();
            
        } else if($type == 3){
            // number & symbol
            if(loop == 1){
                numeric();
            }else if(loop==2){
                symbol();
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                numeric();
            }else{
                symbol();
            }

        } else if($type == 4){
            // number and lower case alpha
            if(loop == 1){
                numeric();
            }else if(loop==2){
                alpha("l");
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                numeric();
            } else{
                alpha("l");
            }

        } else if($type == 5){
            // number and upper case alpha
            if(loop == 1){
                numeric();
            }else if(loop==2){
                alpha("u");
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                numeric();
            } else{
                alpha("u");
            }
            
        } else if($type == 6){
            // number and either case alpha
            if(loop == 1){
                numeric();
            }else if(loop==2){
                alpha("e");
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                numeric();
            } else{
                alpha("e");
            }
            
        } else if($type == 7){
            // symbol and lower case alpha
            if(loop == 1){
                symbol();
            }else if(loop==2){
                alpha("l");
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                symbol();
            } else{
                alpha("l");
            }
            
        } else if($type == 8){
            // symbol and upper case alpha
            if(loop == 1){
                symbol();
            }else if(loop==2){
                alpha("u");
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                symbol();
            } else{
                alpha("u");
            }
            
        } else if($type == 9){
            // symbol and either case alpha
            if(loop == 1){
                symbol();
            }else if(loop==2){
                alpha("e");
            }else if(Math.floor(Math.random()*10) % 2 == 0){
                symbol();
            } else{
                alpha("e");
            }
            
        } else if($type == 10){
            // number, symbol, and lower case alpha
            var x = [1,"X","l"];
            var y = Math.floor(Math.random()* x.length);
            var z = x[y];
            if(loop == 1){
                numeric();
            }else if(loop==2){
                symbol();
            }else if(loop == 3){
                alpha("l");
            }else if( z == 1){
                numeric();
            } else if(z == "X"){
                symbol();
            } else{
                alpha("l");
            }
            
        } else if($type == 11){
            // number, symbol, and upper case alpha
            var x = [1,"X","u"];
            var y = Math.floor(Math.random()* x.length);
            var z = x[y];
            if(loop == 1){
                numeric();
            }else if(loop==2){
                symbol();
            }else if(loop == 3){
                alpha("u");
            }else if( z == 1){
                numeric();
            } else if(z == "X"){
                symbol();
            } else{
                alpha("u");
            }
            
        } else if($type == 12){
            // number, symbol, and either case alpha
            var x = [1,"X","e"];
            var y = Math.floor(Math.random()* x.length);
            var z = x[y];
            if(loop == 1){
                numeric();
            }else if(loop==2){
                symbol();
            }else if(loop == 3){
                alpha("e");
            }else if( z == 1){
                numeric();
            } else if(z == "X"){
                symbol();
            } else{
                alpha("e");
            }
            
        } else if($type == 13){
            // lower case alpha only
            alpha("l");
        } else if($type == 14){
            // upper case alpha only
            alpha("u");
        } else if($type == 15){
            // either case alpha only
            alpha("e");
        }

        /* exit*/
        loop = loop + 1;
    }

    document.getElementById("result").innerHTML=pwd;
    document.getElementById("last").innerHTML = last;

    if(!hist){
        document.getElementById("hist").innerHTML = last.concat(hist);
    }else{
        document.getElementById("hist").innerHTML = last.concat("<hr style='width:50%'/>",hist);
    }

}
