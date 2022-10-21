let items = document.querySelector(".catalog__item");
let Goods = [];
function addGoods(img,type,name,price,brand,forWhom,collection,season,event){
    let arrOfGoods = [];
    for (let i = 0; i < 8; i++){
        let objGoods = {
            name: `<span class="catalog__item__name">${name}</span>` ,
            price: `<span class="catalog__item__price">${price}</span>` ,
            type: `<span class="catalog__item__type">${type}</span>` ,
            img: `<img src="../OJJO/img/${img}">` ,
            brand:`<span class="catalog__item__brand">${brand}</span>`,
            forWhom: `${forWhom}`,
            collection: `${collection}`,
            season: `${season}`,
            event: `${event}`,
        }
        arrOfGoods.push(objGoods);
    }
    Goods.push(arrOfGoods);
}
addGoods("item-pict.png","nekl","dolche",2134,"brand","forWhom","collection","season","event");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand","forWhom","collection","season","event");
addGoods("Rectangle2.png","spin","lkjlkjl",99999,"brand");
addGoods("item-pict.png","nekl","dolche",2134,"brand");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand");
addGoods("Rectangle2.png","spin","lkjlkjl",99999,"brand");
addGoods("item-pict.png","nekl","dolche",2134,"brand");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand");
addGoods("Rectangle2.png","spin","lkjlkjl",99999,"brand");
addGoods("item-pict.png","nekl","dolche",2134,"brand","forWhom","collection","season","event");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand","forWhom","collection","season","event");
addGoods("Rectangle2.png","spin","lkjlkjl",99999,"brand");
addGoods("item-pict.png","nekl","dolche",2134,"brand");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand");
addGoods("Rectangle2.png","spin","lkjlkjl",99999,"brand");
addGoods("item-pict.png","nekl","dolche",2134,"brand");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand");
addGoods("Rectangle2.png","spin","lkjlkjl",99999,"brand");


function veivCatalog(arr){
    let arrForView = [];
    for(let i = 0; i < arr.length; i++){
        let itemWrapp = document.createElement("div");
        let imgWrapp = document.createElement("div");
        imgWrapp.innerHTML = arr[i][0].img;
        itemWrapp.innerHTML = imgWrapp;
        arrForView.push(`<a href = "goodsPage.html" class="catalog__item__wrapp"><div  class="catalog__item__img">${imgWrapp.innerHTML}</div>${arr[i][0].type}${arr[i][0].brand}${arr[i][0].name}${arr[i][0].price}</a>`);
    };
    let view = arrForView.join("");
    if(items){
        items.innerHTML  = view;
    }
    
    // let itemWrapp = document.querySelector(".catalog__item__wrapp");
    // if(itemWrapp){
    //     itemWrapp.classList.add(arr[0][0].collection);
    // }
    
}
veivCatalog(Goods);

/*-----------------------------------------------*/
const docElement = document.documentElement;
let windowWidth = docElement.clientWidth;

let showMoreButton = document.querySelector(".show-more");
let maxClick = Goods.length;
let k = 1;

if(showMoreButton){
    showMoreButton.addEventListener("click", function(e){
        ++k;
        let s = 1728.8 * k;
        items.style.height = `${s}px`;
        if(k == (maxClick / 9)){
            if (windowWidth >= 1050 ){
                showMoreButton.style.display = ("none");
            }
        }else if(k == (maxClick / 6)){
            if (windowWidth >= 700 ){
                showMoreButton.style.display = ("none");
            }
        }else if(k == (maxClick / 3)){
            if (windowWidth <= 700 ){
                showMoreButton.style.display = ("none");
            }
        }
    });
}


/*----------------------------------------------------------*/
let productContent;
let productParam;
function productPage(e){
// console.log(productContent);
productContent =  `<section class="goodsPhotos">
<div class="goodsPhotos__main"><img src="${productParam.img}"></div>
<ul class="goodsPhotos__list">
    <li class="goodsPhotos__item"><img src="${productParam.img}" alt=""></li>
    <li class="goodsPhotos__item"><img src="${productParam.img}" alt=""></li>
    <li class="goodsPhotos__item"><img src="${productParam.img}" alt=""></li>
</ul>
</section>
<section class="goodsDescription-wrapp">
<section class="goodsDescription">
    <h4>${productParam.name}</h4>
    <div class="goodsDescription__categories">
        <span>Category: <a href="#">${productParam.type}</a></span>
        <span>Brand: <a href="#">${productParam.brand}</a></span>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit mattis scelerisque odio nunc. Ipsum quis facilisis turpis vulputate. Viverra dignissim in nec phasellus. Tincidunt est ipsum diam, vestibulum dignissim dui diam. Et nulla sit convallis orci est, fames sit luctus lacus. Nunc donec malesuada amet eget eget pharetra. Ultricies et, ac varius at amet viverra feugiat non massa.
        Vel vel in urna, sodales urna ac sed felis. Tellus augue et senectus malesuada faucibus sollicitudin ornare. Sit non et sit enim in ornare velit. Ac imperdiet vitae, orci, nec scelerisque enim sit enim risus. 
        Et nulla sit convallis orci est, fames sit luctus lacus. 
        
    </p>
    <div class="goodsDescription__price">${productParam.price}</div>
    <div class="goodsDescription__byttons">
        <a href="#" class="goodsDescription__buy"><span>buy</span></a>
        <a href="#" class="goodsDescription__AddToBasket"><span>Add to Basket</span></a>
    </div>
</section>
</section>`
localStorage.setItem("data",productContent);
// window.scrollTo(0,0);
}
if(items){
    items.addEventListener("click", function(e){
        
        if(e.target.closest(".catalog__item__wrapp")){
            
            if(e.target.className == "catalog__item__wrapp"){
                productParam = {
                    img: e.target.childNodes[0].childNodes[0].src,
                    type: e.target.childNodes[1].innerText,
                    brand: e.target.childNodes[2].innerText,
                    name: e.target.childNodes[3].innerText,
                    price: e.target.childNodes[4].innerText,
                }
                productPage(e);
            }else{
                productParam = {
                    img: e.target.offsetParent.childNodes[0].childNodes[0].src,
                    type: e.target.offsetParent.childNodes[1].innerText,
                    brand: e.target.offsetParent.childNodes[2].innerText,
                    name: e.target.offsetParent.childNodes[3].innerText,
                    price: e.target.offsetParent.childNodes[4].innerText,
                }
                productPage(e);
            }
    }
}
    )
}

