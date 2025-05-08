const container = document.querySelector('.container')
const cardCircle = document.getElementById('cardCircle')
const btnHamburger = document.querySelector('.box')
const navBarMobile = document.querySelector('aside')
const body = document.querySelector('body') 
const header = document.querySelector('header') 
const divHeader = document.querySelector('.header') 

if(window.matchMedia("(pointer:fine)").matches) {
    container.addEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseout', handleMouseOut)
}

function handleMouseMove(e) {
    cardCircle.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%)`
    cardCircle.style.opacity = '1'
}

function handleMouseOut() {
    cardCircle.style.opacity = '0'
}

btnHamburger.addEventListener('click', toggleNav)

function toggleNav(e) {
    e.target.classList.toggle('active')
    navBarMobile.classList.toggle('active-navbar-mobile')
    container.classList.toggle('blur-container')
    body.classList.toggle('overflow-hidden')
}

container.addEventListener('click', () => {
    container.classList.remove('blur-container')
    btnHamburger.classList.remove('active')
    navBarMobile.classList.remove('active-navbar-mobile')
    body.classList.remove('overflow-hidden')
})

let scrollFromTop = document.documentElement.scrollTop

document.addEventListener('scroll', handleScrolling)

function handleScrolling() {
    const currentScroll = document.documentElement.scrollTop
    
    if(currentScroll > scrollFromTop && currentScroll > 160) {
        // console.log("Scrolling DOWN")
        header.style.transform = 'translateY(-100%)'
        header.style.transition = 'transform 0.5s ease-in-out'
    }
    else{
        // console.log("Srolling UP")
        header.style.transform = 'translateY(0)'
        header.style.transition = 'transform 0.5s ease-in-out'
    }

    scrollFromTop = document.documentElement.scrollTop
}

window.addEventListener('load', loader)

function loader() {
    const animationLoader = document.querySelector('.div-animation')
    body.style.overflow = 'hidden'
    container.style.opacity = '0'
    header.style.opacity = '0'
    cardCircle.style.display = 'none'
    animationLoader.style.opacity = '1'

    setTimeout(() => {
        animationLoader.style.opacity = '0'
        animationLoader.style.transition = '1s'
    }, 3000)
    
    setTimeout(() => {
        body.style.overflow = 'auto'
        container.style.opacity = '1'
        header.style.opacity = '1'
        cardCircle.style.display = 'block'
        animationLoader.style.transition = '1s'
        
    }, 4500)
}   
