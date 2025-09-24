function startSiteAnimations(){
const mainTextElement = document.querySelector('.main__subscribe-text')

const needText = "Привет, я - Чушпан. \nЯ хочу познакомить тебя с миром удивительных игр, \nв которых ты сможешь проверить свое везение. \nЛибо всё, либо ничего. \nХА - ХА."
let mainCountText = 0;
const mainAddText = setInterval(() => {
  mainTextElement.innerHTML = needText.slice(0, mainCountText).replace(/\n/g, '<br>');
  if (mainCountText++ > needText.length) clearInterval(mainAddText);
}, 60);

const rotateElement = document.querySelector('.rotate')
const rotateBtnElement = document.querySelector('.main__roullete-btn')

let canClick = true
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
angle = 0;
rotateBtnElement.addEventListener('click', () => {
  if (!canClick) return alert('Крутить можно раз в 2 секунды');
  canClick = false
  const delta = getRandom(720,1080)
  angle += delta
  rotateElement.style.transform = `rotate(${angle}deg)`
  console.log('ugol', angle)

  setTimeout(() => {
    canClick = true
  }, 2000)
})
const mainSecondText = document.querySelector('.main__about-roullete-text')
const needText2 = "Теперь, когда мы познакомились,\n я хочу, чтобы ты сыграл в свою первую игру. \n От нёё будет зависить то, как я буду к тебе относиться.\n Нажми на кнопку."
let mainCountText2 = 0;
setTimeout(() => { const mainAddText2 = setInterval(() => {
  mainSecondText.innerHTML = needText2.slice(0, mainCountText2).replace(/\n/g, '<br>');
  if (mainCountText2++ > needText2.length) clearInterval(mainAddText2);
}, 60); }, 10000)
}