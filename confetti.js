const colors = ['#ff0', '#0f0', '#0ff', '#f0f', '#f00', '#00f', '#fff']
const container = document.querySelector('.confetti-container')

for (let i = 0; i < 150; i++) {
  const confetti = document.createElement('div')
  confetti.classList.add('confetti')
  confetti.style.left = `${Math.random() * 100}%`
  confetti.style.animationDuration = `${2 + Math.random() * 3}s`
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  confetti.style.width = `${8 + Math.random() * 4}px`
  confetti.style.height = `${8 + Math.random() * 4}px`
  container.appendChild(confetti)
}
