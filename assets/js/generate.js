var pwd;

function alpha (type){
    /* function to generate letter*/
    /* l = lower, u = upper, e = either */
    var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var either = [lower,upper];
    var rand, rtrn;
    if (type = "l"){
        rand = Math.floor(Math.random() * 26 );
        rtrn = lower[rand];
    } else if (type = "u"){
        rand = Math.floor(Math.random() * 26 );
        rtrn = upper[rand];
    } else {
        rand = Math.floor(Math.random() * 52 );
        rtrn = either[rand];
    }
    pwd = pwd + rtrn;
}

function numeric (){
    /* function to generate number */
    /* l = lower, u = upper, e = either */
    var numbr = ["1","2","3","4","5","6","7","8","9","0"];
    var rand, rtrn;

    rand = Math.floor(Math.random() * 10 );
    rtrn = numbr[rand];

    pwd = pwd + rtrn;
}

function symbol (){
    /* function to generate symbol */
    /* l = lower, u = upper, e = either */
    var symb = ["-","_","!","@","#","$","%","^","&","*","+","~"];
    var leng = symb.length;
    var rand, rtrn;

    rand = Math.floor(Math.random() * leng );
    rtrn = symb[rand];

    pwd = pwd + rtrn;
}


function generate (_alpha, _numeric, _upper, _lower, _either, _symbol, _length){
    /* function to establish requirements*/

    /* 
    _alpha, _numeric, _symbol are boolean
    _length is integer
    _upper, lower, _either selected value if _alpha true
    */
    var req, reqA, req1, reqX;
    /*are letters needed?*/
    if(_alpha){
        if(_lower){
            reqA = "lower";
        } else if(_upper){
            reqA = "upper";
        } else{
            reqA = "either";
        }
    }
    /* are numbers needed?*/
    if(_numeric)
    req1 = true

    /* are symbols required?*/
    if(_symbol)
    reqX = true;

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
        throw("bye, bye");
    }
    

    compilePW (req, parseInt(_length));

}

function compilePW ($type, $length){
    /*function to run the loop and compile the password*/
    var loop = 1;
    while(loop <= $length){

        if($type == 1){
            // number only,
            pwd = pwd + numeric();

        } else if($type == 2){
            // symbol only
            pwd = pwd + symbol();
            
        } else if($type == 3){
            // number & symbol
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + number();
            } else{
                pwd = pwd + symbol();
            }

        } else if($type == 4){
            // number and lower case alpha
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + number();
            } else{
                pwd = pwd + alpha("l");
            }

        } else if($type == 5){
            // number and upper case alpha
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + number();
            } else{
                pwd = pwd + alpha("u");
            }
            
        } else if($type == 6){
            // number and either case alpha
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + number();
            } else{
                pwd = pwd + alpha("e");
            }
            
        } else if($type == 7){
            // symbol and lower case alpha
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + symbol();
            } else{
                pwd = pwd + alpha("l");
            }
            
        } else if($type == 8){
            // symbol and upper case alpha
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + symbol();
            } else{
                pwd = pwd + alpha("u");
            }
            
        } else if($type == 9){
            // symbol and either case alpha
            if(Math.floor(Math.random()*10) % 2 == 0){
                pwd = pwd + symbol();
            } else{
                pwd = pwd + alpha("e");
            }
            
        } else if($type == 10){
            // number, symbol, and lower case alpha
            var x = [1,"X","l"];
            var y = Math.floor(Math.random()* x.length);
            var z = x[y];
            if( z == 1){
                pwd = pwd + numeric();
            } else if(z == "X"){
                pwd = pwd + symbol();
            } else{
                pwd = pwd + alpha("l");
            }
            
        } else if($type == 11){
            // number, symbol, and upper case alpha
            var x = [1,"X","u"];
            var y = Math.floor(Math.random()* x.length);
            var z = x[y];
            if( z == 1){
                pwd = pwd + numeric();
            } else if(z == "X"){
                pwd = pwd + symbol();
            } else{
                pwd = pwd + alpha("u");
            }
            
        } else if($type == 12){
            // number, symbol, and either case alpha
            var x = [1,"X","e"];
            var y = Math.floor(Math.random()* x.length);
            var z = x[y];
            if( z == 1){
                pwd = pwd + numeric();
            } else if(z == "X"){
                pwd = pwd + symbol();
            } else{
                pwd = pwd + alpha("e");
            }
            
        } else if($type == 13){
            // lower case alpha only
            pwd = pwd + alpha("l");
        } else if($type == 14){
            // upper case alpha only
            pwd = pwd + alpha("u");
        } else if($type == 15){
            // either case alpha only
            pwd = pwd + alpha("e");
        }



        /* exit*/
        loop = loop + 1;
    }

}



///////////////////////////////////////////////////////////////

var x = [1,"l","u","e"];
var y = Math.floor(Math.random()* x.length);
var z = x[y];
if( z == 1){
    pwd = pwd + numeric();
} else if(z == "l"){
    pwd = pwd + alpha("l");
} else if (z == "u"){
    pwd = pwd + alpha("u");
} else{
    pwd = pwd + alpha("e");
}