let btnSound = document.querySelector(".btn.sound");
btnSound.onClick = () => {
  if (btnSound.paused) {
    console.log("включаем");
    sound.play();
  } else {
    console.log("выключаем");
  }
};
