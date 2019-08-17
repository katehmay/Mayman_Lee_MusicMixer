(() => {
  // Drag and Drop 
  console.log('working!');

  const dropZones = document.querySelectorAll('.drop-zone');

  let draggablePieces = document.querySelectorAll("img"),
      resetBut = document.querySelector(".ss-button");


  draggablePieces.forEach(piece => {
      piece.addEventListener("dragstart", function(e) {
        console.log('dragging..!');

        e.dataTransfer.setData("text/plain", this.id);
    });
  });

  dropZones.forEach(zone => {
       zone.addEventListener("dragover", function(e) {
           e.preventDefault();
           console.log('drag is working!');
    });

      zone.addEventListener("drop", function(e) {
          e.preventDefault();
          console.log('drop is working!');

          let dragElement = e.dataTransfer.getData("text/plain");
          console.log('you dragged: ', dragElement);
          
          if ( this.childElementCount == 1 ) { return; }

          let audioKey = document.querySelector(`#${dragElement}`).dataset.key;
          
          let currentAudioClip = document.querySelector((`audio[data-key="${audioKey}"]`));
          currentAudioClip.play();
          currentAudioClip.loop = "true";

          e.target.appendChild(document.querySelector(`#${dragElement}`));

    });
  });

  function resetRound(e) {
    console.log("reset is working!");
    e.preventDefault();

    draggablePieces.forEach(piece => piece.classList.add('dropped'));
  }

  resetBut.addEventListener("click", resetRound);



})();