const res = document.getElementById("result");
/*function character(x){
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
}*/

function character(type) {
    const charSets = {
        alpha: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric: "0123456789",
        symbol: "-_!@#$%^&*+~?(),./:;>=[]{}|"
    };

    const arr = charSets[type] || "";
    return arr.charAt(Math.floor(Math.random() * arr.length));
}

/*function generate(){
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
}*/
function generate() {
    const reqLength = parseInt(document.getElementById("length").value);
    let i = 1, pwd = "", hasUpper = false, lowercasePositions = [];

    while (i <= reqLength) {
        let char;
        debugger
        if (i % 3 === 0) {
            char = character("symbol");
        } else if (i % 2 === 0) {
            char = character("alpha");
            if (char === char.toUpperCase()) {
                hasUpper = true;
            } else {
                lowercasePositions.push(pwd.length); // Track lowercase positions
            }
        } else {
            char = character("numeric");
        }
        pwd += char;
        i++;
    }

    // Ensure at least one uppercase letter
    /*if (!hasUpper && lowercasePositions.length > 0) {
        const randomIndex = lowercasePositions[Math.floor(Math.random() * lowercasePositions.length)];
        pwd = pwd.substring(0, randomIndex) + pwd[randomIndex].toUpperCase() + pwd.substring(randomIndex + 1);
    }*/
        if (!hasUpper && lowercasePositions.length > 0) {
            const randomIndex = lowercasePositions[Math.floor(Math.random() * lowercasePositions.length)];
            pwd = pwd.split("");  // Convert to array
            pwd[randomIndex] = pwd[randomIndex].toUpperCase();
            pwd = pwd.join("");  // Convert back to string
        }

    const rand = randomise(pwd);
    res.innerHTML = rand;
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
                //_new = opts[_old][Math.floor(Math.random() * (2 - 0) + 0)];
                _new = opts[_old][Math.floor(Math.random() * opts[_old].length)];
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
/*function phrase(){
    
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
}*/
/*
function phrase() {
    let _old = window.prompt("What phrase would you like to use?").trim();
    if (!_old) return; // Exit if input is empty

    _old = _old.replace(/\s+/g, "-"); // Replace spaces with '-'
    let _new = "", change = Math.random() < 0.5; // 50% chance to swap

    for (let i = 0; i < _old.length; i++) {
        let char = _old[i];
        _new += char.match(/[a-z]/i) ? swap(char, change) : char;
        change = !change;
    }

    res.innerHTML = _new;
    res.classList.add("clickBorder");
}*/

function phrase() {
    let _old = window.prompt("What phrase would you like to use?")?.trim();
    if (!_old) return; // Exit if input is empty

    _old = _old.replace(/\s+/g, "-"); // Replace spaces with '-'
    let _new = "", change = Math.random() < 0.5;

    let hasUpper = false, hasLower = false;
    let lowerIndexes = [], upperIndexes = [];

    // Transform the input phrase while tracking character types
    for (let i = 0; i < _old.length; i++) {
        let char = _old[i];
        let newChar = char;

        if (char.match(/[a-z]/i)) {
            newChar = swap(char, change);

            if (newChar.match(/[A-Z]/)) {
                hasUpper = true;
                upperIndexes.push(i);
            } else if (newChar.match(/[a-z]/)) {
                hasLower = true;
                lowerIndexes.push(i);
            }
        }

        _new += newChar;
        change = !change;
    }

    let newArray = _new.split(""); // Convert to array for modification

    // Ensure at least one uppercase letter
    if (!hasUpper && lowerIndexes.length > 0) {
        let randIndex = lowerIndexes[Math.floor(Math.random() * lowerIndexes.length)];
        newArray[randIndex] = newArray[randIndex].toUpperCase();
    }

    // Ensure at least one lowercase letter
    if (!hasLower && upperIndexes.length > 0) {
        let randIndex = upperIndexes[Math.floor(Math.random() * upperIndexes.length)];
        newArray[randIndex] = newArray[randIndex].toLowerCase();
    }

    _new = newArray.join(""); // Convert back to string

    res.innerHTML = _new;
    res.classList.add("clickBorder");
}
