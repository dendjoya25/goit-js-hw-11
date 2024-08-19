import {
  createGalleryCardTemplate,
  initializeLightbox,
} from './js/render-functions';

import { fetchPhotos } from './js/pixabay-api';
import iziToast from 'izitoast';

const formEl = document.querySelector('.js-page-form');
const galleryEl = document.querySelector('.js-gallery');
const loaderEl = document.querySelector('.js-loader');

const showLoader = () => {
  loaderEl.classList.remove('is-hidden');
};

const hideLoader = () => {
  loaderEl.classList.add('is-hidden');
};

const onFormElSubmit = event => {
  event.preventDefault();

  const searchedValue = formEl.elements.user_query.value;

  showLoader();

  fetchPhotos(searchedValue)
    .then(data => {
      if (data.hits && data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEl.innerHTML = '';
        formEl.reset();
        return;
      }

      const galleryCardsTemplate = data.hits
        .map(imgDetails => createGalleryCardTemplate(imgDetails))
        .join('');

      galleryEl.innerHTML = galleryCardsTemplate;

      initializeLightbox();
    })
    .catch(err => {
      console.log(err);
      iziToast.error({
        message: 'Something went wrong. Please try again!',
        position: 'topRight',
      });
    })
    .finally(() => {
      hideLoader();
    });
};

formEl.addEventListener('submit', onFormElSubmit);
