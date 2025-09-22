import { getRandomArrayElement, getRandomInteger } from './utils';

const MAX_PHOTOS_COUNT = 10;

const NAMES = ['Артём', 'Степан', 'Аким', 'Тимур', 'Олег', 'Мария', 'Ксения', 'Павел', 'Ирина', 'Дмитрий'];

const SURNAMES = ['Иванов','Петров','Сидоров','Кузнецов','Смирнов','Попов','Соколов','Лебедев','Козлов','Новиков'];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Вдохновляющий закат.', 'Улыбка лучшего друга.', 'Безмятежная природа.', 'Летний вечер.', 'День на пляже.',
  'Волшебство в движении.', 'Городские огни.', 'Моменты счастья.', 'Взгляд в будущее.', 'Семейное тепло.',
  'Сила природы.', 'Тёплый луч солнца.', 'Прыжок в неизвестность.', 'Мир в деталях.', 'Полет фантазии.',
  'Свежесть утра.', 'Без границ.', 'Солнечные выходные.', 'Шум прибоя.', 'Новая история.',
  'Мелодия лета.', 'Воспоминания детства.', 'Спокойствие моря.', 'По дорогам мира.', 'Тишина рассвета.'
];

function createComment(id) {
  return {
    id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
    message:
      Math.random() > 0.5
        ? `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`
        : getRandomArrayElement(MESSAGES),
  };
}

function generateComments() {
  const MAX_COMMENTS_COUNT = getRandomInteger(0, 30);

  return Array.from({ length: MAX_COMMENTS_COUNT }, (_, id) => createComment(id));
}

function createPhoto(id) {
  return {
    id,
    url: `photos/${getRandomInteger(1, 25)}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: generateComments()
  };
}

function generatePhotos() {
  return Array.from({ length: MAX_PHOTOS_COUNT }, (_, id) => createPhoto(id));
}

// empty commit

export {generatePhotos};
