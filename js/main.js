(() => {
  // this is a self invoking anonymous function
  // also called a lambda, if you're into nerd speak
  console.log('working!');

  const dropArea = document.querySelector('#droparea'),
            dropZones = document.querySelectorAll('.drop-zone'),
            synths = document.querySelector('#box1'),
            mainVocals = document.querySelectorAll('#box2'),
            supportVocals = document.querySelector('#box3'),
            guitars = document.querySelector('#box4');

  let draggablePieces = document.querySelectorAll("img");


  draggablePieces.forEach(piece => {
      piece.addEventListener("dragstart", function(e) {
        console.log('dragging..!');

        e.dataTransfer.setData("text/plain", this.id);
    });
  });

  function logKeyCode(event) {
    console.log(event.keyCode);

   let currentKey = document.querySelector(`img[data-key="${event.keyCode}"]`);
  }



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
