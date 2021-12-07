let main = document.querySelector('main');
let selectedImage = document.querySelector('.selected')
let firstImage = document.querySelector('.first-picture')
let secoundImage = document.querySelector('.secound-picture')
let thirdImage = document.querySelector('.third-picture')


main.style.background = selectedImage;


firstImage.addEventListener('click', () => {
    secoundImage.classList.remove('selected');
    thirdImage.classList.remove('selected');
    firstImage.classList.add('selected');
    console.log('1')
})

secoundImage.addEventListener('click', () => {
    firstImage.classList.remove('selected');
    thirdImage.classList.remove('selected');
    console.log('2')
    secoundImage.classList.add('selected');
})

thirdImage.addEventListener('click', () => {
    secoundImage.classList.remove('selected');
    firstImage.classList.remove('selected');
    console.log('3');
    thirdImage.classList.add('selected');
})

let infoBg = localStorage.activeItem;


window.addEventListener('click', event =>{
    if(event.target == firstImage || event.target == secoundImage || event.target == thirdImage){
        if (firstImage.classList.contains('selected')){
            main.style.backgroundImage = 'url(images.jpg)';
            console.log('123241')
            localStorage.activeItem = 'first';
        } else if (secoundImage.classList.contains('selected')){
            main.style.backgroundImage = 'url(zahr.jpg)';
            localStorage.activeItem = 'secound';
        } else {
            main.style.backgroundImage = 'url(загружено.jpg)';
            localStorage.activeItem = 'third';
        }
    }

})

if (infoBg == 'first'){
    main.style.backgroundImage = 'url(images.jpg)';
} else if (infoBg == 'secound'){
    main.style.backgroundImage = 'url(zahr.jpg)';
} else if (infoBg == 'third'){
    main.style.backgroundImage = 'url(загружено.jpg)';
}



