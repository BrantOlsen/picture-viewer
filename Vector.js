//mutator methods are suffixed with _
function Vector(x,y,z) 
{ 
	this.x = x || 0; 
	this.y = y || 0; 
	this.z = z || 0; 
	this.copy    = function() { return new Vector(this.x, this.y, this.z) }
	this.add     = function(v) { return this.copy().add_(v) }
	this.add_    = function(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this}
	this.sub     = function(v) { return this.copy().sub_(v) }
	this.sub_    = function(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this}
	this.round_  = function() { this.x=Math.round(this.x); this.y = Math.round(this.y); this.z=Math.round(this.z); return this }
	this.round   = function() { return this.copy().round_() }
	this.scale   = function(s) { return this.copy().scale_(s) }
	this.scale_  = function(s) { this.x *= s; this.y *= s; this.z *= s; return this }
	this.dot     = function(v) { return this.x * v.x + this.y * v.y + this.z * v.z }
	this.norm    = function(v) { return this.copy().scale(1/this.mag()) }
	//project self in direction of v
	this.proj    = function(v) { return v.scale(this.dot(v)/v.selfdot());}
	this.selfdot = function() { return this.dot(this) }
	this.sumOfSquaresTo = Vector.prototype.selfdot
	this.mag     = function() { return Math.sqrt(this.selfdot()) }
	this.rotate_ = function(ang, rads) 
	{
		if (!rads) ang = ang*Math.PI/180
		var cos=Math.cos(ang), sin=Math.sin(ang), x=this.x, y=this.y;
		this.x = cos*x - sin*y;
		this.y = cos*y + sin*x;
		return this;
	}
	this.toString = function() { return "(" + this.x + "," + this.y + "," + this.z + ")"; }
}