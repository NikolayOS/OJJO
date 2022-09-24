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
            brand: `${brand}`,
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
addGoods("Rectangle2.png","spin","lkjlkjl",99999);
addGoods("item-pict.png","nekl","dolche",2134);
addGoods("Rectangle1.png","ring","fsdfsdf",435345);
addGoods("Rectangle2.png","spin","lkjlkjl",99999);
addGoods("item-pict.png","nekl","dolche",2134);
addGoods("Rectangle1.png","ring","fsdfsdf",435345);
addGoods("Rectangle2.png","spin","lkjlkjl",99999);
addGoods("item-pict.png","nekl","dolche",2134,"brand","forWhom","collection","season","event");
addGoods("Rectangle1.png","ring","fsdfsdf",435345,"brand","forWhom","collection","season","event");
addGoods("Rectangle2.png","spin","lkjlkjl",99999);
addGoods("item-pict.png","nekl","dolche",2134);
addGoods("Rectangle1.png","ring","fsdfsdf",435345);
addGoods("Rectangle2.png","spin","lkjlkjl",99999);
addGoods("item-pict.png","nekl","dolche",2134);
addGoods("Rectangle1.png","ring","fsdfsdf",435345);
addGoods("Rectangle2.png","spin","lkjlkjl",99999);


function veivCatalog(arr){
    let arrForView = [];
    for(let i = 0; i < arr.length; i++){
        let itemWrapp = document.createElement("div");
        let imgWrapp = document.createElement("div");
        imgWrapp.innerHTML = arr[i][0].img;
        itemWrapp.innerHTML = imgWrapp;
        arrForView.push(`<div class="catalog__item__wrapp "><div class="catalog__item__img">${imgWrapp.innerHTML}</div>${arr[i][0].type}${arr[i][0].name}${arr[i][0].price}</div>`);
        console.log(arr[i][0].collection);
    };
    let view = arrForView.join("");
    items.innerHTML  = view;
    let itemWrapp = document.querySelector(".catalog__item__wrapp");
    itemWrapp.classList.add(arr[0][0].collection);
    console.log(arr[0][0].collection);
}
veivCatalog(Goods);

/*-----------------------------------------------*/
const docElement = document.documentElement;
let windowWidth = docElement.clientWidth;
console.log(windowWidth);

let showMoreButton = document.querySelector(".show-more");
let maxClick = Goods.length;
let k = 1;


showMoreButton.addEventListener("click", function(e){
    ++k;
    let s = 1678.8 * k;
    console.log(k);
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

/*----------------------------------------------------------*/

function servicesOpacityText(){
let servicesText = document.querySelectorAll(".services__text p");
for (let i = 0; i < servicesText.length; i++){
    let a = 1 / (i + 0.5);
    servicesText[i].style.opacity = a;
};
}
servicesOpacityText();
let readMoreButton = document.querySelector(".services__more");
let readLessButton = document.querySelector(".services__less");
readMoreButton.addEventListener("click", readMore);
readMoreButton.addEventListener("click", () => {document.querySelector(".services__text").style.height = "500px"});
readLessButton.addEventListener("click", readMore);
readLessButton.addEventListener("click", servicesOpacityText);
readLessButton.addEventListener("click", () => {document.querySelector(".services__text").style.height = "297px"});
function readMore(){
    let services = document.querySelectorAll(".services p");
    services.forEach(element => {
        element.style.opacity = 1;
    });
    readMoreButton.classList.toggle("_active");
    readLessButton.classList.toggle("_active");
}

