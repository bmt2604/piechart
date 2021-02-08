var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

ctx.font = "50px Arial";
ctx.fillStyle = "black";
ctx.textAlign = "center";
ctx.textBaseline = "top";
ctx.fillText("What colour is your car?", 375, 25);

var colours = ["yellow", "red", "gray", "black", "white", "blue", "green"];
var data = [31, 67, 89, 104, 100, 102, 34];
var labels = ["yellow", "red", "silver", "black", "white", "blue", "green"];

var startAngle = 0;
var endAngle = 0;

var cx = 250;
var cy = 275;
var r =  150;

var total = 0;

for (var i = 0; i < data.length; i++) {
	total += data[i];
}

for (var i = 0; i < data.length; i++) {
	var p = data[i]/total;
	
	startAngle = endAngle;
	endAngle += percentageToAngle(p);

	ctx.fillStyle = colours[i];
	ctx.beginPath();
	ctx.moveTo(cx, cy);
	ctx.arc(cx, cy, r, startAngle, endAngle);
	ctx.lineTo(cx, cy);
	ctx.stroke();
	ctx.fill();

	theta = labelAngle(startAngle, endAngle);
	x = r * Math.cos(theta);
	y = r * Math.sin(theta);

	ctx.font = "20px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	ctx.fillText((p*100).toFixed(2) + "%", cx + x * 1.25, cy + y * 1.25);
	
	ctx.fillStyle = colours[i];
	ctx.fillRect(700, 450 - i*25, 25, 25);
	ctx.strokeRect(700, 450 - i*25, 25, 25);
	
	ctx.font = "20px Arial";
	ctx.fillStyle = "black";
	ctx.textAlign = "right";
	ctx.textBaseline = "middle";
	ctx.fillText(labels[i], 675, 462.5 - i*25);
}

function labelAngle(angle1, angle2) {
	return (Math.abs(angle1 - angle2)/2)+angle1;
}

function percentageToAngle(percentage) {
	return 2 * Math.PI * percentage;
}