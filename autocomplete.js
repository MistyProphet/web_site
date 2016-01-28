/**
 * Created by mihailo on 1/27/16.
 */

var placeSearch, autocomplete;
var componentForm = {
    route: 'long_name',
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    var NSBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(45.226503, 19.771409),
        new google.maps.LatLng(45.274352, 19.875883));

    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */(document.getElementById('street')),
        //{types: ['geocode']});
        {
            bounds: NSBounds,
            types: ['address']
        });

    // When the user selects an address from the dropdown, populate the address
    // fields in the form.
    autocomplete.addListener('place_changed', fillInAddress);
}

function fillInAddress() {
    // TODO 1: Validate that the street number exists
    // TODO 2: Check the selected city
    // Get the place details from the autocomplete object.
    //var place = autocomplete.getPlace();
    //
    //document.getElementById('street').value = place.address_components['route']
    //
    //// Get each component of the address from the place details
    //// and fill the corresponding field on the form.
    //console.log(place.address_components)
    //for (var i = 0; i < place.address_components.length; i++) {
    //    var addressType = place.address_components[i].types[0];
    //    if (addressType == 'route') {
    //        var val = place.address_components[i].long_name;
    //        document.getElementById('street').value = val;
    //    }
    //}
}

