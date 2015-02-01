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

$('div').eq(6).attr("id", "chaine");
$('#chaine').append(
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/2.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/3.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/16.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/69.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/13.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/14.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1032.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/322.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/70.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/318.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/320.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/315.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/321.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/363.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/179.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1033.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/361.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/363.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1045.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1046.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1047.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1048.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1049.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/1050.gif"/>'+
	'<img id="fr2" src="http://static3.programme-tv.com//images/channels/22.gif"/>'
);

$('footer').append('<div>').attr('id', 'menu_footer');
$('#menu_footer').prepend('<a href="http://tivine.com/blog/?p=79"><img id="logo_6" src="./logo6.png" /></a>').prepend('<img id="logo_5" src="./logo5.png" />').prepend('<img id="logo_4" src="./logo4.png" />').prepend('<a href="http://entrepreneurs.telecom-paristech.fr/"><img id="logo_3" src="./logo3.png" /></a>').prepend('<img id="logo_2" src="./logo2.png" />').prepend('<img id="logo_1" src="./logo1.png" />');


function GetAllContentForPartAndChannelnow(chaine) 
{
	
	var url="http://94.23.253.36:8080/TiVineWS_V1.0/GetAllContentForPartAndChannel0"+chaine+"10989841";
	var hash = CryptoJS.HmacSHA512(url, "8de53b9a88725ff0d9357431b486f7ac").toString();
	$.ajax({
		url: "http://94.23.253.36:8080/TiVineWS_V1.0/GetAllContentForPartAndChannel",
		type: "POST",
		data: {'part':"0",'channel':chaine,'clientId':"10989841",'encodedKey':hash},
		success:function(data)
		{
			for (var i = 0; i <= 100; i++) {
						console.log(i);
			console.log(data.programs[0].title);
			console.log(data.stamps[i].name);
			console.log(data.stamps[i].type);

		 	var titre=(data.programs[0].title);
			var image=(data.programs[0].image);
			var strt=(data.programs[0].startTime);
			var end=(data.programs[0].endTime);
			var name=(data.stamps[i].name);
			var type=(data.stamps[i].type);
			var img=(data.stamps[i].image);

if (type == "people"){ 
						$('#photos').append($('<div>').addClass('div'));
						$('.div').last().append($('<img>').addClass('tof').attr('src',img));
					}
			}
		},
		error:function() 
			{
			alert("error");
			}
		}
	);	
};