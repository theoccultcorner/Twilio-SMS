# Twilio-SMS
Receive SMS text messages from your Website form
Twilio-SMS
This is a simple Node.js project that demonstrates how to send SMS messages using the Twilio API.

Installation
To install this project, clone the repository from GitHub:

git clone https://github.com/theoccultcorner/Twilio-SMS.git

Then, navigate to the project directory and install the dependencies using npm:

cd Twilio-SMS

npm install

npm start

Usage
Before you can use this project, you will need to set up a Twilio account and obtain your Account SID and Auth Token. You will also need to purchase a phone number from Twilio that you can use to send SMS messages.

Once you have your Twilio account set up, create a .env file in the project directory and add your Account SID, Auth Token, and phone number:


TWILIO_ACCOUNT_SID=<your_account_sid>

TWILIO_AUTH_TOKEN=<your_auth_token>

# The phone number where you want to receive messages
TO_PHONE_NUMBER= 

TWILIO_PHONE_NUMBER=<your_twilio_phone_number>

To send an SMS message, run the send-sms.js script with the recipient's phone number and the message as command-line arguments:

Contributing
If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

MIT License

Copyright (c) 2023 TheOccultCorner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
