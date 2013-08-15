var CrazyDancer = function(top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

CrazyDancer.prototype.step = function(){
	Dancer.prototype.step.call(this);
	this.$node.toggle();
};