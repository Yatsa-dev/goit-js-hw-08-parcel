export default function onChangeImageByKey(gallery) {
  gallery.forEach((num,idx) => {
    if (num.original === refs.imageOnContainer.src) {
      activeIndex = idx; 
    }
  })
}