class MobileMenu {
    constructor() { //This function runs inmediately when a new object is created
        this.menuIcon = document.querySelector(".site-header__menu-icon");
        this.menuContent =  document.querySelector(".site-header__menu-content");
        this.siteHeader = document.querySelector(".site-header");
        this.events();
    }
    //this points to the object
    events(){ //method | List all the events that we want to watch for
        this.menuIcon.addEventListener("click",()=> this.toggleTheMenu()) //arrow function
    }

    toggleTheMenu(){//method
       this.menuContent.classList.toggle("site-header__menu-content--is-visible");// display and hide navigation menu
        this.siteHeader.classList.toggle("site-header--is-expanded");
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;