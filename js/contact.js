const container = document.querySelector('.container')
const cardCircle = document.getElementById('cardCircle')
const btnHamburger = document.querySelector('.box')
const navBarMobile = document.querySelector('aside')
const body = document.querySelector('body') 
const header = document.querySelector('header') 
const divHeader = document.querySelector('.header') 
const form = document.querySelector('form')
let scrollFromTop = document.documentElement.scrollTop


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

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;
    const messageError = document.querySelector('.message-error');

    if(name === '' || email === '' || message === ''){        
        messageError.textContent = 'Veuillez remplir tous les champs'
    } else {
        const mailto = `mailto:bkrsagna03@gmail.com?subject=Message depuis votre porfolio&body=Salut, je m'appelle ${name} et voici mon message : ${message}`
        // const mailto = `mailto:${email}`
        location.href = mailto;
    }
    
}