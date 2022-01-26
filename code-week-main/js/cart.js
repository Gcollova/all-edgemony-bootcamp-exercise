const counter = document.querySelector(".counter");
const cartDiv = document.querySelector(".cart-container");
const cartList = cartDiv.querySelector("ul");
const allProducts = document.querySelector(".main-container");
let cart = [];
const alertbox = document.querySelector(".alert");
let cartToLocal = [];
let counterDiv = [];
const alertBtn = document.querySelector(".alert-btn");
alertBtn.addEventListener("click", () => alertbox.classList.add("disappear"));
const totalPrice = document.querySelector(".total-price");
let total = [];
let i = 0;
let checkers = true;
let quantity = 1



export function dataParse(data) {
  let AllKey = Object.keys(localStorage);
 
  
  for (let index of AllKey) {
    
    for(let element of data){
      if(JSON.parse(window.localStorage.getItem(index)).id ===  element.id){
        let newProduct = {
          category: element.category,
          description: element.description,
          id: element.id,
          image:element.image,
          price: element.price,
          rating:element.rating,
          title:element.title,
          counters: quantity
    
      }
          cartToLocal.push(newProduct)
        }
      }
      JSON.parse(window.localStorage.getItem(index))
    renderCart(JSON.parse(window.localStorage.getItem(index)));
  }
  sumprice()
  
}
export function addToCart(data) {
  deleteFromCart(data,quantity);
  

  allProducts.addEventListener("click", (e) => {
    for (let product of data) {
      if (e.path[0].className === "add-to-cart") {
        if (parseInt(e.path[1].id) === product.id) {
          

          for (let localproduct of cartToLocal) {
            if (localproduct.id == product.id) {
              
              
              alertbox.classList.remove("disappear");
              
              checkers = false;
            }
          }
          if (checkers) {
            renderCart(product,quantity);
          }
          checkers = true;
        }
      }
    }
  });
}

export function deleteFromCart(data) {
  cartDiv.addEventListener("click", (e) => {
    if (e.path[0].className === "delete-btn") {
      cartList.removeChild(e.path[0].parentElement);
      for (let localproduct of cartToLocal) {
        if (localproduct.id === parseInt(e.path[0].id)) {
          cartToLocal.splice(cartToLocal.indexOf(localproduct), 1);
          sumprice();
          localStorage.removeItem(localproduct.id);
          
        }
      }

      if (parseInt(e.path[1].childNodes[2].value) >= 1) {
        
        counterDiv.push(parseInt(e.path[1].childNodes[2].value) * -1);
        counterTot();
        check();
      }
    }
  });
}

export function check() {
  if (cartList.childNodes.length == 0) cartList.append(message);
}




let value;
const message = document.createElement("li");
message.innerHTML = "Il Tuo Carrello è Vuoto";


function renderCart(product,quantity) {
  let stringMaxLength = 30;
  let productCounter = document.createElement("input");
  productCounter.type = "number";

  productCounter.min = "1";
  
  productCounter.className = "product-counter";
  productCounter.defaultValue = "1";
  productCounter.id = product.id

  const price = document.createElement("p");
  price.innerHTML = `${product.price}`;
  cart.push(
    ` ${product.title.substring(0, stringMaxLength)} 
  ...   Prezzo:`
  );

  total.push(parseInt(`${product.price}`));

  const cartProduct = document.createElement("li");
  cartProduct.id = product.id
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.innerText = "X";
  deleteBtn.id = product.id;
  deleteBtn.value = ` ${product.title.substring(0, stringMaxLength)} 
  ...   Prezzo:`;
  cartProduct.innerHTML = `${cart[i].toString()}`;
  cartProduct.appendChild(price);

  i++;
  cartProduct.appendChild(productCounter);
  cartProduct.appendChild(deleteBtn);
  cartList.appendChild(cartProduct);
  cartDiv.append(cartList);
  counterDiv.push(productCounter.value);

  counterTot();

  if (cartList.firstChild.innerHTML === "Il Tuo Carrello è Vuoto") {
    cartList.removeChild(message);
  }
  let checking = true;
  for (let localProduct of cartToLocal) {
    if (localProduct.id == product.id) {
      checking = false;      
    }
  }
  if (checking) {
    let newProduct = {
        category: product.category,
        description: product.description,
        id: product.id,
        image:product.image,
        price: product.price,
        rating:product.rating,
        title:product.title,
        counters: quantity

    }
    cartToLocal.push(newProduct);
    sumprice();
    localStorage.setItem(product.id, JSON.stringify(product));
  }
}
export function counterTot() {
  let sumTotal = 0;
  counterDiv.forEach((element) => {    
    sumTotal += parseInt(element) ;
  });
  counter.innerHTML = sumTotal;
}

cartDiv.addEventListener("input", (e)=>{ 
  
  if(parseInt(e.path[1].childNodes[2].id) === parseInt(e.path[1].id)){
    
    
    if(!isNaN(parseInt(e.path[0].value))){    
      if(parseInt(e.path[0].value) > parseInt(e.path[0].defaultValue)){
       
        
        counterDiv.push(-(e.path[0].defaultValue))   
        counterDiv.push(parseInt(e.path[0].value))
        e.path[0].defaultValue = parseInt(e.path[0].value)
        quantity = e.path[0].defaultValue
        counterTot()
        for(let element of cartToLocal){
          if(element.id === parseInt(e.path[1].childNodes[2].id)) {
            
            element.counters = e.path[0].defaultValue
          }
          
        }
        sumprice();
      
    } else{
      counterDiv.push(-(e.path[0].defaultValue))
      counterDiv.push(parseInt(e.path[0].value))
      e.path[0].defaultValue = parseInt(e.path[0].value)
      quantity = e.path[0].defaultValue
      counterTot()
      for(let element of cartToLocal){
        if(element.id === parseInt(e.path[1].childNodes[2].id)) {

          element.counters = e.path[0].defaultValue
        }
        
      }
      sumprice();
    } 
  }
     
   
} 
})

export function sumprice() {
  let sumTotal = 0; 
  cartToLocal.forEach((element) => {
    sumTotal += element.price * parseInt(element.counters);    
  });
  totalPrice.innerHTML = `${sumTotal}`;  
}
