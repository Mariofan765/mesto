let popup = document.querySelector('.popup');
let activePopup = document.querySelector('.profile__edit');
let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupName = document.querySelector('.popup__input_name');
let popupStatus = document.querySelector('.popup__input_status');
let profileEdit = document.querySelector('.popup__form');
let disablePopup = document.querySelector('.popup__close');

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

disablePopup.addEventListener('click', popupDis);
activePopup.addEventListener('click', popupAct);
profileEdit.addEventListener('submit', popupDis);
profileEdit.addEventListener('submit', profileData);
