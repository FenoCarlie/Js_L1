function fonc()
{
    var r1 = document.getElementById("r1").value
    var r2 = document.getElementById("r2").value
    var r3 = document.getElementById("r3").value
    var u0 = document.getElementById("u0").value
/*    var i2 = ""
    var i3 = ""
    var i1 = ""
    var u1 = ""
    var u2 = ""
    var u3 = ""*/
    if (isNaN(r1) || r1 == "") {
        console.log ("R1 doit etre un nombre");
        return alert("R1 doit etre un nombre");
    }
    else if (isNaN(r2)|| (r2 == "")) {
        console.log ("R2 doit etre un nombre");
        return alert("R2 doit etre un nombre");
    }
    else if (isNaN(r3) || (r3 == "")) {
        console.log ("R3 doit etre un nombre");
        return alert("R3 doit etre un nombre");
    }
    else if (isNaN(u0) || (u0 == "")) {
        console.log ("u0 doit etre un nombre");
        return alert("u0 doit etre un nombre");
    }

    else {
    var i2 = (u0 / r2)
    var resi2 = i2.toFixed(2)
    var i3 = (u0 / r3)
    var resi3 = i3.toFixed(2)
    var i1 = (i2 + i3)
    var resi1 = i1.toFixed(2)
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
        }
};

function rafraîchir() {
    window.location.reload();
};

addEventListener("keypress",
function(event)
{
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("type-here").click();
  }
});