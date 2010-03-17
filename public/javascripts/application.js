// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults



$(document).ready(function() {
	
	
	$("#login_header").fancybox({
		'scrolling'		: 'no',
		'titleShow'		: false,
		'onClosed'		: function() {
		    $("#login_error").hide();
		}
	});
	
	
	$("#login_form").bind("submit", function() {

		if ($("#login_name").val().length < 1 || $("#login_pass").val().length < 1) {
		    $("#login_error").show();
		    $.fancybox.resize();
		    return false;
		}

		$.fancybox.showActivity();

		$.ajax({
			type		: "POST",
			cache	: false,
			url		: "/data/login.php",
			data		: $(this).serializeArray(),
			success: function(data) {
				$.fancybox(data);
			}
		});

		return false;
	});
	
	$('#female_icon').click(function(){$('#male_photo_holder').hide(); $('#female_photo_holder').fadeIn();})
	$('#male_icon').click(function(){$('#female_photo_holder').hide(); $('#male_photo_holder').fadeIn();})
	
	
});