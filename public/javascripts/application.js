// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

var populatePictureBox = function(data)
{
	alert(data.data)
}

$(document).ready(function() {
	var $dialog = $('#info_dialog').dialog({
			autoOpen: false,
		});

	$('#male_profile_image').click(function() {
		$dialog.dialog('open');
		return false;
	});
});