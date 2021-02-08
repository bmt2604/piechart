var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 500, 500);

var colours = ["pink", "white", "blue", "purple", "green", "yellow", "black"];
var angles = [0.1*Math.PI, 0.2*Math.PI, 0.3*Math.PI, 0.4*Math.PI, 0.5*Math.PI, 0.5*Math.PI]

var startAngle = 0;
var endAngle = 0;

var cx = 250;
var cy = 250;
var r =  150;

for (var i = 0; i < angles.length; i++) {
	startAngle = endAngle;
	endAngle += angles[i];

	ctx.fillStyle = colours[i];
	ctx.beginPath();
	ctx.moveTo(cx, cy);
	ctx.arc(cx, cy, r, startAngle, endAngle);
	ctx.lineTo(cx, cy);
	ctx.stroke();
	ctx.fill();

	theta = labelAngle(startAngle, endAngle);
	x = r * Math.cos(theta)
	y = r * Math.sin(theta)

	ctx.font = "20px Arial";
	ctx.fillStyle = colours[i];
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText(percentage(startAngle, endAngle) + "%", cx + x * 1.25, cy + y * 1.25);
}

function labelAngle(angle1, angle2) {
	return (Math.abs(angle1 - angle2)/2)+angle1;
}

function percentage(angle1, angle2) {
	return ((Math.abs(angle1 - angle2) * 100)/(2 * Math.PI)).toFixed(2);
}