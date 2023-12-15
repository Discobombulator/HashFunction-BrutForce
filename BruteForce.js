let str1 = `Look at my finale, how well I flew, how well I fell, look at how I shone: 
just as I wanted, just as I dreamed of opening my soul so that you spit 
into it, but I dont care, because very soon I will leave`;

const readline = require("readline");

const Read = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

Read.question("Enter the line to check ", function (substr) {
    Read.close();

for (let i = 0; i + substr.length <= str1.length; ++i) {
    if (str1.substring(i, i + substr.length) == substr) {
        console.log("Index: " + i);
        return 0;
    }
}
console.log("Not a single coincidence");

});
