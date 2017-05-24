(function(){
		var drop = document.getElementById('drop');
		
		drop.ondragover = function(){
			this.className = 'drop dragover';
			return false;
		}
}());