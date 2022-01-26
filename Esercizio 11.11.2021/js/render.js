const priceBtn = document.querySelector("#ordered")
const azBtn = document.querySelector("#az")
const priceOrder = (newData) =>{
    
    let ordered = newData.sort((a,b) => (a.title > b.title) ? 1 : -1);
    render(ordered);
    // 
    priceBtn.addEventListener("click", (event) =>{
        let ordered = newData.sort((a,b) => (a.price > b.price) ? -1 : 1);
        render(ordered);
        productDiv.classList.toggle("toggle")
        
         
    })
    azBtn.addEventListener("click", (event) =>{
        let ordered = newData.sort((a,b) => (a.title > b.title) ? 1 : -1);
        render(ordered);
        productDiv.classList.toggle("toggle")
        
         
    })
    
    
}
const productDiv = document.querySelector("#product")
const render = (data) =>{    
    const items = data.map((item) =>         
        
        `<div  class="single-product">
                 <ul>
                    <li >
                    <div class="manage-product">
                    <nav>
                    <ul>
                    <li>
                     Add To Cart
                    <span></span><span></span><span></span><span></span>
                    </li>
                    <li>
                     Favourites
                    <span></span><span></span><span></span><span></span>
                    </li>
                    </ul>
                    </nav>
                    </div>
                    </li>
                    <li class="li-product"><img src="${item.image}" height="190" width="190" alt=""></img></li>
                    <li >Prezzo:${item.price}</li>
                    <div class="scroll" id="scroll-text">
                        <li class="title" >${item.title}</li>
                    </div>
                </ul>           
             </div>`
    )
    
    productDiv.innerHTML = items.join("");

}

export {render,priceOrder}