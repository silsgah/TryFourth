window.kendoMobileApplication = new kendo.mobile.Application(document.body, { transition: "slide", layout: "tabstrip-layout", skin: "flat", platform: "android" });
document.addEventListener('deviceready', onDeviceReady, false);
var onDeviceReady = function () {
    navigator.splashscreen.hide();
    checkconnection();
};
 function checkconnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    if (states[networkState] == 'No network connection') {
        navigator.notification.alert('Connection type: ' + states[networkState]);
        $("#error-view").show().data().kendoMobileModalView.open();
    }
 }
 function sendmail() {
     window.plugin.email.open({
         to:      ['max.mustermann@appplant.de'],
         cc:      ['erika.mustermann@appplant.de'],
         bcc:     ['john.doe@appplant.com', 'jane.doe@appplant.com'],
         subject: 'Greetings',
         body:    'How are you? Nice greetings from Leipzig'
     });
 }
function mobileListViewPullToRefresh(e) {
    setTimeout(function () {
     $("#pull-to-refresh-listview").kendoMobileListView({
        pullToRefresh: true
    });
    }, 2000);
}

function onShow() {
    var seconds = 5;
    window.kendoMobileApplication.showLoading();
    window.kendoMobileApplication.changeLoadingMessage( " seconds left!");
    setTimeout(function () { onhide() }, 3000);
}
function onhide() {
    window.kendoMobileApplication.hideLoading();; //show loading animation
}
function closeModalViewAdd() {
    $("#modalview-add").kendoMobileModalView("close");
}
function reply() {
    window.location.href = '#tabstrip-mainstart';
}
function sharefacebook() {
    window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null, null, function () { console.log('share ok') }, function (errormsg) { alert(errormsg) });
}
function sharetwitter() {
    window.plugins.socialsharing.shareViaTwitter('Message via Twitter');
}
function sendsms() {
    window.plugins.socialsharing.shareViaSMS('Give us your message', '233268468627', function (msg)
    { console.log('ok: ' + msg) },
    function (msg)
    { alert('error: ' + msg) })
}
function sharemail() {
    window.plugins.socialsharing.shareViaEmail(
   'Message',
   'Subject',
   ['info@averyscottgh.con'], // TO: must be null or an array
   ['cc@person1.com'], // CC: must be null or an array
   null, // BCC: must be null or an array
   ['https://www.google.nl/images/srpr/logo4w.png', 'www/localimage.png'], // FILES: can be null, a string, or an array
   onSuccess, // called when sharing worked, but also when the user cancelled sharing via email (I've found no way to detect the difference)
   onError // called when sh*t hits the fan
 );
}

function showMap() {
    navigator.geolocation.getCurrentPosition(onSuccessShowMap, onErrorShowMap);
}
function onErrorShowMap(error) {
    alert(error);
}
function onSuccessShowMap(position) {

    //var latlng = new google.maps.LatLng(
    //position.coords.latitude,
    //position.coords.longitude);
    var latlng = new google.maps.LatLng(36.9759254, -121.9533386);
   
    var mapOptions = {
        sensor: true,
        center: latlng,
        panControl: false,
        zoomControl: true,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: true,
    };

    var map = new google.maps.Map(
    document.getElementById('map_canvas'),
    mapOptions
    );

    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });
    console.log(marker);
    console.log("map rendering");
}