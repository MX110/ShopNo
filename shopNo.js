const images = document.querySelectorAll('.main__featured-works-item');
const closeModal = document.getElementsByClassName('featured-works__modal-close')[0];
const modalWindow = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');


closeModal.onclick =function() {
    modalWindow.style.display = 'none';
    images.forEach(image => {
        image.classList.remove('modal-content-active');
    })
}


function openModal(image) {
    modal.style.display = "block";
}


images.forEach(image => {
    image.addEventListener('click', () => {
        openModal();
        image.classList.add('modal-content-active');
    })
})
