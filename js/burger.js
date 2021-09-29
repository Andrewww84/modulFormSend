const burger = document.querySelector('.humburger-menu');
const menuElem = document.querySelector('.menu');
const burgerLinks = document.querySelectorAll('.menu-list__link');


// for (elem of burgerLinks)

burgerLinks.forEach ((elem) =>  {
  elem.addEventListener('click', () => {
    menuElem.classList.remove('menu-active')
    burger.classList.remove('humburger-menu-active')
  })
})

const toggleMenu = () => {
  menuElem.classList.toggle('menu-active')
  burger.classList.toggle('humburger-menu-active')
}


burger.addEventListener('click', () => {
  toggleMenu()
})
