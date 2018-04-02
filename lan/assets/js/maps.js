function initMap() {
	var mapOptions = {
		zoom: 12,
		zoomControl: false,
		disableDoubleClickZoom: false,
		mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
		},
		scaleControl: true,
		scrollwheel: false,
		panControl: true,
		streetViewControl: false,
		draggable: true,
		overviewMapControl: true,
		overviewMapControlOptions: {
			opened: true,
		},
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		styles: [{
				"featureType": "water",
				"stylers": [{
						"saturation": 43
					},
					{
						"lightness": -11
					},
					{
						"hue": "#0088ff"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [{
						"hue": "#ff0000"
					},
					{
						"saturation": -100
					},
					{
						"lightness": 99
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.stroke",
				"stylers": [{
						"color": "#808080"
					},
					{
						"lightness": 54
					}
				]
			},
			{
				"featureType": "landscape.man_made",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ece2d9"
				}]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [{
					"color": "#ccdca1"
				}]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [{
					"color": "#767676"
				}]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.stroke",
				"stylers": [{
					"color": "#ffffff"
				}]
			},
			{
				"featureType": "poi",
				"stylers": [{
					"visibility": "off"
				}]
			},
			{
				"featureType": "landscape.natural",
				"elementType": "geometry.fill",
				"stylers": [{
						"visibility": "on"
					},
					{
						"color": "#b8cb93"
					}
				]
			},
			{
				"featureType": "poi.park",
				"stylers": [{
					"visibility": "on"
				}]
			},
			{
				"featureType": "poi.sports_complex",
				"stylers": [{
					"visibility": "on"
				}]
			},
			{
				"featureType": "poi.medical",
				"stylers": [{
					"visibility": "on"
				}]
			},
			{
				"featureType": "poi.business",
				"stylers": [{
					"visibility": "simplified"
				}]
			}
		],
	};
	var mapElement = document.getElementById('map');
	var map = new google.maps.Map(mapElement, mapOptions);

	geocoder = new google.maps.Geocoder();
	geocoder.geocode({
		'address': 'Impres B.V.'
	}, function (results, status) {
		if (status == google.maps.GeocoderStatus.OK) {
			map.setCenter(results[0].geometry.location);
			var marker = new google.maps.Marker({
				map: map,
				position: results[0].geometry.location
			});
		} else {
			alert('Geocode was not successful for the following reason: ' + status);
		}
	});

}