$(document).ready(function() {
	$("#bild_work").mousemove(function(e) {
		$('#bild_text').css('left', e.clientX + 10);
		$('#bild_text').css('top', e.clientY + 0);
		$('#bild_text').css('display', 'block');
	});
	$("#bild_work").mouseout(function(e) {
		$('#bild_text').css('display', 'none');
	});
})


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
  }
  x[slideIndex-1].style.display = "block";
}
