const cards = document.querySelectorAll('.card');

    cards.forEach(card => card.addEventListener('click', flipCard));
    
    function flipCard() {
      if (!this.classList.contains('flipped')) {
        // Close all other cards
        cards.forEach(otherCard => {
          if (otherCard !== this && otherCard.classList.contains('flipped')) {
            otherCard.classList.remove('flipped');
          }
        });
      }      
      this.classList.toggle('flipped');
    }
    
