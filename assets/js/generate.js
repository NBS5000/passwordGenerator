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

function numeric (){
    /* function to generate symbol */
    /* l = lower, u = upper, e = either */
    var symb = ["-","_","!","@","#","$","%","^","&","*","+","~"];
    var leng = symb.length;
    var rand, rtrn;

    rand = Math.floor(Math.random() * leng );
    rtrn = symb[rand];

    pwd = pwd + rtrn;
}
