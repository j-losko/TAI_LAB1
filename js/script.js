let multiTable = "";
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        multiTable += i * j + "\t";
    }
    multiTable += "\n";
}
console.log(multiTable);