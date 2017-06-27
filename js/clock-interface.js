var Time = require('./../js/clock.js').timeModule;

$(document).ready(function(){
  var currentTimeObject = new Time();

  var now = moment();
  // console.log(now);
  currentTimeObject.getTime(now);
})
