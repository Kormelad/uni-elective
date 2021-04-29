'use strict';

const fetch = require('node-fetch'); // node.js

const URL = 'http://www.filltext.com/?rows=10&fname={firstName}&lname={lastName}&pretty=true';

fetch(URL)
  .then(response => { return response.json(); })
  .then(persons => console.log(persons));

(async function() {
  const response = await fetch(URL);
  const result = await response.json();
  console.log(result);
})();

// XMLHttpRequest('http://example.com', (result) => {
//   XMLHttpRequest(`http://example.com/api?as=${result}`, (apiResult) => {
//     console.log(apiResult); //callback hell
//   });
// });
