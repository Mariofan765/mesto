import {config, FormValidator} from './FormValidator.js'
import { Card } from "./card.js";
export {closePopup, closeByEscape, elements, openPopup};
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
const popupImgClose = document.querySelector('.popup__close_img');
const title = document.querySelector('.popup__input_type_title');
const url = document.querySelector('.popup__input_type_image');
const closePopupEdit = () => closePopup(popupProfile);
const closePopupAdd = () => closePopup(popupAdd);
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
  main.removeEventListener('keydown', closeByEscape); 
}


function editProfileData() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
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
  const newCard = new Card(title.value, url.value, elements);
  newCard.getTemplate()
  const submit = popupAdd.querySelector('.popup__submit');
  submit.toggleButtonState;
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

const enableValidEdit = new FormValidator(config, config.formSelector);
const enableValidAdd = new FormValidator(config, config.formSelector);

enableValidAdd.enableValidations();
enableValidEdit.enableValidations()












