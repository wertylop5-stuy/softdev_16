var b = document.getElementById("b");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var thelist = document.getElementById("thelist");
var thenewlist = document.getElementById("thenewlist");
var thenewerlist = document.getElementById("thenewerlist");
var h = document.getElementById("h");

var changeHead = function(e) {
    //console.log(this);
    h.innerHTML = this.innerHTML;
};

var resetHead = function(e){
    //console.log(this);
    h.innerHTML = "Hello World!";
};

var onWheel = function(e) {
    var item = document.createElement("li");
    if(this.id == "b"){
	if(e.deltaY > 0){
	    item.innerHTML = "item " + thelist.children.length;
	    item.addEventListener("mouseover", changeHead);
	    item.addEventListener("click",removeol);
	    thelist.appendChild(item);
	}
	else{
	    thelist.lastElementChild.remove();
	}
    }
    else if (this.id == "b2"){
	if(e.deltaY > 0){
	    item.innerHTML = fibonacci(thenewlist.children.length);
	    thenewlist.appendChild(item);
	}
	else{
	    thenewlist.lastElementChild.remove();
	}
    }
    else{
	console.log(e.deltaY);
	if(e.deltaY > 0){
	    item.innerHTML = triangle(thenewerlist.children.length);
	    thenewerlist.appendChild(item);
	}
	else{
	    thenewerlist.lastElementChild.remove();
	}
    }
	
};

var onClick = function(e) {
	var item = document.createElement("li");
	
	if(this.id == "b"){
		item.innerHTML = "item " + thelist.children.length;
		item.addEventListener("mouseover", changeHead);
		item.addEventListener("click",removeol);
		thelist.appendChild(item);
	}
	
	else if(this.id == "b2"){
		item.innerHTML = fibonacci(thenewlist.children.length);
	    thenewlist.appendChild(item);
	}
	
	else{
		item.innerHTML = triangle(thenewerlist.children.length);
		thenewerlist.appendChild(item);
    }
};

var triangle = function(n){
    return (n*(n+1))/2;
};

var fibonacci = function(n){

    if(n < 2){
	return 1;
    }

    else{
	return fibonacci(n-1) + fibonacci(n-2);
    }
};

var removeol = function(e){
    this.remove();
}
b.addEventListener("click", onClick );
b.addEventListener("wheel", onWheel );

b2.addEventListener("wheel", onWheel );
b2.addEventListener("click", onClick );

b3.addEventListener("wheel", onWheel );
b3.addEventListener("click", onClick );

//for...in is for object in general, for...of is for arrays
thelist.addEventListener("mouseout", resetHead);
for (let elem of thelist.children) {
    elem.addEventListener("mouseover", changeHead);
    elem.addEventListener("click",removeol);
};
