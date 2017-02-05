$(document).ready(function() {
	$("#bild_work img").mousemove(function(e) {
		$('#bild_text').css('left', e.clientX + 10);
		$('#bild_text').css('top', e.clientY + 0);
		$('#bild_text').css('display', 'block');
	});
	$("#bild_work").mouseout(function(e) {
		$('#bild_text').css('display', 'none');
	});
})

$(document).ready(function() {
	$("#bild img").mousemove(function(e) {
		$('#bild_text').css('left', e.clientX + 10);
		$('#bild_text').css('top', e.clientY + 0);
		$('#bild_text').css('display', 'block');
	});
	$("#bild").mouseout(function(e) {
		$('#bild_text').css('display', 'none');
	});
})

function bild_show () {
document.images[0].src = "images/test.jpg"
}

function bild_back () {
document.images[0].src = "images/orange.png"
}
