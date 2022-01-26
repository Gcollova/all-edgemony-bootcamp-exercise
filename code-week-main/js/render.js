const wrapper = document.querySelector(".main-container");
/**
 * 
 * @param {*} product is the object contained inside the API 
 * 
 */
const render = (product) => {
    const description = document.createElement("span");
    description.className = "description";
    description.classList.add("hidden");
    const descriptionText = document.createElement("p");
    descriptionText.innerHTML = `${product.description}`;
    description.appendChild(descriptionText);       
    const allWrappers = wrapper.querySelector("#all-product");
    const wrapperProducts = document.createElement("div");
    wrapperProducts.className = "product";
    wrapperProducts.id = product.id;
    const productImg = document.createElement("img");
    productImg.src = product.image;
    productImg.alt = product.title;
    /* productImg.width = "100"; */
    productImg.height = "100";
    const imgDiv =document.createElement("div")
    imgDiv.className="img-div"
    imgDiv.appendChild(productImg)
    const productTitle = document.createElement("p");
    productTitle.append(product.title);
    const productPrice = document.createElement("p");
    productPrice.innerText =`${product.price} €`;
    const info = document.createElement("div");
    info.className = "info";
    const addToCart = document.createElement("button");
    addToCart.innerText = "Aggiungi al Carrello";
    addToCart.className = "add-to-cart";
    wrapperProducts.appendChild(description);    
    wrapperProducts.appendChild(imgDiv);
    info.appendChild(productTitle);
    info.appendChild(productPrice);
    wrapperProducts.appendChild(info);
    wrapperProducts.appendChild(addToCart);
    allWrappers.append(wrapperProducts);
  };

  const cartProduct = document.createElement("div")
  const cartDiv = document.querySelector(".cart-container")
  const renderCart = (data) =>{
    cartProduct.innerText = `${data}`
    cartDiv.appendChild(cartProduct)
    console.log(data)
  }

  export {render, renderCart}