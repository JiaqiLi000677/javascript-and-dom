//Task1
let tagline = document.getElementById('tag-line');
let pre = tagline.parentNode.parentNode.parentNode.parentNode;

let main = pre.children[1];

let counter = 0;
var collect = "A Web Designer's Site Launch Checklist\n--------------------------------\n";
let bgMainContent = main.firstElementChild;

while (counter < 14){
	collect += bgMainContent.children[counter].children[0].textContent + "\n";
	counter++;
	
}
alert(collect);

//Task 2
var collect = "When to Launch?\n----------------------\n"
var i = 1;

while (i < 3){
	let temp = bgMainContent.children[12];
	collect += temp.children[i].textContent + "\n\n";
	i++;
}
alert(collect);