import { render } from "./render.js";
import { check,sumprice,counterTot,deleteFromCart } from "./cart.js";
const list = (allProducts) => {
  function womenProduct() {
    wrapper.innerHTML = `<h2 class="title-products">Prodotti Donna</h2> <a href="#allproducts">Torna alla Home</a> <div id="all-product"></div>`;
    const mappedProducts = allProducts.filter((product) => {
      return product.category.includes("women");
    });
    mappedProducts.map((product) => {
      render(product);
    });
  }
  function electronicsProduct() {
    wrapper.innerHTML = `<h2 class="title-products">Elettronica</h2><a href="#allproducts">Torna alla Home</a> <div id="all-product"></div>`;
    const electronics = allProducts.filter((product) => {
      return product.category.includes("electronics");
    });
    electronics.map((product) => {
      render(product);
    });
  }
  function jeweleryProduct() {
    wrapper.innerHTML = `<h2 class="title-products">Gioielli</h2><a href="#allproducts">Torna alla Home</a> <div id="all-product"></div>`;
    const electronics = allProducts.filter((product) => {
      return product.category.includes("jewelery");
    });
    electronics.map((product) => {
      render(product);
    });
  }
  function menProduct() {
    wrapper.innerHTML = `<h2 class="title-products">Prodotti Uomo</h2><a href="#allproducts">Torna alla Home</a> <div id="all-product"></div>`;
    allProducts.map((product) => {
      if (product.category === "men's clothing") {
        render(product);
      }
    });
  }

  function wrappingProducts() {
    wrapper.innerHTML = `<h2 class="title-products">Tutti i prodotti</h2> <div id="all-product"></div>`;
    allProducts.map((product) => {
      render(product);
    });
  }
  function checkout(){
    let AllKey = Object.keys(localStorage);  
      for (let index of AllKey) {
        console.log(index)
        for(let element of allProducts){
          if(JSON.parse(window.localStorage.getItem(index)).id ===  element.id){
            
            total.push(element.price)
          }
        }
        JSON.parse(window.localStorage.getItem(index))
        
      }
      sumprices()
      console.log(sum);      
    wrapper.innerHTML = `
      <div class="checkout-div">
      <form class="checkout-form">
      <label for="nome">Nome</label>
      <input type="text" name="nome" id="nome" placeholder="Nome" required>
      <label for="cognome">Cognome</label>
      <input type="text" name="cognome" id="cognome" placeholder="Cognome" required>
      <label for="indirizzo">Indirizzo</label>
      <input type="text" name="indirizzo" id="indirizzo" placeholder="Indirizzo" required>
      <label for="card-number">N.Carta di Credito/Debito</label>
      <input type="text" name="card-number" id="card-number" placeholder="Numero Di Carta di Credito/Debito" required>
      <label for="card">Circuito Carta di Credito</label>
      <label >Visa<input type="radio" name="card" id="visa" value="Visa" ></label>
      <label >Mastercard<input type="radio" name="card" id="mastercard" value="Master" checked ></label>
      <div>
      <button type="button"  class="empty-cart">Conferma e Paga</button>
      <a href="#allproducts">Annulla e torna agli acquisti</a>
      
      </div>
      <p class = "total-iva">Totale + Iva = ${sum+(sum*22/100)}€ (iva: ${sum*22/100}€) </p>
              
        </form>
      </div>`;
      
      
    }
    let finalArray = []
    function thanks(){
      wrapper.innerHTML = `<h2 class="title-products">Grazie per l'acquisto!</h2>`;
      const totalPrice = document.createElement("p")
      totalPrice.innerText = `Totale :${sum+(sum*22/100)}€`
      wrapper.appendChild(totalPrice)
      const allProd = document.createElement("div")
      allProd.className = "all-product"
      wrapper.appendChild(allProd)


      for(let products of allProducts){
        finalArray.push(JSON.parse(localStorage.getItem(products.id)))       
        
      }
      finalArray.map((element) =>{
        if(element!=null){
         
          const productDiv = document.createElement("div")
          productDiv.className = "product-final"
          
          const productImg = document.createElement("img")
          productImg.src = element.image
          productImg.width = "100";
          productImg.height = "150";
          
          const productTitle = document.createElement("p")
          productTitle.innerText = element.title

          const productPrice =document.createElement("p")
          productPrice.innerText = `${element.price} €`
          
          
          productDiv.appendChild(productTitle)
          productDiv.appendChild(productImg)
          productDiv.appendChild(productPrice)
          allProd.appendChild(productDiv)
          
          console.log(element)
          
        }
      })
      
      const exitBtn = document.createElement("button")
      exitBtn.className = "exit-button"
      exitBtn.innerText = "Arrivederci!"
      wrapper.appendChild(exitBtn)
      document.querySelector(".exit-button").addEventListener("click", ()=>{
        for(let product of allProducts){

          localStorage.removeItem(product.id)
          document.location.reload(true)
        }
      })

      
      
      console.log(finalArray)
    }


    const cartDiv = document.querySelector(".cart-container");
    const cartList = cartDiv.querySelector("ul");
    
    wrapper.addEventListener("click",(e)=>{
      
      if(e.path[0].className === "empty-cart"){
        thanks()
        
        
        
      }
      
    })

    
    
    document.querySelector(".checkout").addEventListener("click",()=>{
      document.querySelector(".right").classList.toggle("hidden-right")
    })
    wrapper.addEventListener("keyup", (e)=>{
      console.log(e.path[2])
      if(e.path[0].id === "card-number"){
        if(isNaN(e.path[0].value)){
          // alert("Numero di Carta Non Valido")
          e.path[0].value = ""

        }
        console.log(e.path)
      }
    })

  window.addEventListener("hashchange", (e) => {
    const destination = location.hash.split("-")[0];

    switch (destination) {
      case "#electronics":
        sidebar.classList.toggle("hidden-left");
        electronicsProduct();
        break;
      case "#men":
        sidebar.classList.toggle("hidden-left");
        menProduct();
        break;
      case "#women":
        sidebar.classList.toggle("hidden-left");
        womenProduct();
        break;
      case "#jewelery":
        sidebar.classList.toggle("hidden-left");
        jeweleryProduct();
        break;
      case "#allproducts":
        wrappingProducts();
        break;
      case "#checkout":
        checkout();
        break;
        
    }
  });

  return {
    products: wrappingProducts(),
  };
};
const wrapper = document.querySelector(".main-container");

const sidebar = document.querySelector(".left");

let total = [];
let sum;
function sumprices() {
  sum =0
  let sumTotal = 0; 
  total.forEach((element) => {
    sumTotal += element;
    sum = sumTotal   
    
  });
  
    
}
export { list };
