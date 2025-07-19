const container = document.querySelector('.container')
const cardCircle = document.getElementById('cardCircle')
const divProjects = document.querySelector('.div-projects')
const btnHamburger = document.querySelector('.box')
const navBarMobile = document.querySelector('aside')
const body = document.querySelector('body')
const header = document.querySelector('header') 
const divHeader = document.querySelector('.header') 


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
    {
        name: "AHS Smart-Tech",
        descrition: "Site vitrine d'une entreprise de vente de matériel IoT et des solutions domotiques.",
        image: "../images/ahs_smart-tech.png",
        link: "https://ahs-smart-tech.vercel.app/", 
        linkGitHub: "",
        stacks: [ "ReactJS", "TailwindCSS", "Material UI" ]
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


let scrollFromTop = document.documentElement.scrollTop
=
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


datasCards.map((datasCard, index) => (
    
    divProjects.innerHTML += index % 2 === 0 
                                ?
                                    `<div class="project">
                                        <img 
                                            src=${datasCard.image} 
                                            alt=${datasCard.name}
                                            data-aos="fade-right" 
                                            data-aos-duration="500" 
                                            data-aos-easing="ease-in-out" 
                                            data-aos-delay="850"
                                            >
                                        <div class="description-project">
                                            <h2
                                                data-aos="fade-left" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="1200"
                                            ><a href=${datasCard.link}>${datasCard.name}</a></h2>
                                            <p
                                                data-aos="fade-left" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="1000"
                                            >${datasCard.descrition}</p>
                                            <ul class="stacks-project"
                                                data-aos="fade-left" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="100"
                                            >
                                                <li>${datasCard.stacks.join(' | ')}</li>
                                            </ul>
                                            <div class="links-project"
                                                data-aos="fade-left" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="100"
                                            >
                                                <a href=${datasCard.linkGitHub}><i class="bi bi-github"></i></a>
                                                <a href=${datasCard.link}><i class="bi bi-box-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>`
                                :  ` <div class="project-2">
                                        <img 
                                            src=${datasCard.image} 
                                            alt=${datasCard.name}
                                            data-aos="fade-left" 
                                            data-aos-duration="500" 
                                            data-aos-easing="ease-in-out" 
                                            data-aos-delay="850"    
                                        >
                                        <div class="description-project">
                                            <h2
                                                data-aos="fade-rigth" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="1200"
                                            > <a href=${datasCard.link}>${datasCard.name}</a></h2>
                                            <p
                                                data-aos="fade-right" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="1000"
                                            >${datasCard.descrition}</p>
                                            <ul class="stacks-project"
                                                data-aos="fade-right" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="100"
                                            >
                                                <li>${datasCard.stacks.join(' | ')}</li>
                                            </ul>
                                            <div class="links-project"
                                                data-aos="fade-right" 
                                                data-aos-duration="500" 
                                                data-aos-easing="ease-in-out" 
                                                data-aos-delay="100"
                                            >
                                                <a href=${datasCard.linkGitHub}><i class="bi bi-github"></i></a>
                                                <a href=${datasCard.link}><i class="bi bi-box-arrow-up-right"></i></a>
                                            </div>
                                        </div>
                                    </div>` 
))

