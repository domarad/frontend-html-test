window.onload = function(){
	var inner = document.querySelectorAll('.rating input');
	for (var i = 0; i < inner.length; i++) {
		inner[i].onclick = function(){
			var act = document.querySelectorAll('.rating input.active');
			for (var i = 0; i < act.length; i++) {
				act[i].classList.remove('active');
			}
			this.classList.add('active');
		}
	}
}