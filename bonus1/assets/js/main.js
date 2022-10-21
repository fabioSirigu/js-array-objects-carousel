const slidesArray = [
    {
        image: './assets/img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: './assets/img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: './assets/img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: './assets/img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: './assets/img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
]

const slidesEl = document.querySelector('.slides');

let activeImage = 0

for (let i = 0; i < slidesArray.length; i++) {
    const elementArray = slidesArray[i];
    const slideHtml = `<img class="${i === activeImage ? 'active' : ''}" src="${elementArray.image}" alt="">`;
    //generateMarkup(elementArray)
    slidesEl.insertAdjacentHTML('beforeend', slideHtml)
    generateTitle(i, elementArray);
    generateText(i, elementArray);   
    generateThumb(i, elementArray);
}

// seleziono i button che userò come next e prev
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// metto in ascolto il button al click
nextButton.addEventListener('click', function () {
    const slidesImg = document.querySelectorAll('.slides > img');
    const currentImage = slidesImg[activeImage];
    // scorro il titolo
    const slidesTitle = document.querySelectorAll('.title > h2');
    const currentTitle = slidesTitle[activeImage];
    // scorro il testo
    const slidesText = document.querySelectorAll('.text > h5');
    const currentText = slidesText[activeImage];
    // scorro le thumb
    const thumbsImg = document.querySelectorAll('.thumbnails > img');
    const currentThumb = thumbsImg[activeImage];
    
    // tolgo la classe active per non mostrarla più
    removeClass(currentImage, currentTitle, currentText, currentThumb);
    
    // faccio un incremento della mia immagine per selezionare la successiva
    activeImage++;
    
    // quando sono all'ultima immagine devo tornare alla prima
    if (activeImage === 5){
        activeImage = 0
        console.log(activeImage)
    }
    // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
    addClass(slidesImg, slidesTitle, slidesText, thumbsImg, currentThumb)
    
    
})

prevButton.addEventListener('click', function () {
    const slidesImg = document.querySelectorAll('.slides > img');
    const currentImage = slidesImg[activeImage];
    // scorro il titolo
    const slidesTitle = document.querySelectorAll('.title > h2');
    const currentTitle = slidesTitle[activeImage];
    // scorro il testo
    const slidesText = document.querySelectorAll('.text > h5');
    const currentText = slidesText[activeImage];
    // scorro le thumb
    const thumbsImg = document.querySelectorAll('.thumbnails > img');
    const currentThumb = thumbsImg[activeImage];
    // tolgo la classe active per non mostrarla più
    removeClass(currentImage, currentTitle, currentText, currentThumb);
    
    // faccio un decremento della mia immagine per selezionare la successiva
    activeImage--;
    
    // quando sono alla prima immagine devo tornare all'ultima
    if (activeImage === -1){
        activeImage = 4
        console.log(activeImage)
    }
    // ora che ho incrementato devo aggiungere una variabile per l'immagine e metterle la classe active
    addClass(slidesImg, slidesTitle, slidesText, thumbsImg, currentThumb);
    
})


function generateTitle(index, element) {
    const titleEl = document.querySelector('.title');
    const titleMarkup = `<h2 class="${index === activeImage ? 'active' : ''}">${element.title}</h2>`;
    titleEl.insertAdjacentHTML('beforeend', titleMarkup);
}

function generateText(index, element) {
    const textEl = document.querySelector('.text');
    const textMarkup = `<h5 class="${index === activeImage ? 'active' : ''}">${element.text}</h5>`;
    textEl.insertAdjacentHTML('beforeend', textMarkup);
}

function generateThumb(index, element) {
    const thumbEl = document.querySelector('.thumbnails')
    const thumbMarkup = `<img class="${index === activeImage ? 'active_thumb' : ''}" src="${element.image}" alt="">`;
    thumbEl.insertAdjacentHTML('beforeend', thumbMarkup);
}

function addClass(img, title, text, thumb){
    const nextImage = img[activeImage];
    const nextTitle = title[activeImage];
    const nextText = text[activeImage];
    const nextThumb = thumb[activeImage];
    nextImage.classList.add('active')
    nextTitle.classList.add('active')
    nextText.classList.add('active')
    nextThumb.classList.add('active_thumb')
}

function removeClass(img, title, text, thumb) {
    img.classList.remove('active');
    title.classList.remove('active');
    text.classList.remove('active');
    thumb.classList.remove('active_thumb');
}
