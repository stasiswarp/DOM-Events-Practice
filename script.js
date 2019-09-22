var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var delBtns = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value + " "));
	ul.appendChild(li);
	input.value = "";

	//Adding the delete button for each new list item
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("delete");
	li.appendChild(btn);
	btn.addEventListener("click", deleteItem);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function markDone(event) {
	if (event.target.tagName === "LI") {
		event.target.classList.toggle("done");
	}
}

function deleteItem() {
	this.parentNode.remove();
}

for(var i = 0; i < delBtns.length; i++){
	delBtns[i].addEventListener("click", deleteItem);
}

button.addEventListener("click", addListAfterClick);

ul.addEventListener("click", markDone);

input.addEventListener("keypress", addListAfterKeypress);