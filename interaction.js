
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.PositionInitialX = 0;
  this. PositionInitialY = 0;
  this.PositionFinalX = 0;
  this.PositionFinalY = 0;
  this.Pressed = false;
	// Developper les 3 fonctions gérant les événements

  // Définie les coordonnées initiales du Drag and Drop
  DnD.prototype.defineInitPosition = function ( evt){
    var init = getMousePosition( canvas,evt);
    this.PositionInitialX = init.x;
    this.PositionInitialY = init.y;
    this.Pressed = true;
    console.log("Position Initiale : ",
        this.PositionInitialX,
        this.PositionInitialY);
  };

  // Renvoie lors du mouvement dce la souris sa position
  DnD.prototype.FollowPosition = function (evt){
    if(this.Pressed){
      var current = getMousePosition(canvas, evt);
      this.PositionFinalX = current.x;
      this.PositionFinalY = current.y;
      console.log("Position courante : ", this.PositionFinalX, this.PositionFinalY);
    };
  };

  // Définie les coordonnées finales du Drag and Drop
  DnD.prototype.defineFinalPosition = function ( evt){
    var final = getMousePosition(canvas,evt);
    this.PositionFinalX = final.x;
    this.PositionFinalY = final.y;
    this.Pressed = false;
    console.log("Position finale : ", this.PositionFinalX, this.PositionFinalY);
  }
	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.defineInitPosition, false);
  canvas.addEventListener('mousemove', this.FollowPosition, false);
  canvas.addEventListener('mouseup', this.defineFinalPosition, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



