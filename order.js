/**
 * Created by mihailo on 1/27/16.
 */


$(document).ready(function() {

    // Set the phone input placeholder on click
    $("#phone").focusin(function() {
        $("#phone").attr("placeholder", "06XXXXXXXX");
    });

    // Reset the phone input placeholder on focus out
    // FIXME localization
    $("#phone").focusout(function() {
        $("#phone").attr("placeholder", "Broj telefona");
    });

    // Set the registration input placeholder on click
    $("#plates").focusin(function() {
        $("#plates").attr("placeholder", "NS-123-AB");
    });

    // Reset the registration placeholder on focus out
    // Set the background red if the plates aren't a match
    licence_regex = /^[a-zA-Z]{2}-?[0-9]{3}-?[a-zA-Z]{2}$/;
    $("#plates").focusout(function() {
        $("#plates").attr("placeholder", "Registracija");

        var licence = $("#plates").val();
        if (licence != "") {
            var match = licence.search(licence_regex);
            if (match == -1)
                $("#plates").css({'background-color': '#ff9999'});
            else
                $("#plates").css({'background-color': 'white'});
        }
    });

});