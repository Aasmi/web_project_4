export default class UserInfo {
    constructor({name, aboutMe}){
        this._name = document.querySelector(name);
        this._aboutMe = document.querySelector(aboutMe);
    }

    getUserInfo(){
        return [this._name.textContent, this._aboutMe.textContent];
    }

    setUserInfo(name, aboutMe) {
        this._name.textContent = name;
        this._aboutMe.textContent = aboutMe;
    }
} 