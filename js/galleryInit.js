var gallery;
var galleryNav;
window.onload = function() {
	gallery = new Gallery('gallery', finderlohn);
	galleryNav = new GalleryNav('galleryNav');
	galleryNav.checkURL();
};
