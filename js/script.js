"use strict"

const isMobile = {
    Android: function(){
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function(){
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function(){
        return navigator.userAgent.match(/IOS/i);
    },
    Opera: function(){
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function(){
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function(){
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
    
};
if(isMobile.any()){
    document.body.classList.add('_touch');
    let menuArrows = document.querySelectorAll('.menu__arrow');
    if (menuArrows.length > 0){
        for(let index = 0; index < menuArrows.length; index++){
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function(e){
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }
}else{
    document.body.classList.add('_pc');
}


//MENU BURGER
const inconMenu = document.querySelector('.header__burger');
const menuBody = document.querySelector('.header__body');
if(inconMenu){
    inconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        inconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

//ZAKRITIE MENU PRI KLIKE
function onMenuLinkClick(e){
    const menuLink = e.target;
    if(inconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        inconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    }
}
const menuLinks = document.querySelectorAll('.header__body a');
if(menuLinks.length > 0){
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
}
// SELECT MENU
let selectArrows = document.querySelectorAll(".select__icon-img");
let selectLists = document.querySelectorAll(".select__list");
let selectItems = document.querySelectorAll(".select__item");
let selectCurrents = document.querySelectorAll(".select__current");
let selectCurrent;

for (let i = 0; i < selectArrows.length; i++){
    let selectArrow = selectArrows[i];
    let selectList = selectLists[i];
    
    selectArrow.addEventListener('click', function(e){
        selectCurrent = selectCurrents[i];
        selectArrow.classList.toggle('active');
        selectList.classList.toggle('active');
        for(let j = 0; j < selectItems.length; j++){
                    let selectItem = selectItems[j];
                    selectItem.addEventListener('click', function(e){
                        selectCurrent.innerText = selectItem.innerText;
                        selectArrow.classList.remove('active');
                        selectList.classList.remove('active');
                    });
                }
    });
    
}


//PROKRUTKA PRI KLIKE

// const menuLinks = document.querySelectorAll('.menu__link[data-goto');
// if(menuLinks.length > 0){
//     menuLinks.forEach(menuLink => {
//         menuLink.addEventListener('click', onMenuLinkClick);
//     });

//     function onMenuLinkClick(e){
//         const menuLink = e.target;
//         if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
//             const gotoBlock = document.querySelector(menuLink.dataset.goto);
//             const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
            
//             if(inconMenu.classList.contains('_active')){
//                 document.body.classList.remove('_lock');
//                 inconMenu.classList.remove('_active');
//                 menuBody.classList.remove('_active');
//             }
//             window.scrollTo({
//                 top: gotoBlockValue,
//                 behavior: 'smooth'
//             });
//             e.preventDefault();
//         }
//     }
// }