$(function() {

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
						//console.log(data);
			//console.log(data.programs[0].title);
			//console.log(data.stamps[i].name);
			//console.log(data.stamps[i].type);

		 	var titre=(data.programs[0].title);
			var image=(data.programs[0].image);
			var strt=(data.programs[0].startTime);
			var end=(data.programs[0].endTime);
			var nom=(data.stamps[i].name);
			var type=(data.stamps[i].type);
			var img=(data.stamps[i].image);
			var detailUrl=(data.stamps[i].detailUrl)
	if (type == "people"){ 
							$('#test').append($('<div>').addClass('photo'));
							//$('.photo').last().append($('<div>').addClass('prgm').text(titre+":"));
							$('.photo').last().append($('<div>').addClass('titre'));
							$('.titre').last().append($('<a>').addClass('title').attr('href',detailUrl).text(nom));
							$('.photo').last().append($('<div>').addClass('div_phot'));
							$('.div_phot').last().append($('<img>').addClass('tof').attr('src',img));
							$('.photo').last().append($('<div>').addClass('type').text(type));

						}
			}
		},
		error: function(xhr, status, error) {
				  var err = eval("(" + xhr.responseText + ")");
				  alert(err.Message);
				}
		}
	);
};

$("#bouton_TF1").click(function(){
 	$("#portfoliowrap").css({display: "none"});
 	$("#test").css({display: "block"});
 	GetAllContentForPartAndChannelnow(1);
 });

$("#bouton_F2").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(2);
	 });

$("#bouton_F3").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(3);
	 });

$("#bouton_C").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(4);
	 });

$("#bouton_F5").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(5);
	 });

$("#bouton_M6").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(6);
	 });

$("#bouton_arte").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(7);
	 });

$("#bouton_D8").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(8);
	 });

$("#bouton_W9").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(9);
	 });

$("#bouton_TMC").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(10);
	 });

$("#bouton_NT1").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(11);
	 });

$("#bouton_NRJ12").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(12);
	 });

$("#bouton_LCP").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(13);
	 });

$("#bouton_F4").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(14);
	 });

$("#bouton_BFM").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(15);
	 });

$("#bouton_iTele").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(16);
	 });

$("#bouton_D17").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(17);
	 });

$("#bouton_Gulli").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(18);
	 });

$("#bouton_FO").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(19);
	 });

$("#bouton_HD1").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(20);
	 });

$("#bouton_equipe").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(21);
	 });

$("#bouton_6ter").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(22);
	 });

$("#bouton_23").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(23);
	 });

$("#bouton_RMC").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(24);
	 });

$("#bouton_cherie").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(25);
	 });

$("#bouton_RTL9").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(26);
	 });

$("#bouton_AB1").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(27);
	 });

$("#bouton_TV5").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(28);
	 });

$("#bouton_Para").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(29);
	 });

$("#bouton_PP").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(30);
	 });

$("#bouton_CPC").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(31);
	 });

$("#bouton_CPS").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(32);
	 });

$("#bouton_CPF").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(33);
	 });

$("#bouton_CPD").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(34);
	 });

$("#bouton_B1").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(35);
	 });

$("#bouton_B2").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(36);
	 });


$("#exit").click(function(){
	$("#test").css({display: "none"});
	$("#portfoliowrap").css({display: "block"});
});
});