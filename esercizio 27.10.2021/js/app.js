



    const allBtnDiv = document.querySelector('#buttonContainer');
    const allBtn = allBtnDiv.querySelectorAll('button');

    for (let singBtn of allBtn){
        
        singBtn.addEventListener('click', () => {           
            
            if (singBtn.id === "firstBtn"){
                console.log("cliccato")                
                const divAbout = document.querySelector('#about');                
                divAbout.classList.toggle("hide");

            } else if (singBtn.id === "secondBtn"){
                console.log("cliccato")                
                const divAbout = document.querySelector('#curriculum');                
                divAbout.classList.toggle("hide");

            }
             else if(singBtn.id === "thirdBtn"){
                console.log("cliccato")                
                const divAbout = document.querySelector('#passion');                
                divAbout.classList.toggle("hide");

             }       
        })       
    
    }

    const imgBtn = document.querySelector('#hiddenImg');
    imgBtn.addEventListener('click',() => {
        const imgToggle = document.querySelector('#hiddenImage')
        imgToggle.classList.toggle("hide")
    });

const colorChange = (event) => {
    const bodyToggle1 = document.querySelector(".darkmodeDiv")
    bodyToggle1.classList.toggle("darkmode");
    console.log("ciao")
}

    const darkModeButton = document.querySelector("#darkModeBtn");
    let counterReg = 0
    const regulation = () =>{
        counterReg++;
        if(counterReg=10){
            darkModeButton.removeEventListener("click", colorChange)
            
        }
    }
    
// while (i < 10) {
//     darkModeButton.addEventListener("click", colorChange);
//     i = i + 1;
//     console.log(i)
//     if(i === 9){
//         darkModeButton.removeEventListener("click", colorChange)
//     }
//   }

// // const numExercise = document.querySelector('#myExercise');
// // const numParagraph = numExercise.querySelectorAll('p');
// // console.log(numParagraph.length);


// const tuttiDiv = document.querySelector('#allDiv');
//     const divItem = tuttiDiv.querySelectorAll('div');

//     for (let singleDiv of divItem){
//         console.log(singleDiv);
//     }


    

    







