import { jobInput } from "../utils/constants";

export default class UserInfo {
    constructor({name, job, avatar}){
        this._name = document.querySelector(name);
        this._job = document.querySelector(job);
        this._avatar = document.querySelector(avatar);
    }

    getUserInfo(){
        return this.userInfo = [this._name.textContent, this._job.textContent, this._avatar.src];
    }

    setUserInfo(name, job, avatar) {
        //this._userInfo = {nameSelector, jobSelector, avatar};
         //if(avatar){
            this._name.textContent = name;
            this._job.textContent = job;
            this._avatar.src = avatar;
         //} else {
         //   this._nameSelector.textContent = nameSelector;
        //    this._jobSelector.textContent = jobSelector;
        // }
    }
} 