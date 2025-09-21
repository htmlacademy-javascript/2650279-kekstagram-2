
import { isEscapeKey } from './utils';

const bigPicture = document.querySelector('.big-picture');
const imageElement = bigPicture.querySelector('.big-picture__img img');
const pictureCaption = bigPicture.querySelector('.social__caption');

const likesCount = bigPicture.querySelector('.likes-count');
// const commentsCount = bigPicture.querySelector('.social__comment-shown-count');

const closeModalButton = bigPicture.querySelector('.big-picture__cancel');

const loadMoreCommentsButton = bigPicture.querySelector('.social__comments-loader'); // eslint-disable-line no-unused-vars
const commentsList = bigPicture.querySelector('.social__comments'); // eslint-disable-line no-unused-vars

const commentsCountContainer = bigPicture.querySelector('.social__comment-count');
const totalCommentsCount = commentsCountContainer.querySelector('.social__comment-total-count');
const shownCommentsCount = commentsCountContainer.querySelector('.social__comment-shown-count'); // eslint-disable-line no-unused-vars

const hideCommentsCountComponent = () => commentsCountContainer.classList.add('hidden');
const displayCommentsCountComponent = () => commentsCountContainer.classList.remove('hidden'); // eslint-disable-line no-unused-vars

const bodyElement = document.body;

const fillTemplate = ({likes, comments, url, description}) => {
  imageElement.src = url;
  imageElement.alt = description;

  pictureCaption.textContent = description;
  likesCount.textContent = likes;
  totalCommentsCount.textContent = comments.length;
};

const clearTemplate = () => {
  imageElement.src = '#';
  imageElement.alt = '#';

  pictureCaption.textContent = '';
  likesCount.textContent = '';
  totalCommentsCount.textContent = '';
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

  clearTemplate();

  document.removeEventListener('keydown', documentKeydownHandler);
}

function openPictureModal(data) {
  bodyElement.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  fillTemplate(data);
  hideCommentsCountComponent();

  document.addEventListener('keydown', documentKeydownHandler);
}

closeModalButton.addEventListener('click', () => {
  closePictureModal();
});

export {openPictureModal};
