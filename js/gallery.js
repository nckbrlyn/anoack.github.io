Gallery = function(galID, data) {
	var gallery = document.getElementById(galID);
	var imgAndInfotext = [];
	var galPosition = 0;
	var author;

	// load images and infotext
	loadData = function(data) {
		var img = [];
		var infotext = [];
		if(data.content != null) {
			for( i = 0; i < data.content.length; i++) {
				imgAndInfotext[i] = document.createElement('div');
				imgAndInfotext[i].setAttribute('class', 'galleryImgAndInfotext');

				img[i] = document.createElement('img');
				img[i].setAttribute('src', data.content[i].path);

				// infotext
				infotext[i] = document.createElement('p');
				infotext[i].innerHTML = data.content[i].infotext;
				infotext[i].setAttribute('class', 'galleryInfotext');
				infotext[i].style.display = 'none';
				infotext[i].style.position = 'fixed';
				infotext[i].style.left = '10 px';
				if(data.content[i].infotext == null) {
					infotext[i].innerHTML = data.infotext;
				}

				img[i].onmouseover = function(e) {
					this.parentNode.getElementsByClassName('galleryInfotext')[0].style.left = e.clientX + 10 + 'px';
					this.parentNode.getElementsByClassName('galleryInfotext')[0].style.top = e.clientY + 4 + 'px';
					this.parentNode.getElementsByClassName('galleryInfotext')[0].style.display = 'inline';
					this.onmousemove = function(e) {
						this.parentNode.getElementsByClassName('galleryInfotext')[0].style.left = e.clientX + 18 + 'px';
						this.parentNode.getElementsByClassName('galleryInfotext')[0].style.top = e.clientY + 4 + 'px';
					};
				};
				img[i].onmouseout = function() {
					this.parentNode.getElementsByClassName('galleryInfotext')[0].style.display = 'none';
					this.onmousemove = null;
				};

				imgAndInfotext[i].appendChild(img[i]);
				imgAndInfotext[i].appendChild(infotext[i]);
			}
			// append first image
			gallery.insertBefore(imgAndInfotext[galPosition], buttonsAndCounter);

			// fill author-element
			//author.innerHTML = data.author;
		}
	};
	// image counter
	imageCount = function() {
		return galPosition + 1 + "/" + imgAndInfotext.length;
	};
	// creating gallery and counter
	(function() {
		// insert buttons
		buttonsAndCounter = document.createElement('div');
		buttonsAndCounter.setAttribute('class', 'galleryButtonsAndCounter');
		gallery.appendChild(buttonsAndCounter);
		backwardButton = document.createElement('p');
		backwardButton.style.display = 'inline';
		backwardButton.style.cursor = 'pointer';
		backwardButton.innerHTML = '< ';
		buttonsAndCounter.appendChild(backwardButton);
		forwardButton = document.createElement('p');
		forwardButton.style.display = 'inline';
		forwardButton.style.cursor = 'pointer';
		forwardButton.innerHTML = ' >';
		buttonsAndCounter.appendChild(forwardButton);

		// author
		author = document.createElement('p');
		author.setAttribute('class', 'galleryAuthorInitial')
		gallery.appendChild(author);

		// image loader
		loadData(data);

		// counter
		counter = document.createElement('p');
		counter.style.display = 'inline';
		counter.innerHTML = imageCount();
		buttonsAndCounter.insertBefore(counter, forwardButton);
	})();
	// next image
	forward = function() {
		gallery.removeChild(gallery.getElementsByTagName("div")[0]);
		if(galPosition < imgAndInfotext.length - 1) {
			gallery.insertBefore(imgAndInfotext[++galPosition], buttonsAndCounter);
		} else {
			gallery.insertBefore(imgAndInfotext[0], buttonsAndCounter);
			galPosition = 0;
		}
		counter.innerHTML = imageCount();
	};
	// previous image
	backward = function() {
		gallery.removeChild(gallery.getElementsByTagName("div")[0]);
		if(galPosition > 0) {
			gallery.insertBefore(imgAndInfotext[--galPosition], buttonsAndCounter);
		} else {
			gallery.insertBefore(imgAndInfotext[imgAndInfotext.length - 1], buttonsAndCounter);
			galPosition = imgAndInfotext.length - 1;
		}
		counter.innerHTML = imageCount();
	};
	// change gallery-data
	changeGal = function(newData) {
		// remove/replace old data
		gallery.removeChild(gallery.getElementsByTagName("div")[0]);
		imgAndInfotext = [];
		data = newData;
		// reset position
		galPosition = 0;
		// load new data in gallery
		loadData(data);
		// reset counter
		counter.innerHTML = imageCount();
		for( i = 0; i < imgAndInfotext.length; i++) {
			imgAndInfotext[i].getElementsByTagName("img")[0].addEventListener('click', forward, false);
		}
	};
	// add eventListeners for buttons
	(function() {
		backwardButton.addEventListener('click', backward, false);
		forwardButton.addEventListener('click', forward, false);
		//click in image for forward
		for( i = 0; i < imgAndInfotext.length; i++) {
			imgAndInfotext[i].getElementsByTagName("img")[0].addEventListener('click', forward, false);
		}
	})();
	getAuthor = function() {
		return data.author;
	}
	return {
		changeGal : changeGal
	}
}
