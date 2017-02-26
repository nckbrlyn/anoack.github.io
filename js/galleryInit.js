var gallery;
var galleryNav;
window.onload = function() {
	gallery = new Gallery('gallery', '#');
	galleryNav = new GalleryNav('galleryNav');
	galleryNav.checkURL();
};
