# ussd-menu-app
Ussd Menu App - Node.js

To run the application follow the steps below

1. Make sure Node.js is installed
2. Create a directory to hold your application and make it your working directory.
3. Use the $npm init command to create a package.json file for your application.
4. Now install Express in the your directory.
   $ npm install express
5. To easily compose USSD menus in Node.js, compatible with Africastalking API or Hubtel API, add this module
  $npm install ussd-menu-builder
  
  YOUR WORKING ENV IS NOW SET.
  
  .......AFRICA'S TALKING..........
  
  1. Create account with Africa's talking (I'ts freee).
  2. Log in and go to Sandbox.
  3. Select USSD - Create channel
  4. Select a channel and enter callback url (We'll get it from ngrok).
  5. Create channel.
  
  ...........Ngrok...................
  
  1. Download and install  Ngrok
  2. Navigate to the install folder and run it
  3. Set it to connect to the port set on your app js file
  
    eg $ngrok http 5050
  4. Copy the forwarding link (will be your callback url)
  
  ........Back to AT.................
  
  1. Launch simulator
  2. Dial the service code provide by AT
  
  Should be working:)
  
  
    
   
