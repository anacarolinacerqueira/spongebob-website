
	function mapUfba() {
		var location = {lat: -13.000341, lng: -38.507843};
		var map = new google.maps.Map(document.getElementById("map"), {
			zoom: 17,
			center: location
		});
		var marker = new google.maps.Marker({
			position: location,
			map: map,
			animation:google.maps.Animation.DROP	
		})
		var infowindow = new google.maps.InfoWindow({
  			content:"Me encontre aqui!"
			});
			infowindow.open(map,marker); 
	}

	<async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_-iqw4z0FrjDxqDszgQlTTmcp-6Fnb7k&callback=mapUfba">