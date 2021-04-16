const main = document.querySelector('.page');
const popupProfile = document.querySelector('.popup_profile');
const activePopup = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const popupName = document.querySelector('.popup__input_type_name');
const popupStatus = document.querySelector('.popup__input_type_status');
const profileEdit = document.querySelector('.popup__form');
const disablePopup = document.querySelector('.popup__close_profile');
const popupAdd = document.querySelector('.popup_add');
const popupCont = popupAdd.querySelector('.popup__container');
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
const title = document.querySelector('.popup__input_type_title');
const url = document.querySelector('.popup__input_type_image');
const closePopupEdit = () => closePopup(popupProfile);
const closePopupAdd = () => closePopup(popupAdd);
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

function openPopup(popup) {
  popup.classList.add('popup_openned'); 
  main.addEventListener('keydown', closeByEscape);
  
}
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_openned');
    closePopup(openedPopup);
  }
}
function activePopupEdit() {
  popupStatus.value = profileStatus.textContent;
  popupName.value = profileName.textContent;
  openPopup(popupProfile);
}
function activePopupAdd() {
  popupAddTitle.value = '';
  popupAddImage.value = '';
  openPopup(popupAdd);
}

function closePopup(popup) {
  popup.classList.remove('popup_openned');
  popup.removeEventListener('keydown', closeByEscape); 
}


function editProfileData() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
}
initialCards.forEach(function(item) {
  addCard(item.name, item.link, elements);
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
    openPopup(popupImage);
    popupImgName.textContent = blockName;
    popupImg.setAttribute('src', blockImg);
    popupImg.setAttribute('alt', blockName);
  });
  elementsBlockCopy.querySelector('.elements__name').textContent = titleValue;
  const elementImage = elementsBlockCopy.querySelector('.elements__image');
  elementImage.setAttribute('src', imageValue);
  elementImage.setAttribute('alt', titleValue);
  return elementsBlockCopy;
}


function addCard(titleValue, imageValue, container) {
  const element = createCards(titleValue, imageValue);
  container.prepend(element);
  
}
activePopup.addEventListener('click', activePopupEdit);
profileAdd.addEventListener('click', activePopupAdd);
disablePopup.addEventListener('click', closePopupEdit);
profileEdit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  editProfileData();
  closePopupEdit();
  
});
popupAddClose.addEventListener('click', closePopupAdd);
popupAddSubmit.addEventListener('submit', function(evt) {
  evt.preventDefault();
  addCard(title.value, url.value, elements);
  const submit = popupAdd.querySelector('.popup__submit');
  submit.classList.add('popup__submit_inactive');
  closePopupAdd();
});
popupImgClose.addEventListener('click', () => closePopup(popupImage));

popupProfile.addEventListener('mousedown', function(evt) { 
  closePopup(evt.target);
}); 
popupAdd.addEventListener('mousedown', function(evt) { 
  closePopup(evt.target);
}); 
popupImage.addEventListener('mousedown', function(evt) { 
  closePopup(evt.target);
}); 



