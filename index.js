const fs = require("fs");


const INFILE = "./tourist_example_input.txt";

const input = fs.readFileSync(INFILE, "UTF-8");

//console.log(input);

var lines = input
    .split('\n')
    .filter(Boolean);

const numberOfCampusses = lines[0];
var N, K, V, attractions = [];
lines.slice(1).forEach(line => {
    if (!N) {
        N = parseInt(line.split(" ")[0]),
        K = parseInt(line.split(" ")[1]),
        V = parseInt(line.split(" ")[2]);
        console.log(N,K,V);
    } else {
        N = N-1;
        attractions.push({name: line, visits:0, popularity:N});
        if (N === 0) {
            console.log(attractions);
            attractions = [];
            delete N
        };
    }
});