var text = '<html>\r\n  <head>\r\n    <title>New Friends On BitBuddy.com!</title>\r\n  </head>\r\n  <body>\r\n    <table>\r\n      <tr>\r\n        <td colspan="2">\r\n          <h1>BitBuddy!</h1>\r\n          <p>You have 2 new friends on BitBuddy.com!</p>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <p><a href="http://bitbuddy.com/users/hone02">Terrance Lee</a> is now your friend!</p>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <p><a href="http://bitbuddy.com/users/jw">Josh Williams</a> is now your friend!</p>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </td>\r\n        <td>\r\n          <h1>Did you know?</h1>\r\n          <p>You can use BitBuddy to ask for help on your open source\r\n          projects. <a href="http://bitbuddy.com/help/faq#q5">Learn\r\n          more...</a><p>\r\n        </td>\r\n      </tr>\r\n    </table>\r\n  </body>\r\n</html>';

var pattern = new RegExp(/<a href="(.*)">(.*)<\/a>/gm);
while (match = pattern.exec(text)) {
  console.log(match[2] + match[1]);
}

//console.log(pattern.exec(text));
//console.log(pattern.exec(text));
//console.log(pattern.exec(text));

//var result = text.match(pattern);
//console.log(result);
//var result = text.match(pattern);
//console.log(result);