var unirest = require("unirest");

var req = unirest("POST", "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi");

req.headers({
	"content-type": "text/plain",
	"x-rapidapi-key": "11a8227713mshdce4817412b6f92p19ef0ejsn937020eeddd5",
	"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
	"useQueryString": true
});

req.send("https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/");


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});







// const req = unirest("POST", "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi");

// req.headers({
// 	"content-type": "text/plain",
// 	"x-rapidapi-key": "11a8227713mshdce4817412b6f92p19ef0ejsn937020eeddd5",
// 	"x-rapidapi-host": "mycookbook-io1.p.rapidapi.com",
// 	"useQueryString": true
// });

// req.send("https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/");


// req.end(function (res) {
// 	if (res.error) throw new Error(res.error);

// 	console.log(res.body);
// });
