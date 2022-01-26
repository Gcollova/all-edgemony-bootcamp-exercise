import { products } from "./products.js";

function createProduct(parent, imgUrl, productTitle, textPrice, productId) {
  const product = document.createElement("div");
  product.className = "product";
  product.id = productId;

  product.addEventListener("click", (e) => {
    
      
    cartDiv.push(productTitle,parseFloat(textPrice))    
    const inCart = document.createElement("div");
    inCart.className = "in-cart";
    const deleteBtn = document.createElement("button");
    inCart.innerHTML = cartDiv;
    deleteBtn.append("X");  
    
    inCart.id = parseFloat(textPrice)
    total.push(parseFloat(textPrice))
    
    deleteBtn.className = "delete-button";
    inCart.append(deleteBtn);
    cart.append(inCart);
    console.log(inCart.id)
    
    renderTotal()
    cartDiv.splice(0, 2);
  
});

  createImg(product, imgUrl, productTitle, productId);
  createText(product, productTitle, textPrice, productId);
  createButton(product, productId);
  parent.appendChild(product);
}

function createImg(parent, imgUrl, productTitle) {
  const image = document.createElement("img");
  image.src = imgUrl;
  image.alt = productTitle;

  parent.appendChild(image);
}

function createText(parent, productTitle, textPrice) {
  const title = document.createElement("h4");
  title.textContent = productTitle;

  const price = document.createElement("strong");
  price.textContent = `${textPrice} $`;

  parent.append(title, price);
}
function createButton(parent, productId) {
  const btn = document.createElement("button");
  btn.textContent = "Add To Cart";
  btn.value = productId;
  parent.appendChild(btn);
}

const wrapperProducts = document.querySelector(".wrapper__products");

function renderProducts(listItems) {
  listItems.map((product) => {
    createProduct(
      wrapperProducts,
      product.image,
      product.title,
      product.price,
      product.id
    );
  });
  const product =wrapperProducts.querySelector(".product")
  
  
}
let parsedProduct = []
// Async await
const getProductsList = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  parsedProduct = data
  
  return renderProducts(data);
};

getProductsList();



const hero = [
  "https://media.istockphoto.com/photos/what-you-wear-should-make-you-feel-free-and-comfortable-picture-id1297633356",
  "https://media.istockphoto.com/photos/young-black-woman-with-curly-hair-in-yellow-dress-and-with-styles-picture-id1295901898",
  "https://media.istockphoto.com/photos/fashionable-clothes-in-a-boutique-store-in-london-picture-id653003428",
];
let i = 0;
function cicle() {
  if (i > hero.length - 1) {
    i = 0;
  }
  
  document.querySelector(".__hero").style.backgroundImage = `url(${hero[i]})`;
  i++;
}
setInterval(() => cicle(), 3000);

const cartBtn = document.querySelector(`.cart-button`);
const cart = document.querySelector(".cart");
const cartDiv = [];
cartBtn.addEventListener("click", () => {
  cart.classList.toggle("hide");
  console.log(cartBtn);
});


cart.addEventListener("click", (e) => {
  
    
    if(e.path[0].className === "delete-button"){
      cart.removeChild(e.path[0].parentNode);
      const index = total.indexOf(parseFloat(e.path[1].id))
      if(index > -1){
        total.splice(index,1)
      }      
      renderTotal()
    }
})
  
  

const total = [];
const totalDiv = document.createElement("div")

const renderTotal = () =>{   
  const sum = total.reduce((a,b) => a + b,0) 
  totalDiv.innerHTML= `Total:${sum}` 
  console.log(total) 
  
}
cart.append(totalDiv)
renderTotal()
