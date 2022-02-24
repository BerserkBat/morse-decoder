const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    if (expr.length < 10){
        return 0;
    }
    let toTen = [];
    let length = expr.length;
    for (let i = 0; i<expr.length; i+=10){
        toTen.push(expr.substring(i, i+10));
        //console.log(i)
    }
    let result =[];
    for (let i=0; i<toTen.length; i++){
        if (toTen[i]==="**********"){
            toTen[i]=" ";
            result.push(toTen[i]);
            //console.log("space", toTen[i]);
        } else {
            //console.log("Not space!")
            let subRes = [];
            for (let a = 0; a<10; a+=2){
                let subToTen = toTen[i].substring(a, a+2);
                    if (subToTen === "10"){
                        subRes.push(".");
                        console.log(".")
                    } else if (subToTen === "11"){
                        subRes.push("-");
                        console.log("-")
                    }
                }

            result.push(subRes.join(""));
        }
    }

    for (let i=0; i<length; i++){
        if (result[i]!==" "){
            result[i]=MORSE_TABLE[result[i]];
        }
    }

   return result.join("");
}

module.exports = {
    decode
}
