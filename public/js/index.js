// Initialize and add the map
function initMap() {
  // 東京タワーの座標
  const uluru = { lat: 35.6585769, lng: 139.7454506 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
