// Whould you like to play Love game?

function playGame() {
  let money = 0;
  let rightSwap = false;
  let relationStatus = 'single';
  const code = true;

  while (code) {
    money++;

    if (rightSwap && relationStatus === 'love') {
      money--;
      console.log('Still like to take chance.')
    }
    if (money < 0) {
      break;
    }
  }
  return 'Game ov3r';
}