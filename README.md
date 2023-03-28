# Twilio-SMS
Receive SMS text messages from your Website form
 
# Installation
To install this project, clone the repository from GitHub:
```bash
git clone https://github.com/theoccultcorner/Twilio-SMS.git
```
Then, navigate to the project directory and install the dependencies using npm:
```bash
 cd Twilio-SMS

 npm install

 npm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Usage
Before you can use this project, you will need to set up a Twilio account and obtain your Account SID and Auth Token. You will also need to purchase a phone number from Twilio that you can use to send SMS messages.

Once you have your Twilio account set up, rename the .env.example file to .env in the project directory and add your Account SID, Auth Token, and phone numbers:

 
```bash
.env.example

to

.env
```
Then fill out your information.
```
* TWILIO_ACCOUNT_SID=<your_account_sid>

* TWILIO_AUTH_TOKEN=<your_auth_token>

The phone number where you want to receive messages

* TO_PHONE_NUMBER= <your_phone_number>

* TWILIO_PHONE_NUMBER=<your_twilio_phone_number>
```
Contributing
If you find a bug or have an idea for a new feature, feel free to open an issue or submit a pull request.

 MIT License

 Copyright (c) 2023 TheOccultCorner
  
 [http:/nevarezmarketing.com](http://nevarezmarketing.com)

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
