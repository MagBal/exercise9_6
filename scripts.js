var list = document.getElementById('list');
var add = document.getElementById('addElem');

var number = 1;
add.addEventListener('click',function(e){
	var element = document.createElement('li');
	element.innerHTML = 'item ' + number;
	number++;	
	list.appendChild(element);
});