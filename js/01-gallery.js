import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryPlace = document.querySelector(".gallery");

const galleryItemsList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

let instance;
galleryPlace.insertAdjacentHTML("afterbegin", galleryItemsList);
galleryPlace.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const largeImSrc = event.target.dataset.source;
    
  const instance = basicLightbox.create(`
    <img src="${largeImSrc}" width="800" height="600">
`);
      
  instance.show();
  //  if (escapePush) {
  //    instance.close();
  //    console.log(escapePush);
  // };
  
//  onClose: (instance) => {
//   escapePush = false;
//  };

});
 
//let escapePush = false;
//document.addEventListener('keydown', event => {
  //if (event.code === 'Escape') {
   // escapePush = true;
   
    //  };
//});


console.log(galleryItems);
