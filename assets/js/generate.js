const res = document.getElementById("result");
function character(x){
    let arr;
    switch (x) {
        case "alpha":
            arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            break;
        case "numeric":
            arr = ["1","2","3","4","5","6","7","8","9","0"];
            break
        case "symbol":
            arr = ["-","_","!","@","#","$","%","^","&","*","+","~","?","(",")",",",".","/",":",";",">","=","[","]","{","}","|"];
        default:
            break;
    }
        rand = Math.floor(Math.random() * arr.length ),
        rtrn = arr[rand];
    return rtrn;
}
function generate(){
    const reqLength = parseInt(document.getElementById("length").value);
    let i = 1, pwd = "";
    while(i <= reqLength){
        if(i%3==0){
            pwd = pwd+character("symbol");
        }else if(i%2==0){
            pwd = pwd+character("alpha");
        }else{
            pwd = pwd+character("numeric");
        }
        i++;
    }
    const rand = randomise(pwd);
    res.innerHTML=rand;
    res.classList.add("clickBorder");
}
function randomise(_old){
    const len = _old.length;
    let i = 0, _new = "";
    while(i < len){
        const l = len - i,
            r = Math.floor(Math.random() * l),
            char = _old.charAt(r);
        _new = _new.concat(char);
        _old = _old.replace(char,"");
        swap(char);
        i++;
    }
    return _new;
}
function toClipboard(){
    if(res.innerHTML){
        navigator.clipboard.writeText(res.innerHTML);
        const tick = document.getElementById("tickBlock");
        tick.classList.remove('appear');
        void tick.offsetWidth; 
        tick.classList.add('appear');
    }
}
function swap(val,chng){
    const _old = val.toLowerCase();
    const opts = {
        "a": ["@"],
        "b": ["8"],
        "c": ["("],
        "e": ["3","£"],
        "g": ["9"],
        "h": ["#"],
        "i": ["1","!"],
        "o": ["0"],
        "q": ["9"],
        "r": ["^"],
        "s": ["5","$"],
        "t": ["7","+"],
        "u": ["v"],
        "v": ["u"],
        "y": ["%"],
        "z": ["2"]
    }
    
    let _new;
    if(_old in opts){
        
        if(chng){
            if(opts[_old].length >1 ){
                _new = opts[_old][Math.floor(Math.random() * (2 - 0) + 0)];
            }else{
                _new = opts[_old][0];
            }
        }else{
            _new = val;
        }
    }else{
        _new = val;
    }
    return _new;
}
function phrase(){
    
    let i=0, _new="", _old = window.prompt("What phrase would you like to use?");
    const changeRand = Math.floor(Math.random() * (3 - 1) + 1);
    let change = changeRand%2==0?true:false;
    const oldLen = _old.length;
    _old = _old.replace(/\s/g, "-");
        
    while(i<oldLen){
        char = _old.charAt(i);
        
        if(char.match(/[a-z]/i)){
            _new = _new + swap(char,change);
        }else{
            _new = _new + char;
        }
        change = !change;
        i++
    }
    res.innerHTML = _new;
    res.classList.add("clickBorder");
}