$(function() {

function GetAllContentForPartAndChannelnow(chaine) 
{
	
	var url="http://94.23.253.36:8080/TiVineWS_V1.0/GetAllContentForPartAndChannel0"+chaine+"10989841";
	var hash = CryptoJS.HmacSHA512(url, "8de53b9a88725ff0d9357431b486f7ac").toString();
	$.ajax({
		url: "http://94.23.253.36:8080/TiVineWS_V1.0/GetAllContentForPartAndChannel",
		type: "POST",
		data: {'part':"0",'channel':chaine,'clientId':"10989841",'encodedKey':"e84478a68203d0c2e67c24432ffab22d712ec5c661c66474ba7887c8be43628ea9745098d9c02a622a4ec0663e8023607f299b7f7e33e9d364b94df12512abda"},
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
			var name=(data.stamps[i].name);
			var type=(data.stamps[i].type);
			var img=(data.stamps[i].image);

if (type == "people"){ 
						$('#test').append($('<div>').addClass('photo'));
						//$('.photo').last().append($('<div>').addClass('prgm').text(titre+":"));
						$('.photo').last().append($('<div>').addClass('titre').text(name));
						$('.photo').last().append($('<div>').addClass('div_phot'));
						$('.div_phot').last().append($('<img>').addClass('tof').attr('src',img));
						$('.photo').last().append($('<div>').addClass('type').text(type));

					}
			}
		},
		error:function(xhr, status, error) {
  var err = eval("(" + xhr.responseText + ")");
  alert(err.Message);
}
		}
	);
};

	$("#bouton_TF1").click(function(){
	 	$("#portfoliowrap").css({display: "none"});
	 	$("#test").css({display: "block"});
	 	GetAllContentForPartAndChannelnow(2);
	 });
});