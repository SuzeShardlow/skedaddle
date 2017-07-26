$(document).ready(function(){

  $('.location').click = this.value = '';


  console.log('client log!');

  var startPoint;
  var endPoint;
  var url;


  $('#journeydets').submit(function(e) {
    startPoint = $('#origin').val();
    endPoint = $('#destination').val();
    e.preventDefault();

    console.log(startPoint, endPoint);

    url = $.
    get('https://api.tfl.gov.uk/Journey/JourneyResults/' + startPoint + '/to/' + endPoint + '?app_id=fedc9052&app_key=7944db1b32e1272d7c66fb54d54314f4');
    console.log(url);

    // .then(data => {
    //   console.log(data);
    // });
  });
});
