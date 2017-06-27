var Time = require('./../js/clock.js').timeModule;

$(document).ready(function(){
  var currentTimeObject = new Time();

  var now = moment().format(hh:mm:ss);
  // console.log(now);
  currentTimeObject.getTime(now);
})
