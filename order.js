/**
 * Created by mihailo on 1/27/16.
 */


$(document).ready(function() {

    // Set the phone input placeholder on click
    $("#phone").click(function() {
        $("#phone").attr("placeholder", "06XXXXXXXX")
    });

    // Reset the phone input placeholder on click if the input is empty
    // FIXME localization
    $("#phone").focusout(function() {
        $("#phone").attr("placeholder", "Broj telefona")
    });

});