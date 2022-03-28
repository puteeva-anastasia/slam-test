/**let cardTemplate = document.getElementById("card-template").textContent;
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

		if (arrayToOutput[i].rec == true)
			arrayToOutput[i].rec = '<span class="offer__tags_rec offer__tag">Рекомендуем</span>';
		else
			arrayToOutput[i].rec = "";

		if (arrayToOutput[i].status == true)
			arrayToOutput[i].status = '<span class="offer__status">В наличии</span>';
		else {
			arrayToOutput[i].status = '<span class="offer__status offer__status-missing">Отсутствует</span>';
		}

		if (arrayToOutput[i].like == true)
			arrayToOutput[i].like = '<button type="button" class="offer__like active" id="like_' + arrayToOutput[i].id + '"></button>';
		else {
			arrayToOutput[i].like = '<button type="button" class="offer__like" id="like_' + arrayToOutput[i].id + '"></button>';
		}

		if (arrayToOutput[i].old == "")
			arrayToOutput[i].old = '<span class="offer__price-old"></span>';
		else {
			arrayToOutput[i].old = '<span class="offer__price-old">' + arrayToOutput[i].old + ' р.</span>';
		}

	}

	let str = arrayToOutput.map(item => {
		return cardTemplate
			.replace("ID", item.id)
			.replace("ACTION", item.action)
			.replace("NEW", item.new)
			.replace("REC", item.rec)
			.replace("LIKE", item.like)
			.replace("IMAGE", item.image)
			.replace("DESCRIPTION", item.description)
			.replace("STATUS", item.status)
			.replace("PRICE", item.price)
			.replace("OLD", item.old)
	}).join(" ");
	cards.innerHTML = str;
}

render();

*/