(() => {
  // this is a self invoking anonymous function
  // also called a lambda, if you're into nerd speak
  console.log('working!');

  const dropZones = document.querySelectorAll('.drop-zone'),
      musicElements = document.querySelectorAll('.box');

  let draggablePieces = document.querySelectorAll("img");


  function logKeyCode(event) {
    console.log(event.dataset.key);
    
    let currentAudioClip = document.querySelector(`audio[data-key="${event.dataset.key}"]`);
    currentAudioClip.play()
  }
 
  musicElements.forEach(element => {
    element.addEventListener("click", logKeyCode);

  });


  draggablePieces.forEach(piece => {
      piece.addEventListener("dragstart", function(e) {
        console.log('dragging..!');

        e.dataTransfer.setData("text/plain", this.id);
    });
  });

  dropZones.forEach(zone => {
       zone.addEventListener("dragover", function(e) {
           e.preventDefault();
           console.log('drag is working');
    });

      zone.addEventListener("drop", function(e) {
          e.preventDefault();
          console.log('drop is working!');

          let dragElement = e.dataTransfer.getData("text/plain");
          console.log('you dragged: ', dragElement);

      e.target.appendChild(document.querySelector(`#${dragElement}`));
    
    });
  });


})();
