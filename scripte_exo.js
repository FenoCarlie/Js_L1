// fonction utiliser

function vide() {
        var x1vide = document.getElementById("x1");
            x1vide.setAttribute('value',"");
        var x2vide = document.getElementById("x2");
            x2vide.setAttribute('value',"");
};


function rafraîchir() {
	window.location.reload();
};

//***********************************************************************************************************

// scripte EXO 1

function myFunction() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var Δ = (b * b) - (4 * a * c)
    var x0 = ''
    var x1 = ''
    var x2 = ''

    if (isNaN(a)) {
        alert('a doit etre un nombre')
    } else if ( a == "") {
        alert("a est vide, saisir un nombre");
    }
    else if (isNaN(b)) {
        alert('b doit etre un nombre')
    }else if ( b == "") {
        alert("b est vide, saisir un nombre");
    }
    else if (isNaN(c)) {
        alert('c doit etre un nombre')
    }else if ( c == "") {
        alert("c est vide, saisir un nombre");}
    else {
        if (Δ < 0) {
            alert("Δ= "+ Δ +" < 0 donc pas de solution");
        }
        if (Δ == 0) {
            x0 = (-b) / (2 * a)
            document.getElementById('reponse').innerHTML = "Δ= " +  Δ  + "  donc la solution est:" + "<br> x0= " + x0 + "";
            vide();
        }
        if (Δ > 0) {
            x1 = (-b - (Math.sqrt(Δ))) / (2 * a);
        var resx1 = x1.toFixed(2);
            x2 = (-b + (Math.sqrt(Δ))) / (2 * a);
        var resx2 = x2.toFixed(2);
            
        var resultatx1 = document.getElementById("exo1x1");
        console.log(resultatx1.value);
        resultatx1.setAttribute('value',resx1);
        console.log(resultatx1.value);

        var resultatx2 = document.getElementById("exo1x2");
        console.log(resultatx2.value);
        resultatx2.setAttribute('value',resx2);
        console.log(resultatx2.value);

        document.getElementById('reponse').innerHTML = "";
        }
    }
};


//***********************************************************************************************************

// scripte EXO 2

function getValue() {
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

         if ( a11 == "") {
        alert("a11 est vide, saisir un nombre");
            } else if ( a12 == "") {
        alert("a12 est vide, saisir un nombre");
            } else if ( a13 == "") {
        alert("a13 est vide, saisir un nombre");
            } else if ( a21 == "") {
        alert("a21 est vide, saisir un nombre");
            } else if ( a22 == "") {
        alert("a22 est vide, saisir un nombre");
            } else if ( a23 == "") {
        alert("a23 est vide, saisir un nombre");
            } else if ( a31 == "") {
        alert("a31 est vide, saisir un nombre");
            } else if ( a32 == "") {
        alert("a32 est vide, saisir un nombre");
            }else if ( a33 == "") {
        alert("a33 est vide, saisir un nombre");
            } else if ( b1 == "") {
        alert("b1 est vide, saisir un nombre");
            } else if ( b2 == "") {
        alert("b2 est vide, saisir un nombre");
            } else if ( b3 == "") {
        alert("b3 est vide, saisir un nombre");
        } else {
            tab = [[a11,a12,a13],
           [a21,a22,a23],
           [a31,a32,a33]];

    var delta = a11*((a22*a33)-(a32*a23))-a12*((a21*a33)-(a31*a23))+a13*((a21*a32)-(a31*a22));
    console.log(delta);
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
        }


	
	console.log(tab, delta, Δx1, Δx2, Δx3, x1, x2, x3);

	var resultatx1 = document.getElementById("exo2x1");
	console.log(resultatx1.value);
	resultatx1.setAttribute('value',resx1);
	console.log(resultatx1.value);

	var resultatx2 = document.getElementById("exo2x2");
	console.log(resultatx2.value);
	resultatx2.setAttribute('value',resx2);
	console.log(resultatx2.value);

	var resultatx3 = document.getElementById("exo2x3");
    console.log(resultatx3.value);
    resultatx3.setAttribute('value',resx3);
	console.log(resultatx3.value);
};

//***********************************************************************************************************

// scripte EXO 3

function fonc()
{
    var r1 = document.getElementById("r1").value
    var r2 = document.getElementById("r2").value
    var r3 = document.getElementById("r3").value
    var r4 = document.getElementById("r4").value
    var u = document.getElementById("u").value

    if (isNaN(r1)) {
         alert("R1 doit etre un nombre");
    } else if (r1 == "") {
        alert("R1 est vide, saisir un nombre");
    }
    else if (isNaN(r2)) {
        return alert("R2 doit etre un nombre");
    }else if (r2 == "") {
        alert("R2 est vide, saisir un nombre");

    }else if (isNaN(r3)) {
        return alert("R3 doit etre un nombre");
    }else if (r3 == "") {
        alert("R3 est vide, saisir un nombre");

    }else if (isNaN(r4)) {
        return alert("R4 doit etre un nombre");
    }else if (r4 == "") {
        alert("R4 est vide, saisir un nombre");

    }else if (isNaN(u)) {
        return alert("u doit etre un nombre");
    }else if (u == "") {
        alert("U0 est vide, saisir un nombre");}

        else {
            var i2 = (u / r2)
            var resi2 = i2.toFixed(2)
            var i3 = (u / r3)
            var resi3 = i3.toFixed(2)
            var i1 = (i2 + i3)
            var resi1 = i1.toFixed(2)
            var i4 = (i2 + i3)
            var resi4 = i4.toFixed(2)
            var u2 = i2 * r2
            var resu2 = u2.toFixed(2)
            var u1 = i1 * r1
            var resu1 = u1.toFixed(2)
            var u3 = i3 * r3
            var resu3 = u3.toFixed(2)

            var resultati1 = document.getElementById("i1");
            console.log(resultati1.value);
            resultati1.setAttribute('value',resi1);
            console.log(resultati1.value);

            var resultati2 = document.getElementById("i2");
            console.log(resultati2.value);
            resultati2.setAttribute('value',resi2);
            console.log(resultati2.value);

            var resultati3 = document.getElementById("i3");
            console.log(resultati3.value);
            resultati3.setAttribute('value',resi3);
            console.log(resultati3.value);

            var resultatu1 = document.getElementById("u1");
            console.log(resultatu1.value);
            resultatu1.setAttribute('value',resu1);
            console.log(resultatu1.value); 

            var resultatu2 = document.getElementById("u2");
            console.log(resultatu2.value);
            resultatu2.setAttribute('value',resu2);
            console.log(resultatu2.value);

            var resultatu3 = document.getElementById("u3");
            console.log(resultatu3.value);
            resultatu3.setAttribute('value',resu3);
            console.log(resultatu3.value);
                };
}