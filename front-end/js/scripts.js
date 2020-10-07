const modalOverlay = document.querySelector('.modal_overlay');
const cards = document.querySelectorAll('.card');
const closeModal = document.querySelector('.close_modal');
const iFrame = modalOverlay.querySelector('iframe')

for (let card of cards){
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id")

        modalOverlay.classList.add('active'); 
        iFrame.src = `https://www.youtube.com/embed/${videoId}`;
    });
}

closeModal.addEventListener('click', function(){
    modalOverlay.classList.remove("active")
    iFrame.src = ""
})




