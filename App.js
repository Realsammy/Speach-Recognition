recognition.stop();
  else {
    recognition.start();
  }
  startBtn.classList.toggle('listening');
  // audiostart
  // audioend
});

document.querySelector('#transcription').addEventListener('click', (e) => {
  navigator.clipboard.writeText(e.target.innerText).then( () => {
    document.getElementById('tooltip').classList.add('active');
    setTimeout( () => {
      document.getElementById('tooltip').classList.remove('active');
    }, 3100);
  });
  
});
