// // фунцкия делегирования 
// export function onGalleryContainerClick(event) {
//   if (!event.target.classList.contains('gallery__image')) {
//     return
//   }
//   refs.imageOnContainer.src = event.target.dataset.source
//   refs.imageOnContainer.alt = event.target.alt

//   onOpenModalClick(event)
// }

// // функция поиска активного индекса картинки
//   export function onChangeImageByKey(gallery) {
//   gallery.forEach((num,idx) => {
//     if (num.original === refs.imageOnContainer.src) {
//       activeIndex = idx; 
//     }
//   })
// }

// // функция переключения картинок по нажатию клавиш
//  export function changeImagePressRigthLeftKeys({ key }) {
//   switch (key) {
//     case galleryItems.length - 1 > activeIndex && "ArrowRight":
//       activeIndex += 1;
//       refs.imageOnContainer.src = galleryItems[activeIndex].original;
//       break;
//     case activeIndex > 0 && "ArrowLeft":
//       activeIndex -= 1;
//       refs.imageOnContainer.src = galleryItems[activeIndex].original;
//       break;
//     case activeIndex === galleryItems.length - 1 && "ArrowRight":
//       activeIndex = 0;
//       refs.imageOnContainer.src = galleryItems[activeIndex].original;
//       break;
//     case activeIndex === 0 && "ArrowLeft":
//       activeIndex = galleryItems.length - 1;
//       refs.imageOnContainer.src = galleryItems[activeIndex].original;
//       break;
//     case "Escape":
//       onCloseModalWindow();
//       break;
//     default:
//       alert("Эти клавиши не задействованы в работе галереи, используйте, пожалуйста 🠔 и 🠖 для переключения изображений");
//   }
// }

// // добавление класс для открития модального окна
// export function onOpenModalClick(event) {
//   window.addEventListener('keydown', changeImagePressRigthLeftKeys)
//   window.addEventListener('keydown',onEscKeyPress)
//   event.preventDefault();
//   refs.modalWindow.classList.add('is-open')
// }

// // закрытие модального окна и очищение src 
// export function onCloseModalWindow() {
//    window.removeEventListener('keydown', changeImagePressRigthLeftKeys)
//   window.removeEventListener('keydown',onEscKeyPress)
//   refs.modalWindow.classList.remove('is-open')
//   refs.imageOnContainer.src = '';
//   refs.imageOnContainer.alt = '';
// }

// // закрытие модалки по клику на оверлей 
// export function onBackdropClick(event) {
//   if (event.currentTarget === event.target)
//     onCloseModalWindow()
// }
// // закрытие модалки по клавише Esc
// export function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//      onCloseModalWindow()
//   }
// }