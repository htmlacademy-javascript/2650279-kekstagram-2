
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picutresContainer = document.querySelector('.pictures');

const picturesListFragment = document.createDocumentFragment();

const createPicture = ({id, likes, comments, url, description}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  const pictureImage = pictureElement.querySelector('.picture__img');

  pictureImage.src = url;
  pictureImage.alt = description;

  pictureElement.dataset.pictureId = id;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

const renderPictures = (photos) => {
  photos.forEach((photo) => {
    const picture = createPicture(photo);

    picturesListFragment.append(picture);
  });

  picutresContainer.append(picturesListFragment);
};


// const renderPictures = () => picutresContainer.append(picturesListFragment);

export {renderPictures};
