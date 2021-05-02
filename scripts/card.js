export {Card};
const main = document.querySelector('.page');
function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_openned');
    closePopup(openedPopup);
  }
}
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_image');
function openPopup(popup) {
  popup.classList.add('popup_openned'); 
  main.addEventListener('keydown', closeByEscape);
  
}
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
const popupImgName = document.querySelector('.popup__name');
const popupImg = document.querySelector('.popup__image');

class Card {
  constructor(titleValue, imageValue, template) {
    this._title = titleValue;
    this._value = imageValue;
    this._template = template;
  }
  _getTemplate() {
    const copyTemplate = this._template.querySelector('.elements__block').cloneNode(true);
    this._createCard(copyTemplate)
    this._toggleLike(copyTemplate)
    this._deleteCard(copyTemplate)
    this._openImagePopup(copyTemplate)
    return copyTemplate;
  }
  _toggleLike(card) {
    card.querySelector('.elements__like').addEventListener('click', function(evt) {
      evt.target.classList.toggle('elements__like_active')
    })
    return card
  }
  _deleteCard(card) {
    card.querySelector('.elements__del').addEventListener('click', function() {
      card.closest('.elements__block').remove();
    })
  }
  _openImagePopup(card) {
    this._createCard
    card.querySelector('.elements__img').addEventListener('click', function(evt) {
      const cardImage = evt.target.getAttribute('src');
      const cardName = card.querySelector('.elements__name').textContent;
      popupImgName.textContent = cardName;
      popupImg.setAttribute('src', cardImage);
      popupImg.setAttribute('alt', cardName);
      openPopup(popupImage)
    })
  }
  _createCard(card) {
    card.querySelector('.elements__name').textContent = this._title;
    const image = card.querySelector('.elements__image')
    const images = (img) => {
      img.setAttribute('src', this._value);
      img.setAttribute('alt', this._title);
    }
    images(image)
    return card;
  }
  addCard() {
    return elements.prepend(this._getTemplate())
  }
};
const elementsBlock = document.querySelector('#elements__block').content;
initialCards.forEach(function(item) {
  item = new Card(item.name, item.link, elementsBlock)
  item.addCard()
})
