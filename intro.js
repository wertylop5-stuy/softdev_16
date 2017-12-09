var b = document.getElementById("b");
var thelist = document.getElementById("thelist");
var h = document.getElementById("h");

var changeHead = function(e) {
    //console.log(this);
    h.innerHTML = this.innerHTML;
};

var resetHead = function(e){
    //console.log(this);
    h.innerHTML = "Hello World!";
};

var onClick = function(e) {
    var item = document.createElement("li");
    item.innerHTML = "item " + thelist.children.length;
	
    item.addEventListener("mouseover", changeHead);
    item.addEventListener("click",removeol);
	
    thelist.appendChild(item);
};

var removeol = function(e){
    this.remove();
}
b.addEventListener("click", onClick );

//for...in is for object in general, for...of is for arrays
thelist.addEventListener("mouseout", resetHead);
for (let elem of thelist.children) {
    elem.addEventListener("mouseover", changeHead);
    elem.addEventListener("click",removeol);
};
