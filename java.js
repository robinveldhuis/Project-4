function rekentool(maandprijs, hoeveelMaand){
	var prijs = maandprijs * hoeveelMaand;
	alert("De kosten zijn: € " + prijs + " bij " + hoeveelMaand + " maanden" )
}
function BEenJaar(){
	
	var a = 5.95 * 12;
	var b = Math.round(a,2)

	alert ("De kosten zijn" + " €" + b + " bij een 1 jarig contract!");
}

function BVijfJaar(){
	
	var a = 5.95 * 60;
	var b = Math.round(a,2)

	alert ("De kosten zijn" + " €" + b + " bij een 5 jarig contract!");
}
function SEenJaar(){
	
	var a = 7.95 * 12;
	var b = Math.round(a,2)

	alert ("De kosten zijn" + " €" + b + " bij een 1 jarig contract!");
}
function SVijfJaar(){
	
	var a = 7.95 * 60;
	var b = Math.round(a,2)

	alert ("De kosten zijn" + " €" + b + " bij een 5 jarig contract!");
}
function GEenJaar(){
	
	var a = 10.95 * 12;
	var b = Math.round(a,2)


	alert ("De kosten zijn" + " €" + b + " bij een  jarig contract!");
}
function GVijfJaar(){
	
	var a = 10.95 * 60;
	var b = Math.round(a,2)

	alert ("De kosten zijn" + " €" + b + " bij een 5 jarig contract!");
}

var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 2000); // Change image every 2 seconds
}