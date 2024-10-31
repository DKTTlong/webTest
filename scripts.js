let currentIndex = 0;  
let autoPlayInterval = null;  
const autoPlaySpeed = 2000; // 自动播放速度，单位为毫秒（这里设置为3秒）

function showSlide(index) {  
    const slides = document.querySelectorAll('.carousel-slide');  
    if (index >= slides.length) {  
        currentIndex = 0;  
    } else if (index < 0) {  
        currentIndex = slides.length - 1;  
    } else {  
        currentIndex = index;  
    }  
    const offset = -currentIndex * 100 + '%';  
    document.querySelector('.carousel').style.transform = `translateX(${offset})`;  
}  
  
function nextSlide() {  
    showSlide(currentIndex + 1);  
}  
  
function prevSlide() {  
    showSlide(currentIndex - 1);  
}  

function startAutoPlay() {  
    if (autoPlayInterval == null) {  
        autoPlayInterval = setInterval(nextSlide, autoPlaySpeed);  
    }  
}  
  
function pauseAutoPlay() {  
    if (autoPlayInterval != null) {  
        clearInterval(autoPlayInterval);  
        autoPlayInterval = null;  
    }  
}  
 
// 监听鼠标进入和离开轮播图容器，以暂停和恢复自动轮播  
const carouselContainer = document.querySelector('.carousel-container');  
carouselContainer.addEventListener('mouseenter', pauseAutoPlay);  
carouselContainer.addEventListener('mouseleave', startAutoPlay);  
  
// 监听缩略图的点击事件，同样暂停自动轮播  
const thumbnails = document.querySelectorAll('.thumbnail');  
thumbnails.forEach(thumbnail => {  
    // thumbnail.addEventListener('mouseenter', pauseAutoPlay); 
    thumbnail.addEventListener('mouseleave', startAutoPlay); 
	thumbnail.addEventListener('mouseenter', (event) => {  
        const index = Array.prototype.indexOf.call(thumbnails, event.target);  
        showSlide(index);
		pauseAutoPlay();
    });  
});  

// 自动播放功能（可选）  
startAutoPlay();