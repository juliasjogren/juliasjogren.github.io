import backgammonPicture from "./assets/backgammon.png";
import towergamePicture from "./assets/towergame.png";
import scrabblePicture from "./assets/scrabble.png";
import vetrarbrautinPicture from "./assets/vetrarbrautin.png";

const productData = [
	{
		id: 1,
		name: "Scrabble",
		content:
			"Scrabble is a project made with html, css and Javascript using the framework React.js. It's a take on the classic boardgame scrabble, play with some friends and find out who is the ultimate word champion. the game is still in development and a few bugs may occur  ",
		link: "https://juliasjogren.github.io/pjs-scrabble/",
		picture: scrabblePicture,
		latest: true,
	},
	{
		id: 2,
		name: "Backgammon",
		content:
			"PJ's version af the classic boardgame Backgammon. We made this game mainly because we wanted to improve our skills and thought it was fun to digitalize a boardgame. This project is made with PIXI.js, which was very interesting both to learn more about the creation engine and also get a deeper understanding for how different components of a system work together. There are still a few things to do until its complete but the game is available to play with a friend. Roll the die and use the best tactics to be the one who first get their markers to their home.",
		link: "https://juliasjogren.github.io/pjs-backgammon/",
		picture: backgammonPicture,
		latest: false,
	},
	{
		id: 3,
		name: "Vetrarbrautin",
		content:
			"Vetrarbrautin is a game made by me and three of my classmates during my studies. It can be desribed as a modern version of Space Invaders we made the game in unity with C# for the game and a PHP backend. It was a really fun project to be part of and it gave me a good insight of every part of a project from idea to a finished product. ",
		link: "https://www.facebook.com/Vetrarbrautin/",
		picture: vetrarbrautinPicture,
		latest: false,
	},
	{
		id: 4,
		name: "Tower Game",
		content:
			"PJ's TowerGame is a first attempt to make a RPG tower defence game. It is a prototype of an game idea we have had for a while. This game was made as a way to inspire further ideas and to learn more about building games.  Place your towers on the battlefield and eliminate your enemies. Press the following link to take a look",
		link: "http://pjstowergame.molin.ninja/",
		picture: towergamePicture,
		latest: false,
	},
];

export default productData;
