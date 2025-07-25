const container = document.querySelector('.container')
const cardCircle = document.getElementById('cardCircle')
const btnHamburger = document.querySelector('.box')
const navBarMobile = document.querySelector('aside')
const body = document.querySelector('body') 
const header = document.querySelector('header') 
const divHeader = document.querySelector('.header') 


let divCards = document.querySelector('.langages-techno')
let card = document.querySelector('.card')
let titleCard = document.querySelector('.title-card')
let imgCard = document.querySelector('.logo-card')
let textCard = document.querySelector('.text-card')

const datasCards = [
    {
        pathImg: '../images/logo_HTML.png',
        title: 'HTML',
        text: 'Structure HTML, balise sémantique, gestion formulaire, accessibilité, SEO (balises meta, link, title).',
        level: '90%',
        aosDelay: '100',
    },
    {
        pathImg: '../images/logo_CSS.png',
        title: 'CSS',
        text: 'Notions de selecteurs, propriétés et valeurs. Utilisations des flexbox, grid, responsive design, animations CSS, transitions CSS.',
        level: '96%',
        aosDelay: '200',
    },
    {
        pathImg: '../images/logo_JS.png',
        title: 'JavaScript',
        text: 'DOM, utilisation des méthodes map, filter, push... Utilisation de la console pour le débuggage, l\'API fetch, les fonctions asynchrones.',
        level: '70%',
        aosDelay: '300',
    },
    {
        pathImg: '../images/logo_ReactJS.png',
        title: 'ReactJS',
        text: 'Composants, props, state, hooks, gestion des événements, gestion des formulaires, router, API.',
        level: '70%',
        aosDelay: '100',
    },
    {
        pathImg: '../images/logo_tailwindcss.png',
        title: 'TailwindCSS',
        text: 'Utilisation de la librairie TailwindCSS pour le design des pages, gestion des classes utilitaires, responsive design.',
        level: '96%',
        aosDelay: '200',
    },
    {
        pathImg: '../images/logo_Git.png',
        title: 'Git',
        text: 'Gestion de version, commit, push, pull, clone, fork, merge, branch. Utilisation de la ligne de commande pour les commandes git.',
        level: '80%',
        aosDelay: '300',
    },
    {
        pathImg: '../images/logo_blanc_GitHub.png',
        title: 'GitHub',
        text: 'Hébergement de projets, gestion des dépôts, collaboration avec des équipes, gestion des issues et des pull requests.',
        level: '75%',
        aosDelay: '100',
    },
    {
        pathImg: '../images/logo_Redux.png',
        title: 'Redux',
        text: 'Gestion de l\'état global des applications, reducers, actions, store, middleware, intégration avec React.',
        level: '65%',
        aosDelay: '200',
    },
    {
        pathImg: '../images/logo_NextJS.png',
        title: 'NextJS',
        text: 'Framework React pour le rendu côté serveur (SSR), génération de sites statiques (SSG), gestion des routes dynamiques.',
        level: '76%',
        aosDelay: '300',
    },
    {
        pathImg: '../images/logo_MySQL.png',
        title: 'MySQL',
        text: 'Gestion de bases de données relationnelles, création de tables, requêtes SQL, jointures, optimisation des requêtes.',
        level: '63%',
        aosDelay: '100',
    },
    {
        pathImg: '../images/logo_php.png',
        title: 'PHP',
        text: 'Langage côté serveur, gestion des sessions, interactions avec les bases de données, création d\'API REST.',
        level: '40%',
        aosDelay: '200',
    },
    {
        pathImg: '../images/logo_nodeJS.png',
        title: 'NodeJS',
        text: 'Exécution de JavaScript côté serveur, création de serveurs web, gestion des fichiers, utilisation de modules npm.',
        level: '60%',
        aosDelay: '300',
    },
    {
        pathImg: '../images/logo_postman.png',
        title: 'Postman',
        text: 'Outil de test d\'API, création de requêtes HTTP, gestion des environnements, tests automatisés.',
        level: '70%',
        aosDelay: '100',
    },
]



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

datasCards.map((dataCard) => (
   divCards.innerHTML += ` <div class="card"  
                                data-aos="fade-up" 
                                data-aos-duration="500" 
                                data-aos-easing="ease-in-out" 
                                data-aos-delay=${dataCard.aosDelay}
                            >    
                                <div class= "card-div1">
                                    <img class="logo-card" src=${dataCard.pathImg} alt="">
                                    <h3 class="title-card">${dataCard.title}</h3>
                                    <p class="text-card">${dataCard.text}</p>
                                </div>
                                <div class="card-div2">
                                    <div class="level">
                                        <p style="width: ${dataCard.level};"></p>
                                    </div>
                                    <p class="text-level">${dataCard.level}</p>
                                </div>                           
                            </div>`
    
))


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