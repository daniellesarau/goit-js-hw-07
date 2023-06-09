import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryElement = document.querySelector(".gallery");

const makeItems = ({ preview, original, description }) =>
 `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
const markup = galleryItems.map((element) => makeItems(element)).join("");

galleryElement.insertAdjacentHTML("afterbegin", markup);

galleryElement.addEventListener("click", (event) => {
 event.preventDefault();

 if (event.target.nodeName !== "IMG") {
  return;
 }

 const modalPicture = event.target.dataset.source;

 const instance = basicLightbox.create(`
    <img src="${modalPicture}" width="800" height="600">`);
 instance.show();
});
console.log(galleryItems);
