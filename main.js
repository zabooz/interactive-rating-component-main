const submitBtn = document.querySelector('#submitBtn');
const rateBtns = document.querySelectorAll('.btn-container button');
const thxCard  = document.querySelector('.thx-card');
const ratingThxCard = document.querySelector('.selected span');
const main     = document.querySelector('main');

rateBtns.forEach(btn=> {
    btn.addEventListener('click', e =>{
        ratingThxCard.textContent = btn.textContent;
        rateBtns.forEach(item =>{
            item.classList.remove('clicked')
        })
        btn.classList.toggle('clicked');
    })
})
submitBtn.addEventListener('click', e => {
    main.classList.toggle('submit-toggle');
    thxCard.style.display = 'flex';
})