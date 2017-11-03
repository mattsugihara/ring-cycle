//shows and hides the nav
function toggleNav(){
	document.querySelector('body').classList.toggle('nav-shown');
	document.querySelector('html').classList.toggle('nav-shown');
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
document.querySelector('#hide-nav').addEventListener('click',toggleNav);
document.querySelector('#show-nav').addEventListener('click',toggleNav);