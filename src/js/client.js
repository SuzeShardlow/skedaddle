console.log('client log!');


$('#journeySubmisssion').on('click', function() {
  var startPoint = $('.input1').val();
  var endPoint = $('.input2').val();

  $.get(`https://api.tfl.gov.uk/Journey/JourneyResults/${startPoint}/to/${endPoint}`)
  .then(data => {
    console.log(data);
  });
});
