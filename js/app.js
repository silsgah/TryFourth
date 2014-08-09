window.kendoMobileApplication = new kendo.mobile.Application(document.body, { transition: "slide", layout: "tabstrip-layout", skin: "flat" });
var onDeviceReady = function () {
    //window.plugins.socialsharing.share("message", "subject");
  
   
};
document.addEventListener('deviceready', onDeviceReady, false);


function closeModalViewAdd() {
    $("#modalview-add").kendoMobileModalView("close");
}
function reply() {
    window.location.href = '#tabstrip-mainstart';
}
function sharefacebook() {
    window.plugins.socialsharing.shareViaFacebook('Message via Facebook', null, null, function () { console.log('share ok') }, function (errormsg) { alert(errormsg) })

}
function showMap() {
    navigator.geolocation.getCurrentPosition(onSuccessShowMap,onErrorShowMap);
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