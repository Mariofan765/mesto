let popup = document.querySelector('.popup');
let activePopup = document.querySelector('.profile__edit');

function popupAct() {
  popup.classList.add('popup_openned'); 
  popupStatus.value = profileStatus.textContent;
  popupName.value = profileName.textContent;
}
activePopup.addEventListener('click', popupAct);
 

let disablePopup = document.querySelector('.popup__close');

function popupDis() {
  popup.classList.remove('popup_openned');
}
disablePopup.addEventListener('click', popupDis);


let profileName = document.querySelector('.profile__name');
let profileStatus = document.querySelector('.profile__status');
let popupName = document.querySelector('.popup__name');
let popupStatus = document.querySelector('.popup__status');
let profileEdit = document.querySelector('.popup__submit');

function profileData() {
  profileName.textContent = popupName.value;
  profileStatus.textContent = popupStatus.value;
}
profileEdit.addEventListener('click', popupDis);
profileEdit.addEventListener('click', profileData);
