GalleryNav = function(navID) {
	var galleryLinks = document.getElementById(navID).getElementsByTagName('a');
	checkURL = function() {
		setTimeout(function() { // think about a more elegant way...
			var url = document.URL;
			var pattern = /#/;
			try {
				if(pattern.test(url)) {
					galID = url.substr(url.match(pattern).index + 1);
					gallery.changeGal(window[galID]);
				}
			} catch(e) {
				// get back to home if gallery does not exist
				window.location = "index.html";
			}
		}, 100);
	};
	// add event listeners
	(function() {
		for( i = 0; i < galleryLinks.length; i++) {
			galleryLinks[i].addEventListener('mouseup', checkURL, false);
		}
	})();

	return {
		checkURL : checkURL
	};
};
