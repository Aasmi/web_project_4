import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._card = popupSelector;
    this._popupImage = document.querySelector('.popup__image');
    this._popupImageTitle = document.querySelector('.popup__image-title');
  }

  open({name, link}) {
    this._popupImage.src = link;
    this._popupImage.alt = name;
    this._popupImageTitle.textContent = name;
    super.open();
  }
}