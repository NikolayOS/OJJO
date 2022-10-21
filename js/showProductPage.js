const productConten = localStorage.getItem("data");
let goodsPageWrapp = document.querySelector(".goodsPageWrapp");
    window.addEventListener("load", function(){
        
        goodsPageWrapp.innerHTML = productConten;
        localStorage.removeItem(productConten);
})



