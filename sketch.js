var weather = [];
var weatherData;

function preload() {
	weatherData = loadJSON("http://api.openweathermap.org/data/2.5/weather?q=Elon,NC&units=imperial&appid=42396ff80468c90bdbb51462e8b1d530", gotData);
}

function setup() {
	createCanvas(960, 480);
	noStroke();
	fill(255);
}

function draw() {

    background(0);
    var h = hour();
    var m = minute();
    var s = second();
    var suffix = "AM";
    var where = weatherData.name;
    var currentTemp = round(weatherData.main.temp); 
    var j = 1;

    if (h > 12) {
    	h = h - 12;
    	suffix = "PM";
    } else {
    	suffix = "AM";
    }

    if (s < 10) {
    	s = "0" + s;
    }

    textSize(32);
    text(where, 300, 480-100)
    text(h + ":" + m + ":" + s + " " + suffix, 300, 480-40);
    text(currentTemp + "º", 520, 480-40);
}

function gotData() {

	print(weatherData);

}

function showWeather(w) {
	// this properties

	this.display = function (x,y) {
		// what to display and where x,y
	}
}
