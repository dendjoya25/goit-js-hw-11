const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = searchedQuery => {
  const urlParams = new URLSearchParams({
    key: '45497823-3ee11a5b90ff874601dfe7178',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 18,
  });

  return fetch(`${BASE_URL}?${urlParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
