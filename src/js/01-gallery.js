// Add imports above this line
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector('.gallery');

const marcup = galleryItems
  .map(
    item => `<a class="gallery__item"
    href="${item.original}">
  <img class="gallery__image"
  src="${item.preview}"
   alt="${item.description}" />
</a>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', marcup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
