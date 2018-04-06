function initMap() {
    // Map Options
    var options = {
        zoom: 17,
        center: {lat: 42.6994453, lng: 23.3744559}
    }
    // New Map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // ADD marker
    var marker = new google.maps.Marker({
        position: {lat: 42.6994453, lng: 23.3744559},
        map: map
    });

    var infoWindow = new google.maps.InfoWindow({
        content: '<h1>PVC Solutions</h1>'
    });

    marker.addListener('click', function(){
        infoWindow.open(map, marker);
    });
}