gsap.fromTo('.loading-page', {opacity:1},{
  opacity:0,
  duration:1.5,
  delay:4,
  onComplete: () => {
      console.log('Анимация завершена');
      document.querySelector('.loading-page').style.pointerEvents = 'none';
      typingText()
  }
})

gsap.fromTo('.logo-name', {
  v:50,
  opacity:0
}, {
  y:0,
  opacity:1,
  duration:2,
  delay: 0.5
})

const buttonElement = document.querySelector('.buttonOffPreloader')
const preloaderElement = document.querySelector('.preloader')

buttonElement.addEventListener('click', () => {
  preloaderElement.classList.add('preloader-hidden')
  document.body.classList.remove('preloader-active')
  startSiteAnimations();
})

const typingText = () => {
const firstTextElement = document.querySelector('.preloader__text')
const addTextPreloader = 'Здарова, чушпаны'
let countTextPreloader = 0
const typingInterval = setInterval(typingText, 100)
function typingText (){
  if(countTextPreloader < addTextPreloader.length){
    firstTextElement.textContent += addTextPreloader[countTextPreloader]
    countTextPreloader++
  } else {
    clearInterval(typingInterval)
    setTimeout(deleteText, 500)
  }
}

function deleteText() {
  let lengthText = addTextPreloader.length
  let needWeight = 8

  const deletingInterval = setInterval(() => {
    if(lengthText > needWeight){
      firstTextElement.textContent = firstTextElement.textContent.slice(0, -1)
      lengthText--
    } else {
      clearInterval(deletingInterval)
      setTimeout(addNewText, 300)
    }
  }, 100)
}

function addNewText() {
  const needText = ' шпана'
  let countText = 0
  const addNewText = setInterval(() => {
    if(countText < needText.length){
      firstTextElement.textContent += needText[countText]
      countText++
    }
    else {
      clearInterval(addNewText)
    }  
  }, 100)
}
}

