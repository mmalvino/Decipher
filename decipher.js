const decipher = (message, key) => {
    let lkey = [];
    let sKey = key.toString();
    let rKey = sKey.repeat(message.length);
    let sum = [];

    for (var i = 0, len = message.length; i < len; i++){
        lkey.push(+rKey.charAt(i));
    }
    
    for (var i = 0; i < message.length; i++){
        sum.push(message[i] - lkey[i]);
    }
    
    let word = [];
    for (var i = 0; i < sum.length; i++){
        if (sum[i] == 1){
            word.push("a");
        } else if (sum[i] == 2){
            word.push("b");
        } else if (sum[i] == 3){
            word.push("c");
        } else if (sum[i] == 4){
            word.push("d");
        } else if (sum[i] == 5){
            word.push("e");
        } else if (sum[i] == 6){
            word.push("f");
        } else if (sum[i] == 7){
            word.push("g");
        } else if (sum[i] == 8){
            word.push("h");
        } else if (sum[i] == 9){
            word.push("i");
        } else if (sum[i] == 10){
            word.push("j");
        } else if (sum[i] == 11){
            word.push("k");
        } else if (sum[i] == 12){
            word.push("l");
        } else if (sum[i] == 13){
            word.push("m");
        } else if (sum[i] == 14){
            word.push("n");
        } else if (sum[i] == 15){
            word.push("o");
        } else if (sum[i] == 16){
            word.push("p");
        } else if (sum[i] == 17){
            word.push("q");
        } else if (sum[i] == 18){
            word.push("r");
        } else if (sum[i] == 19){
            word.push("s");
        } else if (sum[i] == 20){
            word.push("t");
        } else if (sum[i] == 21){
            word.push("u");
        } else if (sum[i] == 22){
            word.push("v");
        } else if (sum[i] == 23){
            word.push("w");
        } else if (sum[i] == 24){
            word.push("x");
        } else if (sum[i] == 25){
            word.push("y");
        } else if (sum[i] == 26){
            word.push("z");
        } else{
            console.log("error");
        }
    }
    let deciphered = word.join("");
    console.log(deciphered);
}

//examples
decipher([20,12,18,30,21], 1939);
decipher([14,10,22,29,6,27,19,18,6,12,8], 1939);
decipher([14,30,11,1,20,17,18,18], 1990);
decipher([6,4,1,3,9,20], 100);