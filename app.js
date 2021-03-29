const express = require('express');
const cors = require('cors');
const axios = require('axios');
const prompt = require('prompt');


const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cors());

app.post("/", (req, res) => {
	const text = req.body.text;
	axios.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&dt=t&q="+text)
	.then(r => {
		res.send({"traducao": r.data[0][0][0]});		
	})
});

app.listen(process.env.PORT || 3001);


