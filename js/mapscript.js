
function success(position) {
  var mapcanvas = document.createElement('div');
  mapcanvas.id = 'map-canvas';

  document.querySelector('article').appendChild(mapcanvas);

  var coords = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  
var desat = [
        {
          featureType: "all",
          stylers: [
            { saturation: -66 }
          ]
        },
      ];

  var mapOptions = {
    center: coords,
    zoom: 14,
    styles: desat,
    mapTypeControl: false,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    

  var marker = new google.maps.Marker({
      position: coords,
      map: map,
      title:"You are here!"
  });


   var tenMin = {
      strokeColor: '#FFBB00',
      strokeOpacity: 0.5,
      strokeWeight: 14,
      fillColor: '#FFFFFF',
      fillOpacity: 0.0,
      map: map,
      center: coords,
      radius: 550
    };


    var twentyMin = {
      strokeColor: '#52DB00',
      strokeOpacity: 0.5,
      strokeWeight: 14,
      fillColor: '#FFFFFF',
      fillOpacity: 0.0,
      map: map,
      center: coords,
      radius: 1100
    };

    var thirtyMin = {
      strokeColor: '#01E3FE',
      strokeOpacity: 0.5,
      strokeWeight: 14,
      fillColor: '#FFFFFF',
      fillOpacity: 0.0,
      map: map,
      center: coords,
      radius: 1650
    };
    // Add the circle for this city to the map.
    cityCircleTen = new google.maps.Circle(tenMin);
    cityCircleTwenty = new google.maps.Circle(twentyMin);
    cityCircleThirty = new google.maps.Circle(thirtyMin);


var icons = {
          parking: {
            icon: 'img/ten.png'
          },
          library: {
            icon: 'img/twenty.png'
          },
          info: {
            icon: 'img/thirty.png'
          }
        };


var legend = document.getElementById('legend');
        for (var key in icons) {
          var type = icons[key];
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '">';
          legend.appendChild(div);
        }

        map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
      }




if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success);
} else {
  error('Geo Location is not supported');
}

