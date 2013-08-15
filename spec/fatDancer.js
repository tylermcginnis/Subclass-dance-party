var FatDancer = function(top, left, timeBetweenSteps){
	Dancer.call(this, top, left, timeBetweenSteps);
};

FatDancer.prototype = Object.create(Dancer.prototype);
FatDancer.prototype.constructor = CrazyDancer;

FatDancer.prototype.step = function(){
	Dancer.prototype.step.call(this);
	this.$node.toggle();
}