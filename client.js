#!/usr/bin/env node

var Dropbox = require('dropbox');

var client = new Dropbox.Client({
    key: "2bw2layqykrv8zh",
    secret: "fjyu20nv5a1vnae",
    sandbox: false
});

client.authenticate(function(error, client) {
  console.log('connected...');
  console.log('token ', client.oauth.token);       // THE_TOKEN
  console.log('secret', client.oauth.tokenSecret); // THE_TOKEN_SECRET

  // Replace with a call to your own application code.
  //
  // The user authorized your app, and everything went well.
  // client is a Dropbox.Client instance that you can use to make API calls.
 // doSomethingCool(client);
});
