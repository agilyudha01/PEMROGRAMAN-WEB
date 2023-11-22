var currentImageIndex = 0;
var images = document.getElementsByClassName('imageShow');

function showNextImage() {
    images[currentImageIndex].style.display = 'none'; 
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000);

