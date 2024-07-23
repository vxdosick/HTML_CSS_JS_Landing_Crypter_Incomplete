const headerRight = document.querySelector('.header__right');
const headerRightNotChange = headerRight.innerHTML;

window.addEventListener('resize', function() {
    if (this.innerWidth <= 750) {
        if (!document.querySelector('.header__burger')) {
            const burger = document.createElement('div');
            burger.className = 'header__burger';
            burger.innerHTML = "<div></div><div></div>";
            headerRight.innerHTML = '';
            headerRight.appendChild(burger);
        }
    } else if (document.querySelector('.header__burger')) {
        headerRight.innerHTML = headerRightNotChange;
    }
});

const futureMidViewcontainers = document.querySelectorAll('.future__mid-viewcontainer');
const futureMidViews = document.querySelectorAll('.future__mid-view');
const futureMidImgs = document.querySelectorAll('.future__mid-viewcontainer img');

futureMidViewcontainers.forEach((container, index) => {
    container.addEventListener('mouseenter', function() {
        futureMidViews[index].style.display = 'block';
        futureMidImgs[index].style.filter = 'brightness(30%)';
    });

    container.addEventListener('mouseleave', function() {
        futureMidViews[index].style.display = 'none';
        futureMidImgs[index].style.filter = '';
    });
});

const uploadPopup = document.querySelector('.upload__popup');
const uploadBody = document.querySelector('.upload__body');
const headerUpload = document.querySelector('.header__upload');
const uploadClose = document.querySelector('.upload__close');

function toggleUploadPopup() {
    uploadPopup.classList.toggle('upload__popup--nonvisibility');
    uploadPopup.classList.toggle('upload__popup--visibility');
    uploadBody.classList.toggle('upload__popup--nonvisibility');
    uploadBody.classList.toggle('upload__popup--visibility');
    document.body.style.overflow = document.body.style.overflow === 'hidden' ? '' : 'hidden';
}

headerUpload.addEventListener('click', toggleUploadPopup);
uploadClose.addEventListener('click', toggleUploadPopup);