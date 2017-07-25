$(document).ready(function(){

  $('.location').click = this.value = '';


  console.log('client log!');

  var startPoint;
  var endPoint;


  $('#journeydets').submit(function(e) {
    startPoint = $('#origin').val();
    endPoint = $('#destination').val();
    e.preventDefault();

    console.log(startPoint, endPoint);

    $.
    get('https://api.tfl.gov.uk/Journey/JourneyResults/${startPoint}/to/${endPoint}')
    .then(data => {
      console.log(data);
    });
  });
});
