const cart = [];

function add(){
    let acquisto = prompt("Aggiungi alla Lista Della spesa UN OGGETTO PER VOLTA!!");        
    if (acquisto===null || acquisto==="" || parseInt(acquisto)) {
        alert("inserisci un oggetto valido o che non hai già inserito");
    }   else{
            let check = true;
            for(let controllo of cart) {
                if(controllo===acquisto.toUpperCase()) {
                let index = cart.indexOf(controllo)
                alert("hai Gia inserito " + cart[index].toLowerCase())
                check=false;                       
    
                } 
            }
            if(check===true){
                cart.push(acquisto.toUpperCase());
                console.log(cart);

            }
            






            
            

        }                   
}

        
            
                
  



            

