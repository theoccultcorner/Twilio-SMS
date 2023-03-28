# Twilio-SMS
Receive SMS text messages from your Website form
Twilio-SMS
This is a simple Node.js project that demonstrates how to send SMS messages using the Twilio API.

Installation
To install this project, clone the repository from GitHub:

bash
Copy code
git clone https://github.com/theoccultcorner/Twilio-SMS.git
Then, navigate to the project directory and install the dependencies using npm:

bash
Copy code
cd Twilio-SMS
npm install
Usage
Before you can use this project, you will need to set up a Twilio account and obtain your Account SID and Auth Token. You will also need to purchase a phone number from Twilio that you can use to send SMS messages.

Once you have your Twilio account set up, create a .env file in the project directory and add your Account SID, Auth Token, and phone number:

makefile
Copy code
TWILIO_ACCOUNT_SID=<your_account_sid>
TWILIO_AUTH_TOKEN=<your_auth_token>
TWILIO_PHONE_NUMBER=<your_twilio_phone_number>
To send an SMS message, run the send-sms.js script with the recipient's phone number and the message as command-line arguments:

perl
Copy code
node send-sms.js +1234567890 "Hello, World!"
Contributing
If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
