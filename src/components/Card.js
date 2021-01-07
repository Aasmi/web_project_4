import {togglePopup, escCloseModal} from './Utils.js';

class Card{
    constructor({name, link, handleCardClick}, cardTemplateSelector){
        this._text = name;
        this._link = link;
        this._handleCardClick = handleCardClick;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    _cardLikeButtonListener(evt){
        evt.target.classList.toggle('element__like-button_dark');
    }

    _cardDeleteButtonListener(evt){
        evt.target.parentNode.remove();
    }

    _setcardTemplateSelector(){
        const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.element');
        return cardTemplate;
    }

    _cardImageClickListener(){
        const imageModalWindow = document.querySelector('.popup_type_image');
        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');

        popupImage.src = this._link;
        popupImageTitle.textContent = this._text;
        popupImage.alt = this._text;
        togglePopup(imageModalWindow);
    }

    renderNewCard(){        
        const cardTemplateNewCard = this._setcardTemplateSelector();
        const cardElement = cardTemplateNewCard.cloneNode(true);
    
        const cardImage = cardElement.querySelector('.element__image');
        const cardDeleteButton = cardElement.querySelector('.element__delete-button');
        const cardText = cardElement.querySelector('.element__text');
        const cardLikeButton = cardElement.querySelector('.element__like-button');
      
        cardText.textContent = this._text;
        cardImage.style.backgroundImage = `url(${this._link})`;
        cardImage.style.alt = this._text;
        
        cardLikeButton.addEventListener('click', this._cardLikeButtonListener.bind(this));
        cardDeleteButton.addEventListener('click', this._cardDeleteButtonListener);        
        cardImage.addEventListener('click', this._cardImageClickListener.bind(this));
    
        return(cardElement);    
      }

}

export default Card;




