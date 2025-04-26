const container = document.querySelector('.container')
const cardCircle = document.getElementById('cardCircle')
const effectProjector = cardCircle.getBoundingClientRect()


if(window.matchMedia("(pointer:fine)").matches) {
    container.addEventListener('mousemove', handleMouseMove)
    container.removeEventListener('mouseout', handleMouseOut)
}

function handleMouseMove(e) {
    // cardCircle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    // cardCircle.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%)`
    // cardCircle.style.transform = `translate(${e.clientX - effectProjector.left}px, ${e.clientY - effectProjector.top}px)`
    cardCircle.style.transform = `translate(calc(${e.clientX - effectProjector.left}px - 50%), calc(${e.clientY - effectProjector.top}px - 50%))`
    cardCircle.style.opacity = '1'
}

function handleMouseOut() {
    cardCircle.style.opacity = '0'
}