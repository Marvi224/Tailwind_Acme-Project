// this is for making mobile nav bar in sync with the the wide screen  
const initApp = () => {
    const hamburgerBtn = document.getElementById('hambuger-button')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toogle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
   
}

document.addEventListener('DOMContentLoaded', initApp)
