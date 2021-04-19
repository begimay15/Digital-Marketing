document.querySelector(".burger__btn").addEventListener('click', (e) =>{
    e.preventDefault()
    document.querySelector('.media__menu').classList.toggle('burger')
})