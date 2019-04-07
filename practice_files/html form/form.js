var ratings = [1,2,3,4,5];
var selectedStar;
ratings.forEach(rating => {
	document.write(`
		
			<span class="fa fa-star ${rating}" id=${rating} title=${rating} onclick="javascript:onClick(event);"/>
		
	`);
});

var onClick = function rate(event) {
	 selectedStar = event.target.title;
	 html = document.getElementById("rating");
	 html.innerHTML = selectedStar;

	for(var i = 1; i <= 5; i++) {
		var selected = document.getElementById(i);
		if(i <= selectedStar) {
			selected.classList.add("checked");
		} else {
			selected.classList.remove("checked");
		}
		
	}
};