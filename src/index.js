import './sass/main.scss';

import { galleryItems } from './partials/items.js';

const galleryEl = document.querySelector('.js-gallery');
const lightboxEl = document.querySelector(".js-lightbox");
const lightboxImage = document.querySelector(".lightbox__image");
const classRemover = () => {
  lightboxEl.classList.remove("is-open");
};

const classSetter = (attributeToChange, newAttributeInfo) => {
  lightboxImage.setAttribute(attributeToChange, newAttributeInfo);
};

const createGallery = (galleryItems, galleryEl) => {
  galleryEl.insertAdjacentHTML('afterbegin', galleryItems
    .map(image => `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${image.original}"
  >
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`)
    .join(''));
};

createGallery(galleryItems, galleryEl);

const galleryLinkEl = document.querySelectorAll('.gallery__link');
const galleryItemEl = galleryEl.querySelector('li');

galleryEl.addEventListener('click', e => {
  e.preventDefault();
  if(e.target.nodeName !== 'IMG') {
  return;
  }
  lightboxEl.classList.add("is-open");
  classSetter("src", e.target.dataset.source);
  classSetter("alt", e.target.alt);
});

lightboxEl.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    classRemover();
    classSetter("src", "");
  }
  else if (e.target.nodeName !== 'IMG') {
    classRemover();
    classSetter("src", "");
  }
});

window.addEventListener('keydown', e => {

  let galleryItemIndexEl = galleryItems.findIndex(galleryItem =>
  galleryItem.original === lightboxImage.src
  );

  if (e.code === "Escape") {
    classRemover();
    classSetter("src", "");
    window.removeEventListener("keydown", e);
  }
  else if (e.code === "ArrowLeft") {
    galleryItemIndexEl === 0 ? (galleryItemIndexEl = galleryItems.length - 1) : (galleryItemIndexEl -= 1);

    classSetter("src", galleryItems[galleryItemIndexEl].original);
    classSetter("alt", galleryItems[galleryItemIndexEl].description);
  }
  else if (e.code === "ArrowRight") {
    galleryItemIndexEl === galleryItems.length - 1 ? (galleryItemIndexEl = 0) : (galleryItemIndexEl += 1);
    classSetter("src", galleryItems[galleryItemIndexEl].original);
    classSetter("alt", galleryItems[galleryItemIndexEl].description);
  }
});

