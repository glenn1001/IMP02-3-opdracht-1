$(window).load(function() {
    var latlon = new google.maps.LatLng(51.89544444444444, 4.524430555555555);
    
    var mapOptions = {
        center: latlon,
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    
    map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    
    $.instagramCheck();
    
    $('#insta_pop').on('click', function() {
        var url = 'https://api.instagram.com/v1/media/popular?format=json&callback=?&access_token=' + instaAccessToken;
        $.getJSON(url, null, $.getInstaMedia);
    });
});

























//var uid;
//var accessToken;
//var name;
//
//window.fbAsyncInit = function() {
//    // init the FB JS SDK
//    FB.init({
//        appId      : '544017825628668', // App ID from the App Dashboard
//        channelUrl : '//hr-imp.glennblom.nl/opdracht1/channel.php', // Channel File for x-domain communication
//        status     : true, // check the login status upon init?
//        cookie     : true, // set sessions cookies to allow your server to access the session?
//        xfbml      : true  // parse XFBML tags on this page?
//    });
//
//    // Additional initialization code such as adding Event Listeners goes here
//    FB.getLoginStatus(function(response) {
//        if (response.status === 'connected') {
//            connected(response);
//        } else if (response.status === 'not_authorized') {
//            not_authorized(response);
//        } else {
//            not_connected(response);
//        }
//    });
//};
//
//// Load the SDK's source Asynchronously
//// Note that the debug version is being actively developed and might 
//// contain some type checks that are overly strict. 
//// Please report such bugs using the bugs tool.
//(function(d, debug){
//    var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//    if (d.getElementById(id)) {
//        return;
//    }
//    js = d.createElement('script');
//    js.id = id;
//    js.async = true;
//    js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
//    ref.parentNode.insertBefore(js, ref);
//}(document, /*debug*/ false));
//
//var connected = function(response) {
//    // the user is logged in and has authenticated your
//    // app, and response.authResponse supplies
//    // the user's ID, a valid access token, a signed
//    // request, and the time the access token 
//    // and signed request each expire
//    uid = response.authResponse.userID;
//    accessToken = response.authResponse.accessToken;
////    console.log(uid);
////    console.log(accessToken);
//    
//    FB.api('/me', function(response) {
//        name = response.name;
//    });
//    
//    $('body').prepend('<a class="button" id="logout">Facebook logout</a>');
//    $('#logout').on('click', function(){
//        FB.logout(function(response) {});
//    });
//    
//    get_images();
//};
//
//var not_authorized = function(response) {
//    // the user is logged in to Facebook, 
//    // but has not authenticated your app
//    $('body').prepend('<a class="button" id="login">Facebook login</a>');
//    $('#login').on('click', function(){
//        FB.login(function(response) {
//            if (response.authResponse) {
//                FB.api('/me', function(response) {
//                    name = response.name;
//                });
//            } else {
//                
//            }
//        }, {
//            scope: 'user_photos'
//        });
//    });
//};
//
//var not_connected = function(response) {
//    // the user isn't logged in to Facebook.
//    $('body').prepend('<a class="button" id="login">Facebook login</a>');
//    $('#login').on('click', function(){
//        FB.login(function(response) {
//            if (response.authResponse) {
//                FB.api('/me', function(response) {
//                    name = response.name;
//                });
//            } else {
//                        
//            }
//        }, {
//            scope: 'user_photos,friends_photos'
//        });
//    });
//};
//
//var get_images = function() {
//    $('body').append('<a class="button" id="get_images">Get images</a>');
//    
//    $('#get_images').on('click', function() {
//        var url = 'https://graph.facebook.com/508376999207993/photos';
//        $.getJSON(url, {
//            access_token: accessToken
//        }, parse_images);
//    });
//};
//
//var parse_images = function(response) {
//    var images = response.data[0].images;
//    for (i = 0; i < images.length; i++) {
//        var image = images[0].source;
//        console.log(image);
//        $('body').append('<img src="' + image + '" />');
//        $.add_image('image.php?url=' + image);
//    }
//}
//
//$.add_image('image.php?url=http://www.gb-webproductions.nl/img1.jpg');
//$.add_image('image.php?url=http://www.gb-webproductions.nl/img2.jpg');
//$.add_image('image.php?url=http://www.gb-webproductions.nl/img3.jpg');
//$.add_image('image.php?url=http://www.gb-webproductions.nl/img4.jpg');
//$.add_image('image.php?url=http://www.gb-webproductions.nl/img5.jpg');