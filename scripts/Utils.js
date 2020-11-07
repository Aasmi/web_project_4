// Functions that are needed for Popup modules of Card.js and index.js

export function togglePopup(modal){  
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

export function closeModalOutside(event) { 
    togglePopup(event.target);
  } 
   
  
export function escCloseModal(event) { 
    if (event.key === 'Escape') { 
      const openModal = document.querySelector('.popup_opened'); 
      togglePopup(openModal); 
    } 
  }

  
