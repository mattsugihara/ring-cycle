//handles hiding/showing and aria-vis labels on resize
function handleScreenSize() {
	if (864 <= window.innerWidth){
		document.querySelector('nav').setAttribute('aria-hidden','false');
		document.querySelector('body').classList.remove('nav-shown');
		document.querySelector('html').classList.remove('nav-shown');
	}

	else if (864 > window.innerWidth){
		hideNav();
	}
}

//hides the nav on click
function hideNav() {
	document.querySelector('nav').setAttribute('aria-hidden','true');
	document.querySelector('body').classList.remove('nav-shown');
	document.querySelector('html').classList.remove('nav-shown');
}

//shows the nav on click
function showNav() {
	document.querySelector('body').classList.add('nav-shown');
	document.querySelector('html').classList.add('nav-shown');
	document.querySelector('nav').setAttribute('aria-hidden','false');
	document.querySelector('nav').focus();
}

//builds the iframe
function buildIframe(videoCode){
	iframe = document.createElement('iframe');
	let src = 'https://youtube.com/embed/'
		+ videoCode
		+ '?showinfo=0&rel=0&iv_load_policy=3&autoplay=1&playsinline=1'
	iframe.setAttribute('src',src);
	iframe.setAttribute('allowfullscreen','1');

	return iframe;
}

//called on click. calls buildIframe and uses it to replace the placeholder
function placeIframe(videoCode) {
	iframe = buildIframe(videoCode);
	target = this.event.target;
	target.parentNode.appendChild(iframe);
	target.parentNode.removeChild(target);
	
}

//decorates placeholder with on click action that calls placeIframe
function setIframeTarget() {
	let placeholders = document.querySelectorAll('.youtube-placeholder');

	for (var i = 0; i < placeholders.length; i++) {
		let videoCode = placeholders[i].dataset.videocode;
		placeholders[i].addEventListener('click',function(){
			event.preventDefault();
			placeIframe(videoCode)
		});
	}
}


setIframeTarget();
handleScreenSize();
document.querySelector('#show-nav').addEventListener('click',function(){
	showNav();
});
document.querySelector('#hide-nav').addEventListener('click',function(){
	hideNav();
});
window.addEventListener('resize',function(){
	window.requestAnimationFrame(handleScreenSize);
})

