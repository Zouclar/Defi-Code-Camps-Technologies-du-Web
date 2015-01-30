
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
$('body').append('<div>');
$($('div')[6]).attr("id","chaine");
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/2.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/3.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/16.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/69.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/13.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/14.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1032.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/322.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/70.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/318.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/320.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/315.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/321.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/363.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/179.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1033.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/361.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/363.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1045.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1046.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1047.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1048.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1049.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/1050.gif"/>');
$('#chaine').append('<img id="fr2" src="http://static3.programme-tv.com//images/channels/22.gif"/>');
$('footer').append('<div>').attr('id', 'menu_footer');
<<<<<<< .mine
$('#menu_footer').prepend('<a href="http://tivine.com/blog/?p=79"><img id="logo_6" src="./logo6.png" /></a>').prepend('<img id="logo_5" src="./logo5.png" />').prepend('<img id="logo_4" src="./logo4.png" />').prepend('<a href="http://entrepreneurs.telecom-paristech.fr/"><img id="logo_3" src="./logo3.png" /></a>').prepend('<img id="logo_2" src="./logo2.png" />').prepend('<img id="logo_1" src="./logo1.png" />');
=======
$('#menu_footer').prepend('<a href="http://tivine.com/blog/?p=79"><img id="logo_6" src="./logo6.png" /></a>').prepend('<img id="logo_5" src="./logo5.png" />').prepend('<img id="logo_4" src="./logo4.png" />').prepend('<a href="http://entrepreneurs.telecom-paristech.fr/"><img id="logo_3" src="./logo3.png" /></a>').prepend('<img id="logo_2" src="./logo2.png" />').prepend('<img id="logo_1" src="./logo1.png" />');

$url="http://94.23.253.36:8080/TiVineWS_V1.0/SearchStampBeyonce10989841";
$key = "8de53b9a88725ff0d9357431b486f7ac";
$hash = CryptoJS.HmacSHA512($url, "8de53b9a88725ff0d9357431b486f7ac").toString();
function searchStamp() 
{
	console.log($hash);
	$.ajax({
//		xhrFields: { withCredentials: true }
		url: "http://94.23.253.36:8080/TiVineWS_V1.0/SearchStamp",
		type: "POST",
		data: {'clientId':"10989841",'query':"Beyonce",'encodedKey':$hash},
		success:function(data)
		{
			console.log(data.stamps[0].name);
			console.log(data.stamps[0].image);
		},
		error:function() 
		{
			alert("error");
		}
	});
}


function ChannelContent(jour,chaine) 
{
	
	$url="http://94.23.253.36:8080/TiVineWS_V1.0/GetChannelContentForDay20150129110989841";
	$hash = CryptoJS.HmacSHA512($url, "8de53b9a88725ff0d9357431b486f7ac").toString();
	console.log($hash);
	$.ajax({
//		xhrFields: { withCredentials: true }
		url: "http://94.23.253.36:8080/TiVineWS_V1.0/GetChannelContentForDay",
		type: "POST",
		data: {'day':jour,'channel':chaine,'clientId':"10989841",'encodedKey':$hash},
		success:function(data)
		{
			$titre=(data.programs[1].title);
			$image=(data.programs[1].image);
			console.log($titre);
			console.log($image);
			$('#photos').append('<div>').attr('id','lol')
		},
		error:function() 
		{
			alert("error");
		}
	});
}
