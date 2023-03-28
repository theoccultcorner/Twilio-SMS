const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // add this line

dotenv.config(); // add this line

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/send-message', (req, res) => {
  // Get the message body from the form data
  const messageBody =  `"WebSite Form Submitted" \nName: ${req.body.name}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`;

  // Use the values from the .env file
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const toPhoneNumber = process.env.TO_PHONE_NUMBER;
  const fromPhoneNumber = process.env.FROM_PHONE_NUMBER;
  // require the Twilio module and create a REST client
  const client = require('twilio')(accountSid, authToken);

  client.messages
    .create({
      to: toPhoneNumber,
      from: fromPhoneNumber,
      body: messageBody,
    })
    .then(message => {
      console.log('Message sent with SID:', message.sid);
      console.log('Message sent with SID:', message.name);
      console.log('Message sent with SID:', message.phone);
      console.log('Message sent with SID:', message.messageBody);
      res.send('Message sent successfully! Thank you!');


    })
    .catch(error => {
      console.error('Error sending message:', error);
      res.status(500).send('Error sending message');
    });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
