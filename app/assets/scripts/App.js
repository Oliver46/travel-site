import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll' 
import StickyHeader from './modules/StickyHeader'

let stickyHeader = new StickyHeader()
let mobileMenu = new MobileMenu(); //new instance of the MobileMenu class
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)


if(module.hot) {
    module.hot.accept()
}

/* Lesson example code below this line */



