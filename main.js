/**
 * BitBuddy.com Friend Notification Scanner
 * By Enrique Delgado (delgado.enrique@gmail.com)
 */

// Node modules being used:
var _ = require('underscore');
var colors = require('colors');
var ContextIO = require('contextio');

// Howdy ContextIO
var ctxio = new ContextIO.Client({
  key: 'i6zld4eq',
  secret: 'qBfGjP55HVxqIDPx'
});

/*
// Handle the errors safely
process.on('uncaughtException', function (err) {
  console.log(err);
});
*/

// Pattern to find friends.
var rPattern = new RegExp(/<a href="(.*)">(.*)<\/a>/gm);

function parseMessages(accountId) {
  // Params for fetching messages from ContextIO
  var parameters = {
    subject: "New Friends On BitBuddy.com!",
    from: "no-reply@bitbuddy.com",
    include_body: 1
  };

  // Get messages from ContentIO
  ctxio.accounts(accountId).messages().get(parameters, function (err, response) {
    if (err) throw err;
    _.each(response.body, function (msg, index, list){
      //console.log(msg);
      _.each(msg.body, function (body, index, list){
        //console.log(body.content.cyan);
        while (match = rPattern.exec(body.content)) {
          console.log(match[2].cyan + ' ' + match[1].yellow.underline);
        }
      });
    });
  });
}

// Entry point:
console.log('___'.rainbow + ' Bit Buddy Scan '.bold +  '___'.rainbow);

// Find the ContextIO account:
ctxio.accounts().get({limit: 1, email:'engtestrp@gmail.com'}, function (err, response) {
  if (err) throw err;
  if (response.body.length === 0) throw (new Error('Error fetching ContextIO account. Stopping.'));
  console.log('\nHowdy ' + response.body[0].first_name.green + ' ' + response.body[0].last_name.green + '! Here are your BitBuddy.com requests:\n');
  parseMessages(response.body[0].id);
});

//ctxio.accounts('5143451dcea6f99d7a000001').messages().get({limit: 15}, function (err, response) {
//  if (err) throw err;
//  console.log("===============\n");
//  console.log(response.body);
//});

/*
ctxio.accounts('5143451dcea6f99d7a000001').messages().get({limit: 15, include_body: 1}, function (err, response) {
  if (err) throw err;
  console.log("====== MESSAGES =========\n");
  console.log(response.body);
});

ctxio.accounts('5143451dcea6f99d7a000001').messages('520e9ebe8168d96637000002').body().get({}, function (err, response) {
  if (err) throw err;
  console.log("======= BODY ========\n");
  console.log(response.body);
});

ctxio.accounts('5143451dcea6f99d7a000001').messages('520e9ebe8168d96637000006').body().get({}, function (err, response) {
  if (err) throw err;
  console.log("======= BODY ========\n");
  console.log(response.body);
});

ctxio.accounts('5143451dcea6f99d7a000001').messages('520e9ebe8168d96637000001').body().get({}, function (err, response) {
  if (err) throw err;
  console.log("======= BODY ========\n");
  console.log(response.body);
});

ctxio.accounts('5143451dcea6f99d7a000001').messages('520e9ebe8168d96637000004').body().get({}, function (err, response) {
  if (err) throw err;
  console.log("======= BODY ========\n");
  console.log(response.body);
});
  */