Shape.prototype.paint = function(ctx) {
    ctx.lineWidth = this.epaisseur;
    ctx.strokeStyle = this.color;
};

Rectangle.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this,ctx);
    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    Shape.prototype.paint.call(this,ctx);
    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.shapeList.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};


// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
