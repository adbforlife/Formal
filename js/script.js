$(document).ready(function()	{
	console.log($('#back').height());
	console.log($('body').height());

	$('#back').css('height', $(window).outerHeight());
	$('#back').css('width', $(window).outerWidth());

	$('#mid').css('margin-top', $(window).outerHeight() / 2 - $('#oval').height() / 2);
	$('#mid').css('margin-left', $(window).outerWidth() / 2 - $('#oval').width() / 2);

	$('#cover').delay(800).hide("slide");

	$('#oval').hover(function()	{
		//$('body').append($("<img class='hearts' src='https://s3.amazonaws.com/projectformal/heart.png'></img>"));
	});
	$(window).resize(function()	{
		$('#mid').css('margin-top', $(window).outerHeight() / 2 - $('#oval').height() / 2);
		$('#mid').css('margin-left', $(window).outerWidth() / 2 - $('#oval').width() / 2);
	});

	$("#l1").delay(2000).fadeIn();
	$("#l2").delay(2150).fadeIn();
	$("#l3").delay(2300).fadeIn();
	$("#l4").delay(2450).fadeIn();
	$("#l5").delay(2600).fadeIn();
	$("#l6").delay(2750).fadeIn();
	$("#l7").delay(2900).fadeIn();
	$("#formal").children().delay(3500).fadeIn(3000);
});