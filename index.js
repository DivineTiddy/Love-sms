"use strict";
let moveDown = 5;
const i = 0;

document.querySelector(`.button`).addEventListener(`click`, function () {
  let answer = Number(document.querySelector(`.select`).value);
  if (answer < moveDown) {
    moveDown--;
    document.querySelector(`.moveDown`).textContent = `Your limit: ${moveDown} left`;
  } else if (answer == moveDown) {
    moveDown--;
    document.querySelector(`.moveDown`).textContent = `Your limit: ${moveDown} left`;
  } else if (moveDown < answer) {
    moveDown--;
    document.querySelector(`.moveDown`).textContent = `Your limit: ${moveDown} left`;
  }
  if (moveDown == i || moveDown < i) {
    document.querySelector('p').style.color = `white`;
  }
  if (moveDown == i || moveDown < i) {
    document.querySelector(`.moveDown`).textContent = `chat over try again`;
  }

  switch (answer) {
    case 1:
      document.querySelector(`.answer`).textContent = `
      I would cross a hundred oceans just to be with you and hold you tight. I'd climb the tallest mountains just to be with you every night. I miss you so much. For you, I'd do anything.`;

      break;
    case 2:
      document.querySelector(
        `.answer`
      ).textContent = `For you, my heart will never break. For you, my smile will never fade. And for you, my love will never end. I love you.`;

      break;
    case 3:
      document.querySelector(
        `.answer`
      ).textContent = `'For it was not into my ear you whispered, but into my heart. It was not my lips you kissed, but my soul". -Judy Garland`;

      break;
    case 4:
      document.querySelector(
        `.answer`
      ).textContent = `I am completely enthralled by your beauty, mesmerized by your charisma, and spellbound by your fascinating love. It's no wonder you're always on my mind and in my heart.`;

      break;
    case 5:
      document.querySelector(
        `.answer`
      ).textContent = `A piece of my heart is always missing when you're not with me.`;

      break;
    case 6:
      document.querySelector(
        `.answer`
      ).textContent = `'My heart is ever at your service"`;

      break;
    case 7:
      document.querySelector(
        `.answer`
      ).textContent = `I can't wait to spend the rest of my life with you.`;

      break;
    case 8:
      document.querySelector(
        `.answer`
      ).textContent = `The easiest part was getting to know you. The hardest part was being apart from you. The BEST part is being WITH you.`;

      break;
    case 9:
      document.querySelector(
        `.answer`
      ).textContent = `You make me feel like the luckiest man/woman in the world.`;

      break;
    case 10:
      document.querySelector(
        `.answer`
      ).textContent = `I can't explain the way you make me feel when I hear your voice or see your face, but I adore it.`;

      break;
    case 11:
      document.querySelector(
        `.answer`
      ).textContent = `When the time comes that I can't smile anymore, don't worry, I will know what to do: just think of you. No one else could ever make me as happy as the way you do.`;

      break;

    default:
      document.querySelector(`.answer`).textContent = `choose from 1 -- 11`;

      break;
  }
});
const x = alert(
  `Hi am Divine your AI lover, let have fun. choose from 1 --- 11 down in the input`
);
