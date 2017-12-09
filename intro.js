var b = document.getElementById("b");
var thelist = document.getElementById("thelist");
var h = document.getElementById("h");

var changeHead = function(e) {
	console.log(this);
	h.innerHTML = this.innerHTML;
}

var onClick = function(e) {
	var item = document.createElement("li");
	item.innerHTML = "New thing";
	
	item.addEventListener("mouseenter", changeHead);
	
	thelist.appendChild(item);
};

b.addEventListener("click", onClick );

//for...in is for object in general, for...of is for arrays
for (let elem of thelist.children) {
	elem.addEventListener("mouseenter", changeHead);
}
