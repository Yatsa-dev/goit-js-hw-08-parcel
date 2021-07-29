export default function onCloseModalWindow() {
   window.removeEventListener('keydown', changeImagePressRigthLeftKeys)
  window.removeEventListener('keydown',onEscKeyPress)
  refs.modalWindow.classList.remove('is-open')
  refs.imageOnContainer.src = '';
  refs.imageOnContainer.alt = '';
}