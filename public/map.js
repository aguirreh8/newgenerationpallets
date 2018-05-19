function initMap() {
	const options = {
		center: {lat: 40.717724, lng: -73.910578},
		zoom: 18
	};

	const myDiv = document.getElementById('map');

	const map = new google.maps.Map(myDiv, options);

	const marker = new google.maps.Marker({
		position: options.center,
		map: map
	});

	var infowindow = new google.maps.InfoWindow({
	    content: '<strong>New Generation Pallets Inc</strong> <br /> 57-35 Flushing Ave <br /> Maspeth, NY 11378'
	});
  
	marker.addListener('click', function() {
    	infowindow.open(map, marker);
  	});
}
