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