const profileImageInner = document.querySelector('.profile-image-inner');
let isFlipped = false;

function toggleProfileImage() {
    if (isFlipped) {
        profileImageInner.style.transform = 'rotateY(0deg)';
     } else {
        profileImageInner.style.transform = 'rotateY(-180deg)';
    }  
    isFlipped = !isFlipped;
}

setInterval(toggleProfileImage, 3000); // Flip every 1000ms (1 second)


