function create_task()
{
	const div = document.createElement("div");
	const parent = document.getElementById("ft_list");
	div.style.width = "auto";
	div.style.height = "20px";
	div.style.border = "2px solid black";
	div.style.color = "black";
	div.style.textAlign = "center";
	div.style.borderRadius = "15px";
	div.style.cursor = "pointer";
	div.setAttribute("id", "id_" + Date.now());
	div.innerHTML = prompt('To do');
	div.setAttribute("onclick", "remove(this)");
	if (div.innerHTML)
	{
		parent.prepend(div);
		document.cookie = "todo_list=" + encodeURIComponent(parent.innerHTML);
	}
}

function remove(div)
{
	if (confirm("Are you sure to delete your task?"))
	{
		const todo = document.getElementById(div.id);
		const parent = todo.parentNode;
		parent.removeChild(todo)
		document.cookie = "todo_list=" + encodeURIComponent(parent.innerHTML);
	}
}

window.onload = function() {
	const todo = get_cookie("todo_list");
	if (todo) {
		document.getElementById("ft_list").innerHTML = decodeURIComponent(todo);
	}
}

function get_cookie(name) {
	const cookie = document.cookie.match('(^|;)\\s*'+name+'\\s*=\\s*([^;]+)');
	return (cookie ? cookie.pop() : '');
}
