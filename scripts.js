console.log ("Hello");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var para = document.querySelector("div");
var lis = document.querySelectorAll("li");
addDeleteButton();

function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";
		// reset the number of items and add button to new item
		lis = document.querySelectorAll("li");
		addDeleteButton();
}

function addListAfterClick(){
	if (inputLength()>0){
		createListElement();
	}
}

function addListAfterKeypress(event){
	if (inputLength()>0 && event.keyCode===13){
		createListElement();
	}
}

button.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

//---------------------------------------

function addDeleteButton(){
	
	for (i=0; i< lis.length; i++){
		//test if button already there
		if (lis[i].children.length<1){
			var delButton  = document.createElement("button");
			delButton.innerHTML="delete";
			lis[i].appendChild(delButton);
			delButton.onclick=deleteEntry;
		}
	}
}


function deleteEntry(event){
var target=event.target;
		target.parentNode.classList.toggle("hideme");
}


ul.onclick=function(event){
	var target=event.target;
	target.classList.toggle("done");
}



function addParagraph(){
	var paragraph = document.createElement("p");
	paragraph.appendChild(document.createTextNode("edward has made a paragraph"));
	para.appendChild(paragraph); //para is a div
}