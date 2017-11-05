var admin = require('firebase-admin')
  // import * as admin from 'firebase-admin'
var serviceAccount = require("./pickme-1489983377180-firebase-adminsdk-ssowc-13cb6ba118.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://pickme-1489983377180.firebaseio.com"
    // databaseURL: sails.config.firebase.databaseURL
});

module.exports = {
  sendMessage: function(registrationTokens, payload, options) {
    options = options || {
        priority: "high",
        timeToLive: 60 * 60 * 24
      }
      // Send a message to the devices corresponding to the provided
      // registration tokens.
    admin.messaging().sendToDevice(registrationTokens, payload, options)
      .then(function(response) {
        // See the MessagingDevicesResponse reference documentation for
        // the contents of response.
        console.log("Successfully sent message:", response);
      })
      .catch(function(error) {
        console.log("Error sending message:", error);
      });
  }
}

var registrationTokens = [
  "fS0LxxDuySg:APA91bEZ1DOxCuQxzR_tVf0uOMjY7HrkBajODNNEiNXhWpciiAMrQBHSx8SCGo60vLMwoM7pF9--7-PSxppGgXwy38l7cFc8HOsf-ZDB6bJzI48JGZVEEUfkmoG0tGB1xjiWxq4wst97"
];

var payload = {
  notification: {
    title: "$GOOG up 1.43% on the day",
    body: "$GOOG gained 11.80 points to close at 835.67, up 1.43% on the day."
  }
};

admin.messaging().sendToDevice(registrationTokens, payload, {
    priority: "high",
    timeToLive: 60 * 60 * 24
  })
  .then(function(response) {
    // See the MessagingDevicesResponse reference documentation for
    // the contents of response.
    console.log("Successfully sent message:", response);
  })
  .catch(function(error) {
    console.log("Error sending message:", error);
  });