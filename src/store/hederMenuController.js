import { makeAutoObservable } from "mobx";


class HederMenu{
    isOpenMenu = false;

    constructor(){
        makeAutoObservable(this);
    }

    updateStatusOpenedMenu(isOpen){
        this.isOpenMenu = isOpen;
        // console.log(`Изменено состояние на ${isOpen}`);
    }

}

export default new HederMenu();