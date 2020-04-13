import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(els, thresholdPercent){
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = els;
        this.browserHeight = window.innerHeight
        this.hideInitially() //runs as soon as the page loads
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }
    events() {
        //listening
        window.addEventListener("scroll", this.scrollThrottle)
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }

    calcCaller(){
        console.log("Scroll function ran")
        this.itemsToReveal.forEach(el => {
           if(el.isReveal == false) {
            this.calculateIfScrollTo(el)
           }
        })
    }

    //window.innerHeight: Measure the height of the current browser viewport in px

    calculateIfScrollTo(el){
        if(window.scrollY + this.browserHeight > el.offsetTop){
            console.log("Element was calculated")
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if(scrollPercent < this.thresholdPercent){ //if scroll percent is less than 75 reveal item
                el.classList.add("reveal-item--is-visible")
                el.isReveal =  true
                if(el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle)
                }
            }
        }
    }
    hideInitially(){
        this.itemsToReveal.forEach(el => { 
            el.classList.add("reveal-item")
            el.isReveal = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll