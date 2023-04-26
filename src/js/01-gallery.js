// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const makeGalleryCard = ({preview, original, description} = {}) => {
    return `
    <li class="gallery__item list">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    </li>
    `;
  };
  const galleryCard = galleryItems.map((el) => makeGalleryCard(el));

  galleryEl.insertAdjacentHTML('beforeend', galleryCard.join(''));

  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    });

console.log(galleryEl);
