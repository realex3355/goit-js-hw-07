import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPlace = document.querySelector(".gallery");

const galleryItemsList = galleryItems
  .map(
    ({ preview, original, description }) =>
`<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
  )
  .join("");

  galleryPlace.insertAdjacentHTML("afterbegin", galleryItemsList);


console.log(galleryItems);
