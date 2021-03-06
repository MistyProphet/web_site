/**
 * Created by mihailo on 1/27/16.
 */


$(document).ready(function() {

    var ERROR_BACKGROUND_COLOR = "#ff9999";
	
	
	// Izracunava vreme i da li je potrebno "zatvoriti" sajt
	var dateNow = new Date();
	var dateItHappens = new Date();
	dateItHappens.setFullYear(dateNow.getFullYear());
	dateItHappens.setMonth(dateNow.getMonth());
	dateItHappens.setDate(dateNow.getDate());
	dateItHappens.setHours(20);
	dateItHappens.setMinutes(0);
	dateItHappens.setSeconds(0);
	dateItHappens.setMilliseconds(0);
	var millisTillOccurence = dateItHappens.getTime() - dateNow.getTime();
	//setTimeout(function(){ 
			//$('#closed').toggle();
			//$('#wash_holder_id').toggle();
			//$('#info_holder_id').toggle();
		//}, millisTillOccurence);
	
	
	// Funkcija koja prikazuje popover sa greskom
	$('[data-toggle="popover"]').popover();
	
	validate = function() {
		if(allFilled()) 
		{
			if(typeof $('input[name=color-radio]:checked').val() !== 'undefined')
			{
				$('#register').popover('disable')
				// Ovde uraditi redirect na server i poslati formu?
				// document.getElementById('frm').submit();
				// Da li je potrebno dodati href="#" u a tag za slanje forme?
				return true;
				// UKOLIKO PRETHODNO NE RADI, PROBATI SA OVIM!!!
				/*
				$("#AddItem").click(function(event)
				  {
					event.preventDefault(); // cancel default behavior

					//... rest of add logic
				  });
				*/
			}
			else
			{
				$('#register').popover('enable')
				return false;
			}
		}
		else 
		{
			$('#register').popover('enable')
			return false;
		}
	}
	
	activate = function() {
		var filled = true;
		$('body input').each(function() {
			if($(this).val() == '')
			{	
				filled = false;
			}
		});
		if(filled) 
		{
			$('#code_confirm').popover('disable')
			return true;
		}
		else 
		{
			$('#code_confirm').popover('enable')
			return false;
		}
	}
	
	// Funkcija koja proverava da li su sva polja ispunjena
	$('#plates, #phone, #city_select, #street, #street_number, #app_num').bind('keyup', function() {
		if(allFilled()) 
		{
			if(typeof $('input[name=color-radio]:checked').val() !== 'undefined')
			{
				$('#register').popover('disable')
			}
			else
			{
				$('#register').popover('enable')
			}
		}
		else 
		{
			$('#register').popover('enable')
		}
	});
	$('#activation_code').bind('keyup', function() {
		activate();
	});
	function allFilled() {
		var filled = true;
		$('body input').each(function() {
			if($(this).val() == '')
			{	
				if(this.id === 'app_num') {
					
				}
				else 
				{
					filled = false;
				}
			}
		});
		var ok = checkIsPhoneValid();
		if (ok)
		{
			$("#phone").css({'background-color': "white"})
		}
		else
		{
			filled = false;
		}
		var ok = checkIsPlateValid();
		if (ok)
		{
			$("#plates").css({'background-color': "white"})
		}
		else
		{
			filled = false;
		}
		return filled;
	}
	$( "input[name='color-radio']" ).on(
        {
          'change' : function( )
                     {
                       $.each( $( "input[name='color-radio']" ),
                               function( )
                               {
									if(allFilled()) 
									{
										if(typeof $('input[name=color-radio]:checked').val() !== 'undefined')
										{
											$('#register').popover('disable')
										}
										else
										{
											$('#register').popover('enable')
										}
									}
									else 
									{
										$('#register').popover('enable')
									}
                               }
                             );
                     }
        }
     );

    // Sliding down the new options on click
    $("#type label").click(function() {
        $("#time").slideDown("slow", function() {
			$('html, body').animate({
				scrollTop: $("#time").offset().top - ($("#time").height())
			}, 2000);
		});
    });
    $("#time #time1").click(function() {
        $("#pay").slideDown("slow", function() {
			$('html, body').animate({
				scrollTop: $("#pay").offset().top - ($("#pay").height())
			}, 2000);
		});
    });
    $("#time #time2").click(function() {
        $("#pay").slideDown("slow", function() {
			$('html, body').animate({
				scrollTop: $("#pay").offset().top - ($("#pay").height())
			}, 2000);
		});
    });
    $("#pay #cash").click(function() {
        $("#inputs").slideDown("slow", function() {
			document.getElementById("info_back").style.visibility = "visible";
			$('html, body').animate({
				scrollTop: $("#inputs").offset().top - ($("#pay").height())
			}, 2000);
			$("#receipt_holder").slideDown("slow", function() {
			});
			$("#receipt").slideDown("slow", function() {
			});
		});
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
            var ok = checkIsPhoneValid();
            if (ok)
                $("#phone").css({'background-color': "white"})
            else
                $("#phone").css({'background-color': ERROR_BACKGROUND_COLOR})
        }
    });
	function checkIsPhoneValid() {
		var phone = $("#phone").val();
		var match = phone.search(phone_regex);
		if (match == -1)
			return false;
		else
			return true;
	}

    // Set the registration input placeholder on click
    $("#plates").focusin(function() {
        $("#plates").attr("placeholder", "NS-123-AB");
    });

    // Reset the registration placeholder on focus out
    // Set the background red if the plates aren't a match
    licence_regex = /^[a-zA-ZčćžđšČĆŽĐŠ]{2}-?[0-9]{3}-?[a-zA-ZčćžđšČĆŽĐŠ]{2}$/;
    $("#plates").focusout(function() {
        $("#plates").attr("placeholder", "Registracija");

        var licence = $("#plates").val();
        if (licence != "") {
            var ok = checkIsPlateValid();
            if (ok)
                $("#plates").css({'background-color': 'white'});
            else
                $("#plates").css({'background-color': ERROR_BACKGROUND_COLOR});
        }
    });
	function checkIsPlateValid() {
		var licence = $("#plates").val();
		var match = licence.search(licence_regex);
		if (match == -1)
			return false;
		else
			return true;
	}

	var type = 0;
	var time = 0;
	var total = 0;
	
    // Text
    // Text filler for the type buttons
    $("#type-radio1").click(function() {
        $("#type-fill").text("motor");
        $("#type-fill_rc").text("motor");
        $("#type-fill_rc_xs").text("motor");
        $("#type-fill_rc_cost").text("300");
        $("#type-fill_rc_cost_xs").text("300");
		type = 300;
		total = type + time;
        $("#total_rc_cost").text(total);
        $("#total_rc_cost_xs").text(total);
		});
    $("#type-radio2").click(function() {
        $("#type-fill").text("auto");
        $("#type-fill_rc").text("auto");
        $("#type-fill_rc_xs").text("auto");
        $("#type-fill_rc_cost").text("400");
        $("#type-fill_rc_cost_xs").text("400");
		type = 400;
		total = type + time;
        $("#total_rc_cost").text(total);
        $("#total_rc_cost_xs").text(total);
		});
    $("#type-radio3").click(function() {
        $("#type-fill").text("kamion");
        $("#type-fill_rc").text("kamion");
        $("#type-fill_rc_xs").text("kamion");
        $("#type-fill_rc_cost").text("550");
        $("#type-fill_rc_cost_xs").text("550");
		type = 550;
		total = type + time;
        $("#total_rc_cost").text(total);
        $("#total_rc_cost_xs").text(total);
		});
		
    // Text filler for the time buttons
    $("#time-radio1").click(function() {
        $("#time-fill").text("pola sata");
        $("#time-fill_rc").text("pola sata");
        $("#time-fill_rc_xs").text("pola sata");
        $("#time-fill_rc_cost").text("150");
        $("#time-fill_rc_cost_xs").text("150");
		time = 150;
		total = type + 150;
        $("#total_rc_cost").text(total);
        $("#total_rc_cost_xs").text(total);
		});
    $("#time-radio2").click(function() {
        $("#time-fill").text("tri sata");
        $("#time-fill_rc").text("tri sata");
        $("#time-fill_rc_xs").text("tri sata");
        $("#time-fill_rc_cost").text("0");
        $("#time-fill_rc_cost_xs").text("0");
		time = 0;
		total = type;
        $("#total_rc_cost").text(total);
        $("#total_rc_cost_xs").text(total);
		});
    $("#time-radio3").click(function() {
        $("#time-fill").text("par dana");
        $("#time-fill_rc").text("par dana");
        $("#time-fill_rc_xs").text("par dana");
        $("#time-fill_rc_cost").text("0");
        $("#time-fill_rc_cost_xs").text("0");
		time = 0;
		total = type;
        $("#total_rc_cost").text(total);
        $("#total_rc_cost_xs").text(total);
		});

    // Text filler for the payment buttons
    $("#pay-radio1").click(function() {
        $("#pay-fill").text("kešom");});
    $("#pay-radio2").click(function() {
        $("#pay-fill").text("karticom");});
    $("#pay-radio3").click(function() {
        $("#pay-fill").text("preko interneta");});
		
	
	// Closing the exapnded navbar on click anywhere else on screen
	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");               
		var _opened = $navbar.hasClass("in");
		if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
		}
	});
	
	
	// Select input, da se selektovan grad ispise na dugmetu
	$('.dropdown-menu a').on('click', function(){ 
		$("#city_select").html($(this).html() + '<span class="caret"></span>'); 
	});
	
	
	// Funkcija za validaciju input polja
	

});
