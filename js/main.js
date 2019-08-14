(() => {
  // Drag and Drop 
  console.log('working!');

  const dropZones = document.querySelectorAll('.drop-zone');

  let draggablePieces = document.querySelectorAll("img"),
      resetBut = document.querySelector("#reset"),
      modalBox = document.querySelector("#modal-box");


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


  function resetRound() {
    draggablePieces.reset();
  }

  resetBut.addEventListener("click", resetRound);

  debugger;
//   function logKeyCode() {
//     console.log(this.dataset.key);

//     let currentAudioClip = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
//     currentAudioClip.play()

//   }

//     musicElements.forEach(element => {
//       element.addEventListener("click", logKeyCode);

// });

// Modal begins here



  function popInfoBox() {
    modalBox.classList.add('open-modal-box');
  }


  modalBox.addEventListener("click", popInfoBox)
    // var modal = document.getElementById("modal-box");

    // var btn = document.getElementById("#modal-button img");

    // var span = document.getElementsByClassName("close")[0];

    // btn.onclick = function() {
    //   modal.style.display = "block";
    // }

    // span.onclick = function() {
    //   modal.style.display = "none";
    // }

    // window.onclick = function(event) {
    //   if (event.target == modal) {
    //     modal.style.display = "none";
    //   }
    // }


})();
