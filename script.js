'use strict'

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')

const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal)

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden') //removes the classname of the modal query(without dots or hash)
        overlay.classList.remove('hidden')
    })
}

//hiding modal window
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden') //adds the classname of the modal query
    overlay.classList.add('hidden')
})

overlay.addEventListener('click', function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden')
    }
})
