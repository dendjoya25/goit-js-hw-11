import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const createGalleryCardTamplate = imginfo => {
  return ` <li class="gallery-item">
  <a class="gallery-link" href="${imginfo.webformatURL}">
    <img
      class="gallery-image"
      src="${imginfo.webformatURL}"
      alt="${imginfo.tags}"

    />
  </a>
</li>`;
};
