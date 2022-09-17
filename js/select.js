let arrow = document.querySelector(".select__icon-img");
let selectList = document.querySelector(".select__list");
let selectItems = document.querySelectorAll(".select__item");
let carrentValue = document.querySelector(".select__current");

arrow.addEventListener('click', function(e){
    arrow.classList.toggle('active');
    selectList.classList.toggle('active');
    for(let i = 0; i < selectItems.length; i++){
        let selectItem = selectItems[i];
        selectItem.addEventListener('click', function(e){
            carrentValue.innerText = selectItem.innerText;
            arrow.classList.remove('active');
            selectList.classList.remove('active');
        });
    }
});
