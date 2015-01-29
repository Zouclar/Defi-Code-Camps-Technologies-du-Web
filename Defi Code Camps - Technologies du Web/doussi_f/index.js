// $("#logo").animate({height: "201px"});
// $("header").animate({height: "60px"},1000, "linear");
// $('h1').append('<div>');
/*$test = document.getElementById('logo');
$('test').append('<div>');*/
//$('div').attr("id","nav").append("SWAAAAAAAAG");

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
contact.attr("id", "nav").text("CONTACT");
$("header").append(contact);

var news = $("<div>");
news.attr("id", "nav").text("NEWS");
$("header").append(news);

var eng = $("<div>");
eng.attr("id", "nav").text("NEWS");
$("header").append(news);

$('footer').append('<div>').attr('id', 'menu_footer');
$('#menu_footer').prepend('<a href="http://tivine.com/blog/?p=79"><img id="logo_6" src="./logo6.png" /></a>').prepend('<img id="logo_5" src="./logo5.png" />').prepend('<img id="logo_4" src="./logo4.png" />').prepend('<a href="http://entrepreneurs.telecom-paristech.fr/"><img id="logo_3" src="./logo3.png" /></a>').prepend('<img id="logo_2" src="./logo2.png" />').prepend('<img id="logo_1" src="./logo1.png" />');






