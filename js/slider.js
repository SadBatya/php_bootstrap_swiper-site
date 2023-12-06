let offset = 0 //смещение от левого края
const sliderLine = document.querySelector('.slider_line')

document.querySelector('#next').addEventListener('click', () => {
  offset += 1024 
  if(offset > 2048){
    offset = 0
  }
  sliderLine.style.left = -offset + 'px'
})

document.querySelector('#prev').addEventListener('click', () => {
  offset -= 1024
  if(offset < 0){
    offset = 2048
  }
  sliderLine.style.left = -offset + 'px'
})