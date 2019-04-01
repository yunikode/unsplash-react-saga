import UNSPLASH_KEY from './keys';
const URL = `https://api.unsplash.com/photos/?client_id=${UNSPLASH_KEY}`;

const fetchImages = async page => {
  const response = await fetch(`${URL}&per_page=3&pahe=${page}`);
  const data = await response.json();
  if (response.status >= 400) {
    throw new Error(data.errors);
  }
  return data;
};

export { fetchImages };
