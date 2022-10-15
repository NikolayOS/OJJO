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
    readMoreButton.addEventListener("click", () => {document.querySelector(".services__text").style.height = "auto"});
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