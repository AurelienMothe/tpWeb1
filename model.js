function Drawing () {
    this.shapeList = new Array();
}

function Shape (epaisseur, color) {
    this.epaisseur = epaisseur;
    this.color = color;
}

function Rectangle (topLeftPointX, topLeftPointY, height, width, epaisseur, color) {
    Shape.call(this, epaisseur, color);
    this.topLeftPointX = topLeftPointX;
    this.topLeftPointY = topLeftPointY;
    this.height = height;
    this.width = width;
}
Rectangle.prototype = new Shape();

function Line (startPointX, startPointY, endPointX, endPointY, epaisseur, color) {
    Shape.call(this, epaisseur, color);
    this.startPointX = startPointX;
    this.startPointY = startPointY;
    this.endPointX = endPointX;
    this.endPointY = endPointY;
}
Line.prototype = new Shape();

Drawing.prototype.addShape = function(shape) {
    this.shapeList.push(shape);
}

Rectangle.prototype.getInitX = function() {
    return this.topLeftPointX;
}

Rectangle.prototype.getInitY = function() {
    return this.topLeftPointY;
}

Rectangle.prototype.getFinalX = function() {
    return this.topLeftPointX + this.width;
}

Rectangle.prototype.getFinalY = function() {
    return this.topLeftPointY + this.height;
}

Line.prototype.getInitX = function() {
    return this.startPointX;
}

Line.prototype.getInitY = function() {
    return this.startPointY;
}

Line.prototype.getFinalX = function() {
    return this.endPointX;
}

Line.prototype.getFinalY = function() {
    return this.endPointY;
}

// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
