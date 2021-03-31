const unirest = require("unirest");
const config = require('../config.js');

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

// const express = require('express');
// const config = require('../config.js');

// app = express();
// const port = 3000;
// //const db = require('pathway');

// app.use(express.static('public'));
// app.use(express.json());

// app.post('https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi', function(req, res) {
//   res.sendStatus(200).send('https://www.jamieoliver.com/recipes/vegetables-recipes/superfood-salad/');
// }
// );