import { COMMENTS_COUNT_PER_STEP } from './const';

const loadMoreButton = document.querySelector('.social__comments-loader');
const commentsCountContainer = document.querySelector('.social__comment-count');
const totalCommentsCount = commentsCountContainer.querySelector('.social__comment-total-count');
const shownCommentsCount = commentsCountContainer.querySelector('.social__comment-shown-count');
const commentTemplate = document.querySelector('#user-comment').content.querySelector('.social__comment');
const commentsList = document.querySelector('.social__comments');


let renderedCommentsCount = COMMENTS_COUNT_PER_STEP;
let userComments = [];

// const displayCommentsCountComponent = () => commentsCountContainer.classList.remove('hidden');
// const hideCommentsCountComponent = () => commentsCountContainer.classList.add('hidden');
// const isHideCommentsCountComponent = () => userComments.length === 0;

const displayLoadMorebutton = () => loadMoreButton.classList.remove('hidden');
const hideLoadMoreButton = () => loadMoreButton.classList.add('hidden');

const isDisplayLoadMoreButton = () => userComments.length > 5;

const createComment = ({avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);

  const userImage = commentElement.querySelector('img');
  userImage.src = avatar;
  userImage.alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const updateCommentsCount = () => {
  totalCommentsCount.textContent = userComments.length;
  shownCommentsCount.textContent = Math.min(userComments.length, renderedCommentsCount);
};

function renderComments(from, to, comments) {
  userComments = comments.slice();

  // if (isHideCommentsCountComponent()) {
  //   hideCommentsCountComponent();
  //   return;
  // }

  updateCommentsCount();

  const commentsListFragment = document.createDocumentFragment();

  userComments
    .slice(from, to)
    .forEach((comment) => {
      const commentItem = createComment(comment);

      commentsListFragment.append(commentItem);
    });

  commentsList.append(commentsListFragment);
}

const clearCommentsList = () => {
  commentsList.innerHTML = '';
};

function loadMoreButtonClickHandler() {
  renderComments(renderedCommentsCount, renderedCommentsCount + COMMENTS_COUNT_PER_STEP, userComments);
  renderedCommentsCount += COMMENTS_COUNT_PER_STEP;
  updateCommentsCount();

  if (renderedCommentsCount >= userComments.length) {
    renderedCommentsCount = COMMENTS_COUNT_PER_STEP;
    hideLoadMoreButton();
  }
}

function clearComments() {
  clearCommentsList();
  hideLoadMoreButton();
}

export {clearComments, loadMoreButtonClickHandler, renderComments, isDisplayLoadMoreButton, displayLoadMorebutton};
