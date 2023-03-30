function create_task()
{
	const div = $("<div></div>");
	const parent = $("#ft_list");
	div.css("font-weight", "bold");
	div.css("width", "auto");
	div.css("height", "auto");
	div.css("border", "2px solid black");
	div.css("text-align", "center");
	div.css("border-radius", "15px");
	div.css("cursor", "pointer");
	div.css(".button:hover", "background-color: #3e8e41");
	div.attr("id", "id_" + Date.now());
	div.html(prompt('To do'));
	div.attr("onclick", "remove(this)");
	div.addClass("note");
	if (div.html())
	{
		parent.prepend(div);
		document.cookie = "todo_list=" + encodeURIComponent(parent.html());
	}
};

function remove(div)
{
	if (confirm("Are you sure to delete your task?"))
	{
		$(div).remove();
		document.cookie = "todo_list=" + encodeURIComponent($("#ft_list").html());
	}
}

$(document).ready(function() {
	const todo = get_cookie("todo_list");
	if (todo) {
		$("#ft_list").html(decodeURIComponent(todo));
	}
});

function get_cookie(name) {
	const cookie = document.cookie.match('(^|;)\\s*'+name+'\\s*=\\s*([^;]+)');
	return (cookie ? cookie.pop() : '');
}
