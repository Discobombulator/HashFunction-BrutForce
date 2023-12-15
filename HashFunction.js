
let str1 = `Look at my finale, how well I flew, how well I fell, look at how I shone: 
            just as I wanted, just as I dreamed of opening my soul so that you spit 
            into it, but I dont care, because very soon I will leave`;

const readline = require("readline");
const Read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

Read.question("Enter the line to check", function (str2) {
Read.close();

let desired_hash_sum = 0;
let current_hash_sum = 0;

for (let i = 0; i < str2.length; ++i) {
    desired_hash_sum += str2.charCodeAt(i);
    current_hash_sum += str1.charCodeAt(i);
}


for (let i = 0; i + str2.length < str1.length; ++i) {
    if (desired_hash_sum == current_hash_sum && str1.substring(i, i + str2.length)) {
        console.log("Index: " + i);
        return 0;
    }
    current_hash_sum += str1.charCodeAt(i + str2.length) - str1.charCodeAt(i);
}

console.log("Not a single coincidence");
});


