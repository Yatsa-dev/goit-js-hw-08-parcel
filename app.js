'use stricts'
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
const refs = {
  galleryContainer: document.querySelector('.js-gallery'),
  modalWindow: document.querySelector('.lightbox'),
  closeBtnModalWindow: document.querySelector('button[data-action="close-lightbox"]'),
  imageOnContainer: document.querySelector('.lightbox__image'),
  overlayGallery: document.querySelector('.lightbox__overlay'),
  arrayImagesForChange: document.querySelectorAll('.gallery__image'),
};

let activeIndex = 0;
const searchActiveIndex = onChangeImageByKey(galleryItems);
const galleryMarkup = createCardsGalleryMarkup(galleryItems);
refs.closeBtnModalWindow.addEventListener('click',onCloseModalWindow)
refs.overlayGallery.addEventListener('click', onBackdropClick)
refs.galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
refs.galleryContainer.addEventListener('click',onGalleryContainerClick)

// функция создания разметки
function createCardsGalleryMarkup(gallery) {
  const markup = gallery.map(({ original, preview, description }) => {
    return `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
</li> 
  `
  })
.join('');
return markup;
}
// фунцкия делегирования 
function onGalleryContainerClick(event) {
  if (!event.target.classList.contains('gallery__image')) {
    return
  }
  refs.imageOnContainer.src = event.target.dataset.source
  refs.imageOnContainer.alt = event.target.alt

  onOpenModalClick(event)
}
// функция поиска активного индекса картинки
  function onChangeImageByKey(gallery) {
  gallery.forEach((num,idx) => {
    if (num.original === refs.imageOnContainer.src) {
      activeIndex = idx; 
    }
  })
}
// функция переключения картинок по нажатию клавиш
 function changeImagePressRigthLeftKeys({ key }) {
  switch (key) {
    case galleryItems.length - 1 > activeIndex && "ArrowRight":
      activeIndex += 1;
      refs.imageOnContainer.src = galleryItems[activeIndex].original;
      break;
    case activeIndex > 0 && "ArrowLeft":
      activeIndex -= 1;
      refs.imageOnContainer.src = galleryItems[activeIndex].original;
      break;
    case activeIndex === galleryItems.length - 1 && "ArrowRight":
      activeIndex = 0;
      refs.imageOnContainer.src = galleryItems[activeIndex].original;
      break;
    case activeIndex === 0 && "ArrowLeft":
      activeIndex = galleryItems.length - 1;
      refs.imageOnContainer.src = galleryItems[activeIndex].original;
      break;
    case "Escape":
      onCloseModalWindow();
      break;
    default:
      alert("Эти клавиши не задействованы в работе галереи, используйте, пожалуйста 🠔 и 🠖 для переключения изображений");
  }
}
// добавление класс для открития модального окна
function onOpenModalClick(event) {
  window.addEventListener('keydown', changeImagePressRigthLeftKeys)
  window.addEventListener('keydown',onEscKeyPress)
  event.preventDefault();
  refs.modalWindow.classList.add('is-open')
}
// закрытие модального окна и очищение src 
function onCloseModalWindow() {
   window.removeEventListener('keydown', changeImagePressRigthLeftKeys)
  window.removeEventListener('keydown',onEscKeyPress)
  refs.modalWindow.classList.remove('is-open')
  refs.imageOnContainer.src = '';
  refs.imageOnContainer.alt = '';
}
// закрытие модалки по клику на оверлей 
function onBackdropClick(event) {
  if (event.currentTarget === event.target)
    onCloseModalWindow()
}
// закрытие модалки по клавише Esc
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
     onCloseModalWindow()
  }
}
