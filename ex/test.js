var Cdlc = require("./index.js")
var Auth = require("./auth/auth.js");


// Auth.auth('r', 't');
var el = new Cdlc('email', 'password');
el.auth()
  .then((yo) => {
    console.log(yo);
    console.log('Sucess fully logged');
    el.getFeed()
      .then((feed) => {
        console.log(feed);
      })
      .catch((err) => {
        console.log(err)
      });
  })
  .catch((err) => {
    console.log(err);
    console.log("Can't log")
});
