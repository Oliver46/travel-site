import '../styles/styles.css'
import 'lazysizes' /* download images when user scrolldown */
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll' 
import StickyHeader from './modules/StickyHeader'
import ClientArea from './modules/ClientArea'
//import Modal from './modules/Modal'

//Integrate react in my workflow
//React Related Code
import React from 'react'
import ReactDOM from 'react-dom'
// import React components that we created
import MyAmazingComponent from './modules/MyAmazingComponent'

ReactDOM.render(<MyAmazingComponent />, document.querySelector("#my-react-example"))


//new Modal()
new ClientArea()
let stickyHeader = new StickyHeader()
let mobileMenu = new MobileMenu(); //new instance of the MobileMenu class
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
let modal /* Create global variable */

/* download Modal Code if user need it */
document.querySelectorAll(".open-modal").forEach( element => {
    element.addEventListener("click", event => {
        event.preventDefault() /* Prevent default behavior */
        /* Return a promise */
        if(typeof modal == "undefined"){
            import(/* WebpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(()=> modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        }else{
            modal.openTheModal()
        }
    })
})

if(module.hot) {
    module.hot.accept()
}

/* Lesson example code below this line */



