/**
 * Created by mihailo on 1/27/16.
 */


$(document).ready(function() {

    var ERROR_BACKGROUND_COLOR = "#ff9999";

    // Sliding down the new options on click
    $("#type label").click(function() {
        $("#time").slideDown("slow", function() {});
    });
    $("#time label").click(function() {
        $("#pay").slideDown("slow", function() {});
    });
    $("#pay label").click(function() {
        $("#inputs").slideDown("slow", function() {});
    });



    // Set the phone input placeholder on click
    $("#phone").focusin(function() {
        $("#phone").attr("placeholder", "06XXXXXXXX");
    });

    // Reset the phone input placeholder on focus out
    // FIXME localization
    // Set the background red if the phone isn't a match
    phone_regex = /^06[0-9]{6,9}$/
    $("#phone").focusout(function() {
        $("#phone").attr("placeholder", "Broj telefona");

        var phone = $("#phone").val();
        if (phone != "") {
            var match = phone.search(phone_regex);
            if (match == -1)
                $("#phone").css({'background-color': ERROR_BACKGROUND_COLOR})
            else
                $("#phone").css({'background-color': "white"})
        }
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
                $("#plates").css({'background-color': ERROR_BACKGROUND_COLOR});
            else
                $("#plates").css({'background-color': 'white'});
        }
    });


    // Text
    // Text filler for the type buttons
    $("#type-radio1").click(function() {
        $("#type-fill").text("motor");});
    $("#type-radio2").click(function() {
        $("#type-fill").text("auto");});
    $("#type-radio3").click(function() {
        $("#type-fill").text("kamion");});
		
    // Text filler for the time buttons
    $("#time-radio1").click(function() {
        $("#time-fill").text("pola sata");});
    $("#time-radio2").click(function() {
        $("#time-fill").text("tri sata");});
    $("#time-radio3").click(function() {
        $("#time-fill").text("par dana");});

    // Text filler for the payment buttons
    $("#pay-radio1").click(function() {
        $("#pay-fill").text("kešom");});
    $("#pay-radio2").click(function() {
        $("#pay-fill").text("karticom");});
    $("#pay-radio3").click(function() {
        $("#pay-fill").text("preko interneta");});

});