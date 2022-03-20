let cardTemplate = document.getElementById("card-template").textContent;
let cards = document.getElementById("offer-cards");
let arrayToOutput = DATA;

function render() {
	for (let i = 0; i < arrayToOutput.length; i++) {
		if (arrayToOutput[i].action == true)
			arrayToOutput[i].action = '<span class="offer__tags_action offer__tag">Акция -25%</span>';
		else
			arrayToOutput[i].action = "";

		if (arrayToOutput[i].new == true)
			arrayToOutput[i].new = '<span class="offer__tags_new offer__tag">Новинка</span>';
		else
			arrayToOutput[i].new = "";
		
	}
	
	let str = arrayToOutput.map(item => {
		return cardTemplate
			.replace("ID", item.id)
			.replace("ACTION", item.action)
			.replace("NEW", item.new)
			.replace("IMAGE", item.image)
			.replace("DESCRIPTION", item.description)
			.replace("PRICE", item.price)
	}).join(" ");
	cards.innerHTML = str;
}



render();
