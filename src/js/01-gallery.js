// Add imports above this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const cardCreated = createGalleryCard(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", cardCreated);

function createGalleryCard(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="
      ${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
  
}
console.log(galleryItems);

// galleryEl.addEventListener("click", onCardClick);

// function onCardClick(event) {
//     event.preventDefault();

//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     }
//     const originalImg = event.target.dataset.source;

//     //add from basicLightbox
    
//     modalWindow.show();
// }
let modalWindow = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(modalWindow)