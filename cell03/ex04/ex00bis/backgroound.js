$(document).ready(function() {
	$('button').click(function() {
		$('body').css('background-color', random_color());
	});
});

function random_color() {
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += Math.floor(Math.random() * 16).toString(16);
	}
	return color;
}
