const overlay = document.getElementById('overlay')
const openModalBtn = document.getElementById('open-modal')
const closeModalBtn = document.getElementById('close-modal')

openModalBtn.addEventListener('click', (e) => {
  overlay.style.display = 'block'
})

closeModalBtn.addEventListener('click', (e) => {
  overlay.style.display = 'none'
})
