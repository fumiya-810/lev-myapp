var geocoder;
var infoWindow = [];
var marker = [];
    var markerData = [
    // マーカーを立てる場所名・緯度・経度
    {
        name: "TAM 東京",
        lat: 35.6954806,
        lng: 139.76325010000005,
    },
    {
        name: "小川町駅",
        lat: 35.6951212,
        lng: 139.76610649999998,
    },
    {
        name: "淡路町駅",
        lat: 35.69496,
        lng: 139.76746000000003,
    },
    {
        name: "御茶ノ水駅",
        lat: 35.6993529,
        lng: 139.76526949999993,
    },
    {
        name: "神保町駅",
        lat: 35.695932,
        lng: 139.75762699999996,
    },
    {
        name: "新御茶ノ水駅",
        lat: 35.696932,
        lng: 139.76543200000003,
    },
];


async function initMap() {
    geocoder = new google.maps.Geocoder();
    //現在地の表示
    // google map へ表示するための設定
    latlng = new google.maps.LatLng(lat, lng);
    map = document.getElementById("map");
    opt = {
        zoom: 12,
        center: latlng,
    };
    // google map 表示
    mapObj = new google.maps.Map(map, opt);
    // マーカーを設定
    marker = new google.maps.Marker({
        position: latlng,
        map: mapObj,
        title: "現在地",
    });

    //ジオコーディング
    var hoge = await codeAddress(spot_address[0]); //spot_addres[0]には千葉市役所の住所
    //console.log(hoge[0]);
    //console.log(hoge[1][0]);

    //周辺にピンたて
    for (var i = 0; i < markerData.length; i++) {
        const image =
            "https://maps.google.com/mapfiles/ms/icons/yellow-dot.png";
            console.log(markerData[1]["name"]);
        markerLatLng = new google.maps.LatLng({
            lat: markerData[i]["lat"],
            lng: markerData[i]["lng"],
        }); // 緯度経度のデータ作成
        marker[i] = new google.maps.Marker({
            // マーカーの追加
            position: markerLatLng, // マーカーを立てる位置を指定
            map: mapObj, // マーカーを立てる地図を指定
            icon: image,
        });
        //吹き出しの追加
        infoWindow[i] = new google.maps.InfoWindow({
           // content: '<div class="sample">' + markerData[i]["name"] + "</div>", // 吹き出しに表示する内容
            content: '<a class="sample" href="/posts/1">' + markerData[i]["name"] + "</a>",
            //hrefのリンクに変数を入れたい
        });

        markerEvent(i); // マーカーにクリックイベントを追加
    }
} //initmap()の閉じカッコ

// マーカーにクリックイベントを追加
function markerEvent(i) {
    marker[i].addListener("click", function () {
        // マーカーをクリックしたとき
        infoWindow[i].open(map, marker[i]); // 吹き出しの表示
    });
}

function codeAddress(a) {
    var geocoder = new google.maps.Geocoder();
    var address = a; //引数で受け取った住所aを変数addressに格納
    if (geocoder) {
            const results = geocoder.geocode({
                'address': address,
                'region': "jp",
            });
            console.log(results.region);
            console.log(typeof results);
            var bounds = new google.maps.LatLngBounds();
            for (var r in results) {
                if (results[r].geometry) {
                    var latlng = results[r].geometry.location;
                    bounds.extend(latlng);
                    let lat = latlng.lat();
                    let lng = latlng.lng();
                    //return文は関数を終了させるので上に移動させた
                    console.log("lat:");
                    console.log(lat);
                    console.log("codeAddressは実行されている");
                    return [lat, lng]; //緯度、経度を配列として返す
                    //return lat;
                    //console.log(a);//リターン文の下だと表示されない
                }
            }
            //map.fitBounds(bounds);
        } else  {
            alert("Geocode 取得に失敗しました reason: ");
        }
}
