import {closePopup, closeByEscape, openPopup} from './main.js';
import {initialCards} from './array.js'
export {Card};


const main = document.querySelector('.page');

const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup_image');


const popupImgName = document.querySelector('.popup__name');
const popupImg = document.querySelector('.popup__image');

class Card {
  constructor(titleValue, imageValue, template) {
    this._title = titleValue;
    this._value = imageValue;
    this._template = template;
  }
  getTemplate() {
    const copyTemplate = this._template.querySelector('.elements__block').cloneNode(true);
    this._createCard(copyTemplate)
    this._toggleLike(copyTemplate)
    this._deleteCard(copyTemplate)
    this._openImagePopup(copyTemplate)
    return elements.prepend(copyTemplate);
  }
  _toggleLike(card) {
    card.querySelector('.elements__like').addEventListener('click', toggleLike)
    function toggleLike(evt) {
      evt.target.classList.toggle('elements__like_active')
    }
    return card
  }
  _deleteCard(card) {
    card.querySelector('.elements__del').addEventListener('click', findBlock)
    function findBlock() {
      card.closest('.elements__block').remove();
    }
  }
  _openImagePopup(card) {
    card.querySelector('.elements__img').addEventListener('click', openImg)
    function openImg(evt) {
      const cardImage = evt.target.getAttribute('src');
      const cardName = card.querySelector('.elements__name').textContent;
      popupImgName.textContent = cardName;
      popupImg.setAttribute('src', cardImage);
      popupImg.setAttribute('alt', cardName);
      openPopup(popupImage)
    }
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
};
const elementsBlock = document.querySelector('#elements__block').content;
initialCards.forEach(function(item) {
  item = new Card(item.name, item.link, elementsBlock)
  item.getTemplate()
})
