var home = $("<div>");

home.attr("id", "nav").text("ACCUEIL");
$("header").append(home);

var offre = $("<div>");
offre.attr("id", "nav").text("OFFRE");
$("header").append(offre);

var api = $("<div>");
api.attr("id", "nav").text("API");
$("header").append(api);

var equipe = $("<div>");
equipe.attr("id", "nav").text("ÉQUIPE");
$("header").append(equipe);

var contact = $("<div>");
contact.attr("id", "nav").text("CONTACT");2
$("header").append(contact);

var news = $("<div>");
news.attr("id", "nav").text("NEWS");
$("header").append(news);

var chaine = $("<div>");
var x = document.getElementById("tf1").src;
    document.getElementById("demo").innerHTML = x;
	chaine.attr("id", "chaine").append(x);




/*img.src ='http://passion-xbmc.org/MGalleryItem.php?id=292680';
chaine.attr("id", "chaine").append(img);*/


/*var eng = $("<div>");
eng.attr("id", "nav").text("NEWS");
$("header").append(news);
*/


/*$($('div')[1]).attr('id', 'menu');
/*for (i=0; i<6; i++)
	$('#menu').append(
	'<div>');

/*<div class="header" id="header">
  <h1 class="test">TIVINE TECHNOLOGIES</h1>
  </div>
  <div class="logo" id="logo">
  <img class="photo_logo" src="http://www.tivine.com/images/icon_big.png">
  </div>*/