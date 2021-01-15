export default class UserInfo {
    constructor({name, aboutMe}){
        this._name = document.querySelector(name);
        this._aboutMe = document.querySelector(aboutMe);
        console.log("These are the userInfo values at the time of creation");
        console.log(name);
        console.log(aboutMe);
    }

    getUserInfo(){
        console.log("Get User info fuction is invoked");
        console.log(this._name.textContent+" "+ this._aboutMe.textContent);
        return [this._name.textContent, this._aboutMe.textContent];
    }

    setUserInfo(name, aboutMe) {
        console.log("Set user info function is invoked");
        console.log(name+" "+aboutMe);
        this._name.textContent = name;
        this._aboutMe.textContent = aboutMe;
    }
} 