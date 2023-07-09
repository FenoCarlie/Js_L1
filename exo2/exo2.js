
function getValue()
{
		var a11 = document.getElementById("a11").value;
		var a12 = document.getElementById("a12").value;
		var a13 = document.getElementById("a13").value;
		var a21 = document.getElementById("a21").value;
		var a22 = document.getElementById("a22").value;
		var a23 = document.getElementById("a23").value;
		var a31 = document.getElementById("a31").value;
		var a32 = document.getElementById("a32").value;
		var a33 = document.getElementById("a33").value;	
		var b1  = document.getElementById("b1").value;
		var b2  = document.getElementById("b2").value;
		var b3  = document.getElementById("b3").value;

	tab = [[a11,a12,a13],
		   [a21,a22,a23],
		   [a31,a32,a33]];

	var delta = a11*((a22*a33)-(a32*a23))-a12*((a21*a33)-(a31*a23))+a13*((a21*a32)-(a31*a22));
	if (delta==0){
		console.log ("impossible de faire le calcule car Δ est égal à 0");
		return alert("impossible de faire le calcule car Δ est égal à a 0");
	} else {
		var Δx1 = b1*((a22*a33)-(a32*a23))-a12*((b2*a33)-(b3*a23))+a13*((b2*a32)-(b3*a22));
		var Δx2 = a11*((b2*a33)-(b3*a23))-b1*((a21*a33)-(a31*a23))+a13*((a21*b3)-(a31*b2));
		var Δx3 = a11*((a22*b3)-(a32*b2))-a12*((a21*b3)-(a31*b2))+b1*((a21*a32)-(a31*a22));
		var x1 = Δx1/delta;
		var resx1 = x1.toFixed(2);
		var x2 = Δx2/delta;
		var resx2 = x2.toFixed(2);
		var x3 = Δx3/delta;
		var resx3 = x3.toFixed(2);
	};
	console.log(tab, delta, Δx1, Δx2, Δx3, x1, x2, x3);

	var resultatx1 = document.getElementById("x1");
	console.log(resultatx1.value);
	resultatx1.setAttribute('value',resx1);
	console.log(resultatx1.value);

	var resultatx2 = document.getElementById("x2");
	console.log(resultatx2.value);
	resultatx2.setAttribute('value',resx2);
	console.log(resultatx2.value);

	var resultatx3 = document.getElementById("x3");
	console.log(resultatx3.value);
	resultatx3.setAttribute('value',resx3);
	console.log(resultatx3.value);
};

addEventListener("keypress",
function(event)
{
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("type-here").click();
  }
});

function rafraîchir() {
	window.location.reload();
};