
import { isEscapeKey } from './utils';
import { COMMENTS_COUNT_PER_STEP } from './const';
import { clearComments, loadMoreButtonClickHandler, renderComments, isDisplayLoadMoreButton, displayLoadMorebutton } from './comments.js';

const bigPicture = document.querySelector('.big-picture');
const imageElement = bigPicture.querySelector('.big-picture__img img');
const pictureCaption = bigPicture.querySelector('.social__caption');
const likesCount = bigPicture.querySelector('.likes-count');
const closeModalButton = bigPicture.querySelector('.big-picture__cancel');

const bodyElement = document.body;

const loadMoreButton = bigPicture.querySelector('.social__comments-loader'); // eslint-disable-line no-unused-vars

const fillTemplate = ({likes, comments, url, description}) => {

  imageElement.src = url;
  imageElement.alt = description;

  pictureCaption.textContent = description;
  likesCount.textContent = likes;

  renderComments(0, Math.min(comments.length, COMMENTS_COUNT_PER_STEP), comments);

  if (isDisplayLoadMoreButton()) {
    displayLoadMorebutton();
  }

};

const documentKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();

    closePictureModal();
  }
};

function closePictureModal() {
  bodyElement.classList.remove('modal-open');
  bigPicture.classList.add('hidden');

  clearComments();

  document.removeEventListener('keydown', documentKeydownHandler);
  loadMoreButton.removeEventListener('click', loadMoreButtonClickHandler);
}

function openPictureModal(data) {
  bodyElement.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  fillTemplate(data);

  document.addEventListener('keydown', documentKeydownHandler);
  loadMoreButton.addEventListener('click', loadMoreButtonClickHandler);
}

closeModalButton.addEventListener('click', () => {
  closePictureModal();
});

export {openPictureModal};
