[![NPM](https://nodei.co/npm/cdlc_api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/cdlc_api/)

# Crème de la Crème API Wrapper
Crème de la Crème API Wrapper

## Installation
` npm install cdlc_api`

## Usage

```node
var Cdlc = require("cdlc_api")

var cdlc_api = new Cdlc('you.email@mail.com', 'password1234');
cdlc_api.auth()
  .then((res) => {
    // Successfull user login
    console.log('Sucess fully logged');
    cdlc_api.getFeed()
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
