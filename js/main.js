(() => {
  // Drag and Drop
  console.log('working!');

  const dropZones = document.querySelectorAll('.drop-zone');

  let draggablePieces = document.querySelectorAll("img");


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
    //   function logKeyCode() {
    //     console.log(this.dataset.key);

    //     let currentAudioClip = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    //     currentAudioClip.play()
    //   }

    //     musicElements.forEach(element => {
    //       element.addEventListener("click", logKeyCode);

    // });


      // let currentAudioClip = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
      // currentAudioClip.play()
      // logKeyCode()

    });
  });

  function logKeyCode() {
    console.log(this.dataset.key);

    let currentAudioClip = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
    currentAudioClip.play()
  }

    musicElements.forEach(element => {
      element.addEventListener("click", logKeyCode);

    });
  });

  // debugger;
//   function logKeyCode() {
//     console.log(this.dataset.key);

//     let currentAudioClip = document.querySelector(`audio[data-key="${this.dataset.key}"]`);
//     currentAudioClip.play()

//   }

//     musicElements.forEach(element => {
//       element.addEventListener("click", logKeyCode);

// });

// Modal begins here


(() => {

  console.log('working!');

  let modalBtn = document.getElementById("modal-button")
  let modal = document.querySelector(".modal")
  let closeBtn = document.querySelector(".close")

  modalBtn.onclick = function(){
    modal.style.display = "block"
  }
  closeBtn.onclick = function(){
    modal.style.display = "none"
  }
  window.onclick = function(e){
    if(e.target == modal){
      modal.style.display = "none"
    }
  }

})();
