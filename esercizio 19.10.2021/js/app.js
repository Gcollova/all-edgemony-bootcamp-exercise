let animal = prompt(`Animale preferito:\n 1. Dog\n 2. Cat\n 3. Goldfish\n 4. Monkey\n 5. Panda `);
animal = parseInt(animal);
/* if (animal === 1)  {
    alert("choose dog");
    
} else if (animal === 2) {
    alert("choose cat");

}
 else if (animal === 3) {
    alert("choose goldfish");

}
 else if (animal === 4) {
    alert("choose monkey");

}
 else if (animal === 5) {
    alert("choose panda");

  } else {
    alert("nothing chosen");
}
*/


/*
switch (animal) {
    case 1:
        alert("choose dog");
        break;
    case 2:
        alert("choose cat");
        break;
    case 3:
        alert("choose goldfish");
        break;
    case 4:
        alert("choose monkey");
        break;
    case 5:
        alert("choose panda");
        break;
    
    default:
        alert("nothing chosen")
        break;
}
*/


let risposta = animal === 1 ? "chose dog" : (animal === 2 ? "chose cat" : (animal === 3 ? "chose goldfish" : (animal === 4 ? "choose monkey" : (animal === 5 ? "chose panda" : "nothing chosen" ))));
    alert(risposta)