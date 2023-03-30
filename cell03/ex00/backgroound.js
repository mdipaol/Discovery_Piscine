function change_color()
{
	var color = Math.floor(Math.random()*16777215).toString(16);
	document.getElementById('bg').style.backgroundColor = '#' + color;
}
