//enter ajax
//XHTTPRequest
//Fetch
//arrow function
	/*var promesa = fetch('https://api.github.com/users/romflp');
	promesa.then(x=>console.log(x))
		    .catch(x=>console.error(x));

$.post();
$.load();
$.ajax({
	type:'GET'
});*/

/*var promesa = $.get('https://api.github.com/users/romflp');
promesa.done(data=>console.log(data))
		.fail(error=>console.error(error))*/

$('form').submit(function(event){
	$('#error').hide();
	event.preventDefault();
	//serialize
	//serializeArray
	//val
	var log = $('input').val();
	var promesa = $.get('https://api.github.com/users/'+log);
	promesa.done(showUserInfo)
		.fail(showError)
});

function showUserInfo(user){
	$('.username').append($('<div>').append($('<h2 id="usernameh2">').append(user.name)));
	$('.userat').append($('<div>').append($('<p id="atuser">').append("@"+user.login)));
	$('.userlocation').append($('<div>').append($('<p id="locationuser">').append(user.location)));
	$('.userfollower').append($('<div>').append($('<div id="followeruser" class="alert alert-info" role="alert">').append("Seguidores: "+user.followers)));
	$('.userfollowing').append($('<div>').append($('<div id="followinguser" class="alert alert-info" role="alert">').append("Seguidos: "+user.following)));
	$('.userrepos').append($('<div>').append($('<div id="reposuser" class="alert alert-success" role="alert">').append("Repositorios: "+user.public_repos)));
	$('.usergists').append($('<div>').append($('<div id="gistsuser" class="alert alert-success" role="alert">').append("Gists: "+user.public_gists)));
	$('#avatar').attr('src',user.avatar_url);
	$('#linkuser').attr('href',user.html_url);
	$('#usernameh2').remove();
	$('#atuser').remove();
	$('#locationuser').remove();
	$('#followeruser').remove();
	$('#followinguser').remove();
	$('#reposuser').remove();
	$('#gistsuser').remove();
	$('input').val("");
}
function showError(error) {
	$('#error').show();
	$('input').val("");
	/*
				slideUp(5000, function(){
					$('#error').hide(10000)
				});*/
	/*$('#usernameh2').remove();
	$('#avatar').remove();*/
}