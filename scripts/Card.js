// Functions that are repeated here for proper functioning of Card, will be removed in future sprints

function togglePopup(modal){  
    if(!modal.classList.contains('popup_opened')) { 
        modal.addEventListener('click', closeModalOutside); 
        window.addEventListener('keydown', escCloseModal); 
    } 
    else { 
        modal.removeEventListener('click', closeModalOutside); 
        window.removeEventListener('keydown', escCloseModal); 
    }  
    modal.classList.toggle('popup_opened');    
}

function closeModalOutside(event) { 
    togglePopup(event.target);
  } 
   
  
  function escCloseModal(event) { 
    if (event.key === 'Escape') { 
      const openModal = document.querySelector('.popup_opened'); 
      togglePopup(openModal); 
    } 
  }

class Card{
    constructor({name, link}, cardTemplateSelector){
        this._text = name;
        this._link = link;
        this._cardTemplateSelector = cardTemplateSelector;
    }

    renderNewCard(){        
        const cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.element');
        const imageModalWindow = document.querySelector('.popup_type_image');

        const cardElement = cardTemplate.cloneNode(true);
    
        const cardImage = cardElement.querySelector('.element__image');
        const cardDeleteButton = cardElement.querySelector('.element__delete-button');
        const cardText = cardElement.querySelector('.element__text');
        const cardLikeButton = cardElement.querySelector('.element__like-button');

        const popupImage = imageModalWindow.querySelector('.popup__image');
        const popupImageTitle = imageModalWindow.querySelector('.popup__image-title');
            
        cardText.textContent = this._text;
        cardImage.style.backgroundImage = `url(${this._link})`;  
    
        cardLikeButton.addEventListener('click', ()=>{
            cardLikeButton.classList.toggle('element__like-button_dark');
        });
    
        cardDeleteButton.addEventListener('click', ()=>{
           cardElement.remove();
        });
        
        cardImage.addEventListener('click', ()=>{
            popupImage.src = this._link;
            popupImageTitle.textContent = this._text;
    
            togglePopup(imageModalWindow);
        });
    
        return(cardElement);    
      }

}

export default Card;