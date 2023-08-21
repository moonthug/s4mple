import JSConfetti from 'js-confetti';


const jsConfetti = new JSConfetti();

export function createConfetti() {
  jsConfetti.addConfetti({
    confettiColors: [
      '#ead386',
      '#efe1ac',
      '#fff6d7',
    ]
  });
}
