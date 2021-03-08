let popup = document.querySelector('.popup');
let activePopup = document.querySelector('.profile__edit');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupName = document.querySelector('.popup__input_type_name');
let popupStatus = document.querySelector('.popup__input_type_status');
let profileEdit = document.querySelector('.popup__form');
let disablePopup = document.querySelector('.popup__close');
let popupAdd = document.querySelector('.popup_add');
let profileAdd = document.querySelector('.profile__add');
let popupAddClose = document.querySelector('.popup__close_add');
let popupAddSubmit = document.querySelector('.popup__form_add');
let popupAddTitle = document.querySelector('.popup__input_type_title');
let popupAddImage = document.querySelector('.popup__input_type_image');
let elements = document.querySelector('.elements');
let popupImage = document.querySelector('.popup_image');
let popupImg = document.querySelector('.popup__image');
let popupImgClose = document.querySelector('.popup__close_img');
let popupImgName = document.querySelector('.popup__name');
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

function popupAct() {
  popup.classList.add('popup_openned'); 
  popupStatus.value = profileStatus.textContent;
  popupName.value = profileName.textContent;
}
function popupDis() {
  popup.classList.remove('popup_openned');
}
function profileData(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
}
for (let i = 0; i < 6; i++) {
  elementsAddCards(initialCards[i].name, initialCards[i].link);
}
function popupAddAct() {
  popupAdd.classList.add('popup_openned');
  popupAddTitle.value = null;
  popupAddImage.value = null;
}
function popupAddDis() {
  popupAdd.classList.remove('popup_openned');
}





function popupAddSub(evt) {
  evt.preventDefault();
}
function elementsAddCards(titleValue, imageValue) {
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
    console.log(blockName);
    console.log(blockImg);
    popupImgName.textContent = blockName;
    popupImg.setAttribute('src', blockImg);
    
  });
  
  elementsBlockCopy.querySelector('.elements__name').textContent = titleValue;
  elementsBlockCopy.querySelector('.elements__image').setAttribute('src', imageValue);
  elements.prepend(elementsBlockCopy);
  
}
function popupImgDis() {
  popupImage.classList.remove('popup_openned');
}
disablePopup.addEventListener('click', popupDis);
activePopup.addEventListener('click', popupAct);
profileEdit.addEventListener('submit', profileData);
profileEdit.addEventListener('submit', popupDis);
profileAdd.addEventListener('click', popupAddAct);
popupAddClose.addEventListener('click', popupAddDis);
popupAddSubmit.addEventListener('submit', popupAddSub);
popupAddSubmit.addEventListener('submit', popupAddDis);
popupAddSubmit.addEventListener('submit', function() {
  const title = document.querySelector('.popup__input_type_title');
  const url = document.querySelector('.popup__input_type_image');
  elementsAddCards(title.value, url.value);
});
popupImgClose.addEventListener('click', popupImgDis);



