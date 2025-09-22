import { renderPictures } from './pictures';
import { openPictureModal } from './big-picture.js';
import { generatePhotos } from './data';

const photos = generatePhotos();

renderPictures(photos);

document.addEventListener('click', (evt) => {
  const previewPicture = evt.target.closest('.picture');

  if (previewPicture) {
    const currentId = Number(previewPicture.dataset.pictureId);
    const photoData = photos.find((item) => item.id === currentId);

    openPictureModal(photoData);
  }
});
