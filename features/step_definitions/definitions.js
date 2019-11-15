const { Given, When, Then } = require('cucumber');
const got = require('got');
const assert = require('assert');

var jsonFormat = {
    headers: { 'Content-Type': 'application/json' },
    json: true
};


When(/^send GET request to "([^"]*)", employee name should be "([^"]*)"$/, async function (url, name) {
    let res = await got.get(url);
    let json = JSON.parse(res.body);
    return assert.equal(json.employee_name, name);
});




