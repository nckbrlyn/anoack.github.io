$(document).ready(function() {
	$("#bild_work").mousemove(function(e) {
		$('#bild_text').css('left', e.clientX + 20);
		$('#bild_text').css('top', e.clientY + 5);
		$('#bild_text').css('display', 'inline');
	});
	$("#bild_work").mouseout(function(e) {
		$('#bild_text').css('display', 'none');
	});
})
