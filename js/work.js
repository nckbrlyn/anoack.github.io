$(document).ready(function() {
	$("#bild_work img").mousemove(function(e) {
		$('#bild_text').css('left', e.clientX + 15);
		$('#bild_text').css('top', e.clientY + 5);
		$('#bild_text').css('display', 'block');
	});
	$("#bild_work").mouseout(function(e) {
		$('#bild_text').css('display', 'none');
	});
})

$(document).ready(function() {
	$("#bild img").mousemove(function(e) {
		$('#bild_text').css('left', e.clientX + 15);
		$('#bild_text').css('top', e.clientY + 5);
		$('#bild_text').css('display', 'block');
	});
	$("#bild").mouseout(function(e) {
		$('#bild_text').css('display', 'none');
	});
})

function bild_show () {
document.images[0].src = "images/01_1_test.jpg"
}

function bild_back () {
document.images[0].src = "images/01_1.png"
}

// Add no-touch class to body for mobile touch events and toggle hover class on elements that need it
	if ("ontouchstart" in document.documentElement) {
		document.documentElement.className += " touch";
	}

	// Add and remove no-hover class to <li>'s for mobile hover events
	jQuery('.touch #container').each(function() {
		var div = jQuery(this);

		div.hover(function() {
			div.removeClass('no-hover');
		});

		jQuery('*').not(div).bind('click', function() {
			div.addClass('no-hover');
		});

	});
