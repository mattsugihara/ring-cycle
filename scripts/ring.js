function toggleNav(){
	document.querySelector('body').classList.toggle('nav-shown');
}

document.querySelector('#hide-nav').addEventListener('click',toggleNav);
document.querySelector('#show-nav').addEventListener('click',toggleNav);