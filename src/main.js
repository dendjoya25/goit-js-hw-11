import { createGalleryCardTamplate } from './js/render-functions';
import { fetchPhotos } from './js/pixabay-api';

import iziToast from 'izitoast';

const formEl = document.querySelector('.js-page-form');
const galleryEl = document.querySelector('.js-gallery');

const onFormElSubmit = event => {
  event.preventDefault();

  const searchedValue = formEl.elements.user_query.value;

  fetchPhotos(searchedValue)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        galleryEl.innerHTML = '';
        formEl.reset();
        return;
      }

      const galleryCardsTamplate = data.hits
        .map(imgDetails => createGalleryCardTamplate(imgDetails))
        .join('');

      galleryEl.innerHTML = galleryCardsTamplate;
    })
    .catch(err => {
      console.log(err);
    });
};

formEl.addEventListener('submit', onFormElSubmit);
