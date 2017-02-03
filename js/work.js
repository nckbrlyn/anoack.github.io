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
