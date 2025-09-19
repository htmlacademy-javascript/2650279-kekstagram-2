import { generatePhotos } from './data';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picutresContainer = document.querySelector('.pictures');

const picturesListFragment = document.createDocumentFragment();

const photos = generatePhotos();

const createPicture = ({likes, comments, url, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const pictureImage = pictureElement.querySelector('.picture__img');

  pictureImage.src = url;
  pictureImage.alt = description;

  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

photos.forEach((photo) => {
  const picture = createPicture(photo);

  picturesListFragment.append(picture);
});

const renderPictures = () => picutresContainer.append(picturesListFragment);

export {renderPictures};
