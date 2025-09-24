const bodyElement = document.body

const burgerElement = document.querySelector('[data-js-burger-button]')
burgerElement.addEventListener('click', () => {
  burgerElement.classList.toggle('is-active')
})

const navElement = document.querySelector('[data-js-nav]')
burgerElement.addEventListener('click', () => {
  navElement.classList.toggle('is-active')
  bodyElement.classList.toggle('no-scroll')
})