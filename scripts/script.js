const popup = document.querySelector('.popup');
const activePopup = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupName = document.querySelector('.popup__input_type_name');
const popupStatus = document.querySelector('.popup__input_type_status');
const profileEdit = document.querySelector('.popup__form');
const disablePopup = document.querySelector('.popup__close');
const popupAdd = document.querySelector('.popup_add');
const profileAdd = document.querySelector('.profile__add');
const popupAddClose = document.querySelector('.popup__close_add');
const popupAddSubmit = document.querySelector('.popup__form_add');
const popupAddTitle = document.querySelector('.popup__input_type_title');
const popupAddImage = document.querySelector('.popup__input_type_image');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_image');
const popupImg = document.querySelector('.popup__image');
const popupImgClose = document.querySelector('.popup__close_img');
const popupImgName = document.querySelector('.popup__name');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function actPopup(popup) {
  popup.classList.add('popup_openned'); 
}
function activePopupEdit() {
  popupStatus.value = profileStatus.textContent;
  popupName.value = profileName.textContent;
  actPopup(popup);
}
function activePopupAdd() {
  popupAddTitle.value = '';
  popupAddImage.value = '';
  actPopup(popupAdd);
}

function disPopup(popup) {
  popup.classList.remove('popup_openned'); 
}
function disablePopupEdit() {
  disPopup(popup);
}
function disablePopupAdd() {
  disPopup(popupAdd);
}

function disablePopupImg() {
  disPopup(popupImage);
}

function editProfileData() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
}
initialCards.forEach(function(item) {
  const cardsContainer = document.querySelector('.elements');
  createCard(item.name, item.link, cardsContainer);
});




function createCards(titleValue, imageValue) {
  const elementsBlock = document.querySelector('#elements__block').content;
  const elementsBlockCopy = elementsBlock.querySelector('.elements__block').cloneNode(true);
  elementsBlockCopy.querySelector('.elements__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like_active');
  });
  elementsBlockCopy.querySelector('.elements__del').addEventListener('click', function(evt) {
    const blockDel = elementsBlockCopy.closest('.elements__block');
    blockDel.remove();
  });
  elementsBlockCopy.querySelector('.elements__img').addEventListener('click', function(evt) {
    const blockImg = evt.target.getAttribute('src');
    const blockName = elementsBlockCopy.querySelector('.elements__name').textContent;
    popupImage.classList.add('popup_openned');
    popupImgName.textContent = blockName;
    popupImg.setAttribute('src', blockImg);
    popupImg.setAttribute('alt', blockName);
  });
  elementsBlockCopy.querySelector('.elements__name').textContent = titleValue;
  elementsBlockCopy.querySelector('.elements__image').setAttribute('src', imageValue);
  elementsBlockCopy.querySelector('.elements__image').setAttribute('alt', titleValue);
  return elementsBlockCopy;
}
function createCard(titleValue, imageValue, container) {
  const element = createCards(titleValue, imageValue);
  container.prepend(element);
  
}

activePopup.addEventListener('click', activePopupEdit);
profileAdd.addEventListener('click', activePopupAdd);

disablePopup.addEventListener('click', disablePopupEdit);
profileEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  editProfileData();
  disablePopupEdit();
  
});
popupAddClose.addEventListener('click', disablePopupAdd);
popupAddSubmit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const title = document.querySelector('.popup__input_type_title');
  const url = document.querySelector('.popup__input_type_image');
  const cardsContainer = document.querySelector('.elements');
  createCard(title.value, url.value, cardsContainer);
  disablePopupAdd();
});
popupImgClose.addEventListener('click', disablePopupImg);


