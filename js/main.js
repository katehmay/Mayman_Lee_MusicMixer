(() => {
  // this is a self invoking anonymous function
  // also called a lambda, if you're into nerd speak
  console.log('working!');


  const dropAreas = document.querySelectorAll('.drop-zone');
            synths = document.querySelectorAll('#box1'),
            mainVocals = document.querySelectorAll('#box2'),
            supportVocals = document.querySelectorAll('#box3');

  let draggablePieces = document.querySelectorAll("img");

  
  function switchImage() {
		console.log(this);
	}

	mainVocals.forEach(mainvo => { mainvo.addEventListener("click", switchImage); });

  draggablePieces.forEach(piece => {
      piece.addEventListener("dragstart", function(e) {
        console.log('drag!');

        e.dataTransfer.setData("text/plain", this.id);
    });
  });

  dropAreas.forEach(area => {
    area.addEventListener("dragover", function(e) {
        e.preventDefault();
        console.log('drag is working');
    });

    area.addEventListener("drop", function(ev) {
        e.preventDefault();
        console.log('drop is working!');

      let dragElement = e.dataTranfer.getData("text/plain");
      console.log('you drgged: ', dragElement);

      e.target.appendChild(document.querySelector(`#${dragElement}`));
    
    });
  });

})();
