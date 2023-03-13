function initMap() {
//ジオコードオブジェクトapiへの問い合わせをするためのオブジェクト
var geocoder = new google.maps.Geocoder();
var address = point_address;
 if (geocoder) {
 geocoder.geocode( { 'address': address,'region': 'jp'},
    function(results, status) {
  if (status == google.maps.GeocoderStatus.OK) {
    map.setCenter(results[0].geometry.location);

   var bounds = new google.maps.LatLngBounds();
   for (var r in results) {
    if (results[r].geometry) {
     var latlng = results[r].geometry.location;
     bounds.extend(latlng);
    new google.maps.Marker({
    position: latlng,map: map
    });

    point_lat = latlng.lat();
    point_lng = latlng.lng();

    }
   }
   //map.fitBounds(bounds);
   }else{
    alert("Geocode 取得に失敗しました reason: "
         + status);
   }
  });
 }
  
  // lat、lngを変数で指定できるようにする
  const uluru = { lat: point_lat, lng: point_lng};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}

window.initMap = initMap;
