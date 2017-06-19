# Crème de la Crème API Wrapper
Crème de la Crème API Wrapper

## Installation
` npm install cdlc_api`

## Uage

```node
var Cdlc = require("./index.js")

var el = new Cdlc('you.email@mail.com', 'password1234');
el.auth()
  .then((res) => {
    // Successfull user login
    console.log('Sucess fully logged');
    el.getFeed()
      .then((feed) => {
      // Get the last missions
        console.log(feed);
      })
      .catch((err) => {
        console.log(err)
      });
  })
  .catch((err) => {
    // Probably invalid mail/pwd combination
    console.log("Can't log")
});
```
