var map;
var instaClientId = '3fafe06843184f3d8d3b8166d0b34f03';
var instaRedirectUri = 'http://hr-imp.glennblom.nl/opdracht1/index.html';
var instaAccessToken;
var setCenter = false;

$.add_marker = function(lat, lng, imgUrl) {
    var point = new google.maps.LatLng(lat, lng);
    
    if (!setCenter) {
        map.setCenter(point);
        setCenter = true;
    }
    
    var marker = new google.maps.Marker({
        position: point,
        map: map
    });
    
    var infoWinCont = '<div><img src="' + imgUrl + '" style="max-width: 400px; max-height: 200px;"/><br />' + imgUrl + '</div>';
    var infoWin = new google.maps.InfoWindow({
        content: infoWinCont
        
    });
    
    google.maps.event.addListener(marker,'click', function() {
        infoWin.open(map,marker);
    });
}

$.getUrlParam = function(name) {
    return (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1];
};

$.getUrlHash = function(name) {
    return (RegExp(name + '=' + '(.+?)(&|$)').exec(location.hash)||[,null])[1];
};

$.instagramCheck = function() {
    if ($.getUrlHash('access_token') !== null) {
        localStorage.setItem('instaAccessToken', $.getUrlHash('access_token'));
        instaAccessToken = localStorage.getItem('instaAccessToken');
    } else if (localStorage.getItem('instaAccessToken') !== null) {
        instaAccessToken = localStorage.getItem('instaAccessToken');
    } else {
        var url = 'https://instagram.com/oauth/authorize/?client_id=' + instaClientId + '&redirect_uri=' + instaRedirectUri + '&response_type=token';
        window.location = url;
    }
};

$.getInstaMedia = function(response) {
    var data = response.data;
    for (i = 0; i < data.length; i++) {
        if (data[i].location !== null) {
            var lat = data[i].location.latitude;
            var lng = data[i].location.longitude;
            var imgUrl = data[i].images.standard_resolution.url;
            
            $.add_marker(lat, lng, imgUrl);
        }
    }
};





















//$.add_image = function(src) {
//    $.oImg = new Image();
//    $.oImg.onload = function() {
//        EXIF.getData($.oImg, function() {
//            $.aLat = EXIF.getTag($.oImg, "GPSLatitude");
//            $.aLong = EXIF.getTag($.oImg, "GPSLongitude");
//            
//            if (!($.aLat && $.aLong)) return; // whoops, no GPS info
//  
//            // convert from deg/min/sec to decimal for Google
//            $.strLatRef = EXIF.getTag($.oImg, "GPSLatitudeRef") || "N";
//            $.strLongRef = EXIF.getTag($.oImg, "GPSLongitudeRef") || "W";
//            $.fLat = ($.aLat[0] + $.aLat[1]/60 + $.aLat[2]/3600) * ($.strLatRef == "N" ? 1 : -1);
//            $.fLong = ($.aLong[0] + $.aLong[1]/60 + $.aLong[2]/3600) * ($.strLongRef == "W" ? -1 : 1);
//  
//            // center the google map and add a marker
//            oMarker = new google.maps.Marker({
//                position: new google.maps.LatLng($.fLat, $.fLong),
//                map: map
//            });
//        });
//    }
//    $.oImg.src = src;
//};