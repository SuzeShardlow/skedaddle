$(document).ready(function(){

  $('.location').click = this.value = '';

  console.log('client log!');

  var startPoint;
  var endPoint;

  $('#journeydets').submit(function(e) {
    const fixStationName = function(stationName) {
      return stationName.replace(' Underground Station', '');
    };

    startPoint = $('#origin').val();
    endPoint = $('#destination').val();
    e.preventDefault();

    console.log(startPoint, endPoint);

    $.
    get(`https://api.tfl.gov.uk/Journey/JourneyResults/${startPoint}/to/${endPoint}?mode=tube&alternativeWalking=false&alternativeCycle=false&useMultiModal=false&app_id=fedc9052&app_key=7944db1b32e1272d7c66fb54d54314f4`)
    .then(data => {
      if (data && data.journeys) {
        const firstJourney = data.journeys[0];
        let departStation = firstJourney.legs[0].departurePoint.commonName;
        let arriveStation = firstJourney.legs[firstJourney.legs.length -1].arrivalPoint.commonName;

        departStation = fixStationName(departStation);
        arriveStation = fixStationName(arriveStation);

        $('#journeyresults').html(`<h3>${departStation} - ${arriveStation}</h3>`);
        $('#journeyresults').append(`<p>Found ${data.journeys.length} options...</p>`);

        for (let journey of data.journeys) {
          let legsHtml = '';

          for (let journeyLeg of journey.legs) {
            legsHtml += `<li>Take the ${journeyLeg.routeOptions[0].name} line from ${fixStationName(journeyLeg.departurePoint.commonName)} to ${fixStationName(journeyLeg.arrivalPoint.commonName)}, (${journeyLeg.duration} minutes, ${journeyLeg.path.stopPoints.length} stops) -- ${journeyLeg.instruction.detailed}</li>`;
          }

          let journeyHtml = `
          <div>
          <hr>
          <p>${journey.legs.length} legs, ${journey.duration} minutes, departing ${journey.startDateTime}, arriving ${journey.arrivalDateTime}:</p>
          <ul>
          ${legsHtml}
          </ul>
          <button class="saveJourney btn btn-info">Save</button>
          </div>
          `;
          $('#journeyresults').append(journeyHtml);
        }
      }
      console.log(data);
      setTimeout(assignListeners, 1000);
    });






    function assignListeners() {
      $('.saveJourney').on('click', function(e) {
        console.log('clicked');
        var objToSend = {
          journeyInfo: $(e.target).siblings('p')[0].innerHTML,
          journeyDetails: []
        };
        $($(e.target).siblings('ul')[0]).children().each((i, journey) => {
          var info = journey.innerHTML;
          objToSend.journeyDetails.push(info);
        });
        console.log(objToSend);
        $
        .post(`${window.location.origin}/journeyplan`, objToSend)
        .then(data => {
          console.log(data);
        });
      });
    }
  });

});


// Comments form code
//
// <h3>Comments</h3>
//
// <form action="/stations/<%= station._id %>" method="post">
//   <input type="text" name="body">
//   <input type="submit" value="Post Comment">
// </form>
//
// <ul>
//   <% station.comments.forEach(comment => { %>
//     <li>
//     <h7><a href="/users/<%= comment.user._id %>">
//     <%= comment.user.firstname %> <%= comment.user.lastname %></a> on <%= comment.timeCreated %></h7>
//     <p><%= comment.body %></p>
//
//     <% if (comment.user.id === locals.loggedInUser.id) { %>
//       <form action="/stations/<%= station._id %>/comments/<%= comment._id %>" method="post">
//       <input type="hidden" name="_method" value="delete">
//       <input class="btn btn-danger" type="submit" value="Delete Comment">
//       </form>
//       <% } %>
//       </li>
//       <% }) %>
//     </ul>


// Edit and delete buttons
// <a href="/stations/<%= station.id %>/edit" class="btn btn-primary">Edit</a>
// <form method="POST" action="/stations/<%= station.id %>">
//   <input type="hidden" name="_method" value="DELETE">
//   <button class="btn btn-danger">Delete</button>
// </form>


// list users code from journey plan page
//
// <div class="row">
//   <% users.forEach((user) => { %>
//     <div class="col-md-4">
//       <div class="card">
//         <div class="card-block">
//           <h4 class="card-title"><a href="/users/<%= user._id %>"><%= user.firstname %> <%= user.lastname %> <%= user.username %></a></h4>
//           <p class="card-text">
//             <%= user.email %>
//             <%= user.password %>
//           </p>
//         </div>
//       </div>
//     </div>
//   <% }) %>
// </div>

// show stations from user page
//
// <h3>Stations</h3>
// <ul>
//   <% stations.forEach(station => { %>
//     <li><a href="/stations/<%= station._id %>"><%= station.name %></a></li>
//     <% }); %>
//   </ul>

// old homepage info
//
// <h1>Homepage</h1>
// <div class="row">
//   <% if (typeof(user) === 'undefined') { %>
//     <div class="col-md-4">
//     <p>Please log in!</p>
//     </div>
//     <% } else { %>
//       <div class="col-md-4">
//       <div class="card">
//       <div class="card-block">
//       <h4 class="card-title"><a href="/users/<%= user._id %>"><%= user.username %></a></h4>
//       <p class="card-text">
//       <%= user.email %>
//       <%= user.password %>
//       </p>
//       </div>
//       </div>
//       </div>
//       <% } %>
// </div>
// </div>
