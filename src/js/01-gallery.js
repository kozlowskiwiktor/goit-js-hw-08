// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const list = document.querySelector('.gallery')
const markup = galleryItems
     .map(image => 
        `<a class="gallery__item" href="${image.original}">
            <img class="gallery__image" 
                src="${image.preview}"
                alt="${image.description}"/>
         </a>
        `)
    .join("");

console.log(markup)

list.insertAdjacentHTML('afterbegin', markup);

// Opisany w dokumentacji
import SimpleLightbox from "simplelightbox";
// Dodatkowy import stylów
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionsDelay: 250,
});