//var request = require('request');
//request('http://www.google.com', function (error, response, body) {
//  if (!error && response.statusCode == 200) {
//    console.log(body); // Print the google web page.
//  }
//});

var colors = require('colors');
console.log('___'.rainbow + ' Bit Buddy Scan '.bold +  '___'.rainbow); // outputs green text
var ContextIO = require('contextio');

var ctxio = new ContextIO.Client({
  key: 'i6zld4eq',
  secret: 'qBfGjP55HVxqIDPx'
});


//ctxio.accounts().get({
//  first_name: 'Catch',
//  last_name: 'All'
//}, function (r) {
//  console.log(r);
//  ctxio.accounts().get({limit: 10}, function (response) {
//    console.log(response);
//  });
//});

ctxio.accounts().get({limit: 15}, function (err, response) {
  if (err) throw err;
  console.log("======= ACCOUNTS ========\n");
  console.log(response.body);
});

//ctxio.accounts('5143451dcea6f99d7a000001').messages().get({limit: 15}, function (err, response) {
//  if (err) throw err;
//  console.log("===============\n");
//  console.log(response.body);
//});

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