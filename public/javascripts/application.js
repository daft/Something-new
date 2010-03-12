// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults



$(document).ready(function() {
	
	
	$('a#inline_fancybox').fancybox({
		'scrolling' : 'no',
		'titleShow' : 'false',
		'hideOnOverlayClick' : 'false'
	});
	
	$('#female_icon').click(function(){$('#male_photo_holder').hide(); $('#female_photo_holder').fadeIn();})
	$('#male_icon').click(function(){$('#female_photo_holder').hide(); $('#male_photo_holder').fadeIn();})
	
	
});