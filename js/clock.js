var apiKey = require('./../.env').apiKey;

function Time(){

}

Time.prototype.getTime = function(now) {
  $('.showTime').text("Current time = " + now);
}

exports.timeModule = Time;

// var now = moment();
