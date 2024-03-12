let headerRight = document.querySelector('.header__right')
const headerRightNotChange = headerRight.innerHTML
window.addEventListener('resize', function(){
    if (this.innerWidth <= 750) {
        if(!document.querySelector('.header__burger')) {
            let burger = document.createElement('div')
            burger.className = 'header__burger'
            burger.innerHTML = "<div></div><div></div>"
            headerRight.innerHTML = ''
            headerRight.appendChild(burger);
        }
    } else if (this.innerWidth > 750) {
        if (document.querySelector('.header__burger')) {
            headerRight.innerHTML = headerRightNotChange
            
        }
    }
})

let futureMidViewcontainer = document.querySelectorAll('.future__mid-viewcontainer')
let futureMidView = document.querySelectorAll('.future__mid-view')
let futureMidImg = document.querySelectorAll('.future__mid-viewcontainer img')
futureMidViewcontainer[0].addEventListener('mouseenter', function(){
    futureMidView[0].style.display = 'block'
    futureMidImg[0].style.filter = 'brightness(30%)'
})
futureMidViewcontainer[1].addEventListener('mouseenter', function(){
    futureMidView[1].style.display = 'block'
    futureMidImg[1].style.filter = 'brightness(30%)'
})
futureMidViewcontainer[2].addEventListener('mouseenter', function(){
    futureMidView[2].style.display = 'block'
    futureMidImg[2].style.filter = 'brightness(30%)'
})

futureMidViewcontainer[0].addEventListener('mouseleave', function(){
    futureMidView[0].style.display = 'none'
    futureMidImg[0].style.filter = ''
})
futureMidViewcontainer[1].addEventListener('mouseleave', function(){
    futureMidView[1].style.display = 'none'
    futureMidImg[1].style.filter = ''
})
futureMidViewcontainer[2].addEventListener('mouseleave', function(){
    futureMidView[2].style.display = 'none'
    futureMidImg[2].style.filter = ''
})

let uploadPopup = document.querySelector('.upload__popup')
let uploadBody = document.querySelector('.upload__body')
let headerUpload = document.querySelector('.header__upload')
let uploadClose = document.querySelector('.upload__close')
function uploadPopupWindow() {
    uploadPopup.classList.toggle('upload__popup--nonvisibility')
    uploadPopup.classList.toggle('upload__popup--visibility')
    uploadBody.classList.toggle('upload__popup--nonvisibility')
    uploadBody.classList.toggle('upload__popup--visibility')
    if (document.body.style.overflow == 'hidden') {
        document.body.style.overflow = ''
    } else {
        document.body.style.overflow = 'hidden'
    }
}
headerUpload.addEventListener('click', uploadPopupWindow)
uploadClose.addEventListener('click', uploadPopupWindow)
