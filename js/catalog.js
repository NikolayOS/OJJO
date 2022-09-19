let items = document.querySelector(".catalog__item");
let Goods = [];
function addGoods(img,type,name,price){
    let arrOfGoods = [];
    for (let i = 0; i < 8; i++){
        let objGoods = {
            name: `<span class="catalog__item__name">${name}</span>` ,
            price: `<span class="catalog__item__price">${price}</span>` ,
            type: `<span class="catalog__item__type">${type}</span>` ,
            img: `<img src="../OJJO/img/${img}">` ,
        }
        arrOfGoods.push(objGoods);
    }
    Goods.push(arrOfGoods);
}
addGoods("item-pict.png","nekl","dolche",2134);
addGoods("Rectangle1.png","ring","fsdfsdf",435345);
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
        arrForView.push(`<div class="catalog__item__wrapp"><div class="catalog__item__img">${imgWrapp.innerHTML}</div>${arr[i][0].type}${arr[i][0].name}${arr[i][0].price}</div>`);
    };
    let view = arrForView.join("");
    items.innerHTML  = view;
    console.log(view);
}
veivCatalog(Goods);