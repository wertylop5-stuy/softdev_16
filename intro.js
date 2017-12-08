var b = document.getElementById("b");
var thelist = document.getElementById("thelist");
var h = document.getElementById("h");

var changeHead = function() {
}

var onClick = function() {
	var item = document.createElement("li");
	item.innerHTML = "New thing";
	
	item.addEventListener("onmouseenter", 
	
	thelist.appendChild(item);
};

b.addEventListener("click", onClick );
