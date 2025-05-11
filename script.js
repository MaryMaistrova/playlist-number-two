const deck = document.querySelector('.card-deck')

deck.onclick = flipCard

function flipCard(event) {
  const card = event.target.closest('.card-whole')
  
  card?.classList.toggle('flipped')
  // card.firstElementChild.style.transform = 'rotateY(-180deg)'
}