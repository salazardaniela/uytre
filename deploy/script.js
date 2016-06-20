window.addEventListener('resize', initGallery);

window.addEventListener('load', function() {
	initGallery();

	document.getElementById('btn-menu').addEventListener('click', menuMobile, this, false);
	document.getElementById('prev-item').addEventListener('click', moveLeft, this, false);
	document.getElementById('next-item').addEventListener('click', moveRight, this, false);
});

function menuMobile(e) {
	var el = e.currentTarget,
		menu = document.getElementsByClassName('main-sections');

	if (el.classList[0] === 'open') {
		el.classList.remove('open');
		el.classList.add('close');
		menu[0].classList.add('active');
	} else {
		el.classList.remove('close');
		el.classList.add('open');
		menu[0].classList.remove('active');
	}
}

function initGallery() {
	var gallery = document.getElementById('gallery'),
		galleryItems = gallery.getElementsByTagName('li'),
		galleryWrapper = document.getElementsByClassName('gallery-wrapper');

	galleryWrapper[0].style.width = galleryItems.length * window.outerWidth + 'px';
	gallery.style.height = galleryItems[0].offsetHeight + 'px';

	for (var i = 0; i < galleryItems.length; i++) {
		galleryItems[i].style.width = window.outerWidth + 'px';
	}
};

function moveLeft(e) {
	var el = e.currentTarget,
		galleryWrapper = document.getElementsByClassName('gallery-wrapper');
	debugger
	galleryWrapper[0].style.left = (galleryWrapper[0].style.left ? (parseInt(galleryWrapper[0].style.left) + window.outerWidth) : window.outerWidth ) + 'px';
};

function moveRight(e) {
	var el = e.currentTarget,
		galleryWrapper = document.getElementsByClassName('gallery-wrapper'),
		galleryItems = gallery.getElementsByTagName('li'),
		index;

	galleryWrapper[0].style.left = (galleryWrapper[0].style.left ? (parseInt(galleryWrapper[0].style.left) + -(window.outerWidth)) : -window.outerWidth ) + 'px';

	if ((parseInt(galleryWrapper[0].style.width) + parseInt(galleryWrapper[0].style.left)) <= window.outerWidth) {
		if (!index) {
			index = 0;
		}
		galleryWrapper[0].style.width = (parseInt(galleryWrapper[0].style.width) + window.outerWidth) + 'px';
		galleryWrapper[index].appendChild(galleryItems[0].cloneNode(true));
		index++;
	}
};