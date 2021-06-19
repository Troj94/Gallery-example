import './sass/main.scss';

const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.js-gallery');
// console.log(galleryEl);

const lightboxEl = document.querySelector(".js-lightbox");
// console.log(lightboxEL);

const lightboxImage = document.querySelector(".lightbox__image");
// console.log(lightboxImage);

const classRemover = () => {
  lightboxEl.classList.remove("is-open");
};

const classSetter = (attributeToChange, newAttributeInfo) => {
  lightboxImage.setAttribute(attributeToChange, newAttributeInfo);
};

// function imgAttributeCleaner() {
//   classRemover();
//   classSetter();
// }

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
// console.log(galleryLinkEl);
const galleryItemEl = galleryEl.querySelector('li');
// console.log(galleryItemEl);

galleryEl.addEventListener('click', e => {
  e.preventDefault();
  if(e.target.nodeName !== 'IMG') {
  return;
  }
  // console.log(e.target.nodeName);
  lightboxEl.classList.add("is-open");
  classSetter("src", e.target.dataset.source);
  classSetter("alt", e.target.alt);
  // lightboxImage.setAttribute("src", e.target.dataset.source);
  // lightboxImage.setAttribute("alt", e.target.alt);
});

lightboxEl.addEventListener('click', e => {
  if (e.target.nodeName === 'BUTTON') {
    // imgAttributeCleaner();

    classRemover();
    // // lightboxEl.classList.remove("is-open");
    // // console.log('Click on Close Modal Button');

    classSetter("src", "");
    // // lightboxImage.setAttribute("src", "");
  }
  else if (e.target.nodeName !== 'IMG') {
    // imgAttributeCleaner();

    classRemover();
    // // lightboxEl.classList.remove("is-open");
    // // console.log(e.target.nodeName);

    classSetter("src", "");
    // // lightboxImage.setAttribute("src", "");
  }
});

window.addEventListener('keydown', e => {

  let galleryItemIndexEl = galleryItems.findIndex(galleryItem =>
  galleryItem.original === lightboxImage.src
  );

  if (e.code === "Escape") {
    // imgAttributeCleaner();

    classRemover();
    // // lightboxEl.classList.remove("is-open");

    classSetter("src", "");
    // // lightboxImage.setAttribute("src", "");

    window.removeEventListener("keydown", e);
  }
  else if (e.code === "ArrowLeft") {
    // console.log(galleryItemIndexEl);
    galleryItemIndexEl === 0 ? (galleryItemIndexEl = galleryItems.length - 1) : (galleryItemIndexEl -= 1);

    classSetter("src", galleryItems[galleryItemIndexEl].original);
    classSetter("alt", galleryItems[galleryItemIndexEl].description);
    // lightboxImage.setAttribute("src", galleryItems[galleryItemIndexEl].original);
    // lightboxImage.setAttribute("alt", galleryItems[galleryItemIndexEl].description);
  }
  else if (e.code === "ArrowRight") {
    // console.log(galleryItemIndexEl);
    galleryItemIndexEl === galleryItems.length - 1 ? (galleryItemIndexEl = 0) : (galleryItemIndexEl += 1);

    classSetter("src", galleryItems[galleryItemIndexEl].original);
    classSetter("alt", galleryItems[galleryItemIndexEl].description);
    // lightboxImage.setAttribute("src", galleryItems[galleryItemIndexEl].original);
    // lightboxImage.setAttribute("alt", galleryItems[galleryItemIndexEl].description);
  }

  // switch(e.code) {
  //     case "Escape":
  //     // lightboxEl.classList.remove("is-open");
  //     classRemover();
  //     lightboxImage.setAttribute("src", "");
  //     // window.removeEventListener("keydown", e);
  //     break;
  //     case "ArrowLeft":
  //     indexEl === 0 ? (indexEl = galleryItems.length - 1) : (indexEl -= 1);
  //     lightboxImage.setAttribute("src", galleryItems[indexEl].original);
  //     break;
  //     case "ArrowRight":
  //     indexEl === galleryItems.length - 1 ? (indexEl = 0) : (indexEl += 1);
  //     lightboxImage.setAttribute("src", galleryItems[indexEl].original);
  //     break;
  // }
});

