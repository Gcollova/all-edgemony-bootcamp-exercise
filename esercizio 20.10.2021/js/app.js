let str = prompt("Inserisci 5 nomi separati da una virgola", `Stefania,Sandro,Maria,Giacomo,Giorgia`).split(',');

str.unshift (`${str.splice(3,1,'Marta')}`);
str.push('Franco','Valentina',);

let arrAge = [32,21,47,12,78];
arrAge.unshift(arrAge.splice(3,1,6)[0]);
arrAge.push(54,32);

let arrPush = [str, arrAge];

console.log(arrPush);
    