function generateCV()
{
    // console.log("generating cv")

    // let name = document.getElementById('name').value;
    // let headingt = document.getElementById('headingt');
    // headingt.innerHTML = name;

    document.getElementById("namet").innerHTML = document.getElementById("namef").value;
    document.getElementById("headingt").innerHTML = document.getElementById("namef").value;
    document.getElementById("contactt").innerHTML = document.getElementById("contactf").value;
    document.getElementById("addresst").innerHTML = document.getElementById("addressf").value;
    document.getElementById("FBt").innerHTML = document.getElementById("FBf").value;
    document.getElementById("instat").innerHTML = document.getElementById("instaf").value;
    document.getElementById("linkedint").innerHTML = document.getElementById("linkedinf").value;

    
    document.getElementById("objtt").innerHTML = document.getElementById("objf").value;
    document.getElementById("wett").innerHTML = document.getElementById("wef").value;
    document.getElementById("aqtt").innerHTML = document.getElementById("aqf").value;

document.getElementById("cvform").style.display="none";
document.getElementById("templet").style.display="block";

}

function printCV(){
window.print();
}

