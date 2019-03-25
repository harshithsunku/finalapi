var client = require('flipkart-api-affiliate-client');
var details = require('../details');
var fkClient = new client({
  trackingId:details.trackingId,
  token:details.token,
},"json");

module.exports = fkClient;