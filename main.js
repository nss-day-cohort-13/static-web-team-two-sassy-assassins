var image;
var name;
var experience;
var biography;
var price;
var divJsInput = document.getElementById("jsInput");
var assassins = [
	{
		image:"imgs/Black-Widow.jpg",
		name: "Natasha Romanoff",
		experience: "25 years",
		biography: "Are you feeling lucky punk man's gotta know his limitations. you see, in this world there's two kinds of people, my friend: those with loaded guns and those who dig. you dig.",
		price: "$250,000"
	},

	{
		image:"imgs/gamora.png",
		name: "Gamora",
		experience: "15 years",
		biography: "Man's gotta know his limitations. this is my gun, clyde! when a naked man's chasing a woman through an alley with a butcher knife and a hard-on, i figure he's not out collecting for the red cross.",
		price: "$150,000"

	},
	{
		image:"imgs/elektra.jpg",
		name: "Elektra",
		experience: "20 years",
		biography:"Well do ya' punk? this is the ak-47 assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, so remember it. You want a guarantee, buy a toaster.",
		price: "$125,000"
	},
	{
		image:"imgs/kiddo.jpg",
		name: "Beatrix Kiddo",
		experience: "12 years",
		biography: "Sometimes you come across somebody you shouldn't have f**ked with? well, i'm that guy. here. put that in your report! and i may have found a way out of here.",
		price: "$55,000"

	},
	{
		image:"imgs/selene.jpg",
		name: "Selene",
		experience: "13 years",
		biography: "well, do you have anything to say for yourself? you see, in this world there's two kinds of people, my friend: those with loaded guns and those who dig. you dig.",
		price: "$75,000"
	},
	{
		image:"imgs/hitgirl.jpg",
		name: '"Hit Girl"',
		experience: "6 years",
		biography: "when a naked man's chasing a woman through an alley with a butcher knife and a hard-on, i figure he's not out collecting for the red cross. this is my gun, clyde!",
		price: "$50,000"
	},
	{
		image:"imgs/aeon.jpg",
		name: "Aeon Flux",
		experience: "",
		biography: "don't p!ss down my back and tell me it's raining. man's gotta know his limitations. what you have to ask yourself is, do i feel lucky. well do ya' punk?",
		price: "$45,000"
	},
	{
		image:"imgs/cherry.jpg",
		name: "Cherry Darling",
		experience: "9 years",
		biography: "What you have to ask yourself is, do i feel lucky. well do ya' punk? this is the ak-47 assault rifle, the preferred weapon of your enemy.",
		price: "$40,000"
	},
	{
		image:"imgs/kyle.jpg",
		name: "Selina Kyle",
		experience: "10 years",
		biography: "When a naked man's chasing a woman through an alley with a butcher knife and a hard-on, i figure he's not out collecting for the red cross.",
		price: "$25,000"
	},
];
console.log(assassins);
for (var i=0; i<assassins.length; i+=1) {
	image= assassins[i].image;
	name= assassins[i].name;
	experience= assassins[i].experience;
	biography= assassins[i].biography;
	price= assassins[i].price;
	divJsInput.innerHTML +=
	"<div class='wholeP'>" + "<img src='" + image + "'/>" +
	"<div class='proContent'>" +
	"<h2 class='nameA'>" + name + "</h2>" +
	"<p>" + experience + "</p>" +
	"<p>" + biography + "</p>" +
	"<p>" + price + "</p>" + "</div>" +
	"</div>";
};



// var assassinCount;




































