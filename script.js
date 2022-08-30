var btn = document.getElementById("btnEnter");
var txt = document.getElementById("userinput");
var ul = document.querySelector("ul");
var btnDelete = document.getElementsByClassName("btnDelete");
var items = document.getElementsByTagName("li");
var checkbox= document.getElementsByClassName("checkbox");

clickInCheck();
deleteItem();

function createLi(){
	var checkItem = document.createElement("input")
	var item= document.createElement("li");
	var btnDelete = document.createElement("i");
	var div = document.createElement("div");
	
	checkItem.type="checkbox";
	item.appendChild(checkItem);
	item.appendChild(document.createTextNode(txt.value+" "));
	ul.appendChild(item);
	item.appendChild(div);
	div.appendChild(btnDelete);
	btnDelete.innerHTML ="<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-trash3-fill' viewBox='0 0 16 16'> <path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z'/> </svg>"
	btnDelete.className="btnDelete btnStyle";
	checkItem.className="form-check-input checkbox"
	div.className="santoGrial";
	txt.value="";
	
	clickInCheck();
	deleteItem();
}

function enter(event){
	if(txt.value!="" && event.keyCode===13){
		createLi();
	}
}

function addClick(){
	if(txt.value!=""){
		createLi();
	}
}
function remove() {
		this.parentElement.parentElement.remove();
}

function deleteItem(){
	for(var i=0;i<btnDelete.length;i++){
		btnDelete[i].addEventListener("click", remove);
	}
}

function changeColor(){
	this.parentElement.classList.toggle("done");
}

function clickInCheck(){
	for(var i=0;i<checkbox.length;i++){
		checkbox[i].addEventListener("click", changeColor);
	}
}

txt.addEventListener("keypress", enter);
btn.addEventListener("click", addClick);



