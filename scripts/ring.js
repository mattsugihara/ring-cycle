//shows and hides the nav
function toggleNav(){
	document.querySelector('body').classList.toggle('nav-shown');
	document.querySelector('html').classList.toggle('nav-shown');
}

//receives an element and the class of it's desired parent
function getParentNodeByClass(el,className) {
    while (el.parentNode) {
        el = el.parentNode;
        if (el.classList.contains(className)){
            return el;
        }
    }
    return null;
}

//builds the iframe
function buildIframe(videoCode){
	iframe = document.createElement('iframe');
	let src = 'https://youtube.com/embed/'
		+ videoCode
		+ '?showinfo=0&rel=0&iv_load_policy=3&autoplay=1'
	iframe.setAttribute('src',src);
	iframe.setAttribute('allowfullscreen','1');

	return iframe;
}

//called on click. calls buildIframe and uses it to replace the placeholder
function placeIframe(videoCode) {
	iframe = buildIframe(videoCode);
	target = getParentNodeByClass(this.event.target,'leitmotif');
	placeholder = target.querySelector('.leitmotif-placeholder')
	target.removeChild(placeholder);
	target.appendChild(iframe);
}

//decorates placeholder with on click action that calls placeIframe
function setIframeTarget() {
	let leitmotifs = document.querySelectorAll('.leitmotif');

	for (var i = 0; i < leitmotifs.length; i++) {
		let videoCode = leitmotifs[i].dataset.videocode;
		leitmotifs[i].addEventListener('click',function(){
			placeIframe(videoCode)
		});
	}
}


setIframeTarget();
document.querySelector('#hide-nav').addEventListener('click',toggleNav);
document.querySelector('#show-nav').addEventListener('click',toggleNav);