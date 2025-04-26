const container = document.querySelector('.container')
const cardCircle = document.getElementById('cardCircle')
const effectProjector = cardCircle.getBoundingClientRect()

const divProjects = document.querySelector('.div-projects')

const datasCards = [
    {
        name: "Dashboard avec ReactJS",
        descrition: "Création d'un tableau de bord avec ReactJS, TailwindCSS et utilisation du gestionnaire de packages NPM.",
        image: "../images/dashboard.png",
        link: "https://mydashboard-gilt.vercel.app/", 
        linkGitHub: "https://github.com/Bakari1548/dashboard",
        stacks: [ "ReactJS", "TailwindCSS", "NPM" ]
    },
    {
        name: "SenEspace",
        descrition: "Landing page d'un site de achat et vente de maisons, appartement et terrain.",
        image: "../images/senespace_website.png",
        link: "https://landing-page-three-delta-13.vercel.app/assets/index.html", 
        linkGitHub: "https://github.com/Bakari1548/landing-page",
        stacks: [ "HTML", "CSS", "VanillaJS" ]
    },
    {
        name: "Wommate",
        descrition: "Site vitrine de formation en ligne sur le développement web et d'accompagnement des jeunes dans le monde professionnel.",
        image: "../images/wommate_website.png",
        link: "https://wommate-site.vercel.app/", 
        linkGitHub: "https://github.com/Bakari1548/wommate-site",
        stacks: [ "ReactJS", "TailwindCSS", "AOS animation", "Swiper" ]
    },
]

if(window.matchMedia("(pointer:fine)").matches) {
    container.addEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseout', handleMouseOut)
}

function handleMouseMove(e) {
    // cardCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    cardCircle.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%)`
    // cardCircle.style.transform = `translate(${e.clientX - effectProjector.left}px, ${e.clientY - effectProjector.top}px)`
    // cardCircle.style.transform = `translate(calc(${e.clientX - effectProjector.left}px - 50%), calc(${e.clientY - effectProjector.top}px - 50%))`
    cardCircle.style.opacity = '1'
}

function handleMouseOut() {
    cardCircle.style.opacity = '0'
}



datasCards.map((datasCard, index) => (
    
    divProjects.innerHTML += index % 2 === 0 
                                ?
                                    `<div class="project">
                                        <img src=${datasCard.image} alt=${datasCard.name}>
                                        <div class="description-project">
                                            <h2> <a href=${datasCard.link}>${datasCard.name}</a></h2>
                                            <p>${datasCard.descrition}</p>
                                            <ul class="stacks-project">
                                                <li>${datasCard.stacks.join(' | ')}</li>
                                            </ul>
                                            <div class="links-project">
                                                <a href=${datasCard.linkGitHub}><i class="bi bi-github"></i></a>
                                                <a href=${datasCard.link}><i class="bi bi-box-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>`
                                :  ` <div class="project-2">
                                        <img src=${datasCard.image} alt=${datasCard.name}>
                                        <div class="description-project">
                                            <h2> <a href=${datasCard.link}>${datasCard.name}</a></h2>
                                            <p>${datasCard.descrition}</p>
                                            <ul class="stacks-project">
                                                <li>${datasCard.stacks.join(' | ')}</li>
                                            </ul>
                                            <div class="links-project">
                                                <a href=${datasCard.linkGitHub}><i class="bi bi-github"></i></a>
                                                <a href=${datasCard.link}><i class="bi bi-box-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>` 
))
