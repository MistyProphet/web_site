/**
 * Created by mihailo on 1/27/16.
 */


$(document).ready(function() {

    // Set the phone input placeholder on click
    $("#phone").focusin(function() {
        $("#phone").attr("placeholder", "06XXXXXXXX")
    });

    // Reset the phone input placeholder on focus out
    // FIXME localization
    $("#phone").focusout(function() {
        $("#phone").attr("placeholder", "Broj telefona")
    });

    // Set the registration input placeholder on click
    $("#plates").focusin(function() {
        $("#plates").attr("placeholder", "NS-123-AB")
    });
    // Reset the registration placeholder on focus out
    $("#plates").focusout(function() {
        $("#plates").attr("placeholder", "Registracija")
    });

});