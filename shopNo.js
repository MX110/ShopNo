const images = document.querySelectorAll('.main__featured-works-item');
const closeModal = document.getElementsByClassName('featured-works__modal-close')[0];
const modalWindow = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');


closeModal.onclick =function() {
    modalWindow.style.display = 'none';
}


function openModal() {
    modal.style.display = "block";
    
    // modalImg.src = this.src;
}


images.forEach(image => {
    image.addEventListener('click', () => {
        console.log(image);
        openModal(modalWindow);
    })
})





console.log(images);
console.log(modalImg);