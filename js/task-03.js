const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('.gallery');
galleryRef.style.display = "flex";
galleryRef.style.flexWrap = "wrap";
galleryRef.style.listStyle = "none";

const galleryMarkup = images
.map(({url, alt}) => `<li  class="gallery__item"><img src='${url}' alt = '${alt}' width = 200></li>`)
.join('');
// // .map(({ url, alt }) => `<li  class="gallery__item"><img src='${url}l' alt = '${alt}' width = 200></li>`)
// // .join('');
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

// const listEl = document.querySelector('.gallery');
// listEl.style.listStyle = "none";
// listEl.style.display = "flex";
// listEl.style.flexWrap = "wrap-reverse";
// listEl.style.marginBottom = "25px";

// const listMarkup = images
//   .map(image => `<li class="gallery_item"><img src='${ image.url }' alt='${ image.alt }' width = 320></li>`)
//   .join('');
// listEl.insertAdjacentHTML('afterbegin', listMarkup);