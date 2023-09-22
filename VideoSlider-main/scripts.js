function toggleMenu(){
    const menuIcon=document.querySelector('.menuIcon');
    const navBar=document.getElementById('navbar');

    menuIcon.classList.toggle('active');
    navBar.classList.toggle('active');
}

const slideShow=document.getElementById('slideShow');
const slidesVideo=slideShow.getElementsByTagName('video');
var index=0;
function nextSlide(){
    slidesVideo[index].classList.remove('active');
    index=(index+1)%slidesVideo.length;
    slidesVideo[index].classList.add('active');
    
}
function prevSlide(){
    slidesVideo[index].classList.remove('active');
    index=(index-1+slidesVideo.length)%slidesVideo.length;
    slidesVideo[index].classList.add('active');
}

const slideShowText = document.getElementById("slideShowText");
const slideTxt = slideShowText.getElementsByTagName("div");
var i=0;
function nextSlideText(){
    slideTxt[i].classList.remove("active");
    i = (i + 1) % slideTxt.length;
    slideTxt[i].classList.add("active");
}
function prevSlideText(){
    slideTxt[i].classList.remove('active');
    i = (i - 1 + slideTxt.length) % slideTxt.length;
    slideTxt[i].classList.add('active');

    function prevSlide() {
        slidesVideo[index].classList.remove('active');
        index = (index - 1 + slidesVideo.length) % slidesVideo.length;
        slidesVideo[index].classList.add('active');
        
        // Update the text slide to match the video slide
        slideTxt[i].classList.remove('active');
        i = (i - 1 + slideTxt.length) % slideTxt.length;
        slideTxt[i].classList.add('active');
    }
    
}

