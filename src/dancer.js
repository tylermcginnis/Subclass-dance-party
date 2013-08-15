var Dancer = function(top, left, timeBetweenSteps){
  this.$node = $('<span class="dancer"></span>');
  this._top = top; 
  this._left = left; 
  this._timeBetweenSteps = timeBetweenSteps;

  this.step(); 
  this.setPosition(this._top, this._left);
}

Dancer.prototype.step = function(){
  var that = this;
  setTimeout(function(){that.step();}, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
