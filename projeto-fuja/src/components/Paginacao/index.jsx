
const cardNext = document.querySelector('.btn-next');
const cardPrev = document.querySelector('.btn-prev');
const quantidadeCards = 4;
let start = 0;
let end = quantidadeCards;

cardPrev.addEventListener('click', () => {
    if (end === quantidadeCards) {
        start = cardsFilter.length - quantidadeCards;
        end = cardsFilter.length;
    } else {
        start -= quantidadeCards;
        end -= quantidadeCards;
    }
    criandoCard(start, end);
})
cardNext.addEventListener('click', () => {
    if (end < cardsFilter.length) {
        start += quantidadeCards;
        end += quantidadeCards;
    } else {
        start = 0;
        end = quantidadeCards;
    }
    criandoCard(start, end);
})