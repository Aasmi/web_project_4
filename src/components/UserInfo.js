export default class UserInfo { 
    constructor(userName, userAboutme) { 
      this._name = userName;
      this._aboutme = userAboutme;
    } 
   
    getUserInfo() { 
      return {name: this._name.textContent, aboutme: this._aboutme.textContent}; 
    } 
   
    setUserInfo(name, aboutme) { 
      this._name.textContent = name; 
      this._aboutme.textContent = aboutme;
    }  
  } 