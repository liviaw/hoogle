'use strict';
const BootBot = require('./lib/BootBot');

const bot = new BootBot({
    accessToken: 'EAAEHVbsSPc0BAOfnyEOg1t2GjzEaZAmyVK37v8cZCx7WFdNzJZB6ZAgFKoQEZBqa7VIdvhSwZBn1SSQaG6ZBN7V5DbEno1Cr79Gqb01mYZBryKGlAVpC7C1Uut0GiFO1s1isHkehq6aq01Ccv2qLfjZAhqd6kpMMk9qFq1Yx4ndguTZCWmPdZBa7tzPQZBCuL3I9RuAZD',
    verifyToken: 'hoogle',
    appSecret: '33782e8a86bfc6d6c0f975cee74202dd'
  });

// Imports dependencies and set up http server
const
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express().use(bodyParser.json()); // creates express http server

// Sets server port and logs message on success
app.listen(process.env.PORT || 1337, () => console.log('webhook is listening'));

// Creates the endpoint for our webhook 
app.post('/webhook', (req, res) => {  
 
    let body = req.body;
  
    // Checks this is an event from a page subscription
    if (body.object === 'page') {
  
      // Iterates over each entry - there may be multiple if batched
      body.entry.forEach(function(entry) {
  
        // Gets the message. entry.messaging is an array, but 
        // will only ever contain one message, so we get index 0
        let webhook_event = entry.messaging[0];
        console.log(webhook_event);
      });
  
      // Returns a '200 OK' response to all requests
      res.status(200).send('EVENT_RECEIVED');
    } else {
      // Returns a '404 Not Found' if event is not from a page subscription
      res.sendStatus(404);
    }
  
  });

// Adds support for GET requests to our webhook
app.get('/webhook', (req, res) => {

    // Your verify token. Should be a random string.
    let VERIFY_TOKEN = "hoogle";
      
    // Parse the query params
    let mode = req.query['hub.mode'];
    let token = req.query['hub.verify_token'];
    let challenge = req.query['hub.challenge'];
      
    // Checks if a token and mode is in the query string of the request
    if (mode && token) {
    
        // Checks the mode and token sent is correct
        if (mode === 'subscribe' && token === VERIFY_TOKEN) {

        // Responds with the challenge token from the request
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);

        } else {
        // Responds with '403 Forbidden' if verify tokens do not match
        res.sendStatus(403);      
        }
    }
});

////////////////////

bot.on('message', (payload, chat) => {
	const text = payload.message.text;
	console.log(`The user said: ${text}`);
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
	console.log('The user said "hello", "hi", "hey", or "hey there"');
});

bot.hear(['hello', 'hi', /hey( there)?/i], (payload, chat) => {
	// Send a text message followed by another text message that contains a typing indicator
	chat.say('Hello, human friend!').then(() => {
		chat.say('How are you today?', { typing: true });
	});
});

bot.hear(['food', 'hungry'], (payload, chat) => {
	// Send a text message with quick replies
	chat.say({
		text: 'What do you want to eat today?',
		quickReplies: ['Mexican', 'Italian', 'American', 'Argentine']
	});
});

bot.hear(['help'], (payload, chat) => {
	// Send a text message with buttons
	chat.say({
		text: 'What do you need help with?',
		buttons: [
			{ type: 'postback', title: 'Settings', payload: 'HELP_SETTINGS' },
			{ type: 'postback', title: 'FAQ', payload: 'HELP_FAQ' },
			{ type: 'postback', title: 'Talk to a human', payload: 'HELP_HUMAN' }
		]
	});
});

bot.hear('image', (payload, chat) => {
	// Send an attachment
	chat.say({
		attachment: 'image',
		url: 'http://example.com/image.png'
	});
});

bot.hear('ask me something', (payload, chat) => {

	const askName = (convo) => {
		convo.ask(`What's your name?`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('name', text);
			convo.say(`Oh, your name is ${text}`).then(() => askFavoriteFood(convo));
		});
	};

	const askFavoriteFood = (convo) => {
		convo.ask(`What's your favorite food?`, (payload, convo) => {
			const text = payload.message.text;
			convo.set('food', text);
			convo.say(`Got it, your favorite food is ${text}`).then(() => sendSummary(convo));
		});
	};

	const sendSummary = (convo) => {
		convo.say(`Ok, here's what you told me about you:
	      - Name: ${convo.get('name')}
	      - Favorite Food: ${convo.get('food')}`);
      convo.end();
	};

	chat.conversation((convo) => {
		askName(convo);
	});
});

bot.start();

module.exports = BootBot;
