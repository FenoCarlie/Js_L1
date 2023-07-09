function vide() {
        var x1vide = document.getElementById("x1");
            x1vide.setAttribute('value',"");
        var x2vide = document.getElementById("x2");
            x2vide.setAttribute('value',"");
};

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
            
        var resultatx1 = document.getElementById("x1");
        console.log(resultatx1.value);
        resultatx1.setAttribute('value',resx1);
        console.log(resultatx1.value);

        var resultatx2 = document.getElementById("x2");
        console.log(resultatx2.value);
        resultatx2.setAttribute('value',resx2);
        console.log(resultatx2.value);

        document.getElementById('reponse').innerHTML = "";
        }
    }
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