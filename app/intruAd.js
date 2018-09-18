///////////////////////////////////////////////////////////
// intruAd.js
//
// M. Nealon, 2018.
//


var	intruAd = (function() {

	var	ads = [
		{
			"image": "images/banner-adverts/TastyBits.png",
			"link": "#"
		},
		{
			"image": "images/banner-adverts/Az-tech-hard-drives.png",
			"link": "#"
		},
		{
			"image": "images/banner-adverts/Bitcarve.png",
			"link": "#"
		},
		{
			"image": "images/banner-adverts/Jit-a-fix.png",
			"link": "#"
		},
		{
			"image": "images/banner-adverts/Computer-shoes.png",
			"link": "#"
		}
	];	
	
//	<img src="images/banner-adverts/TastyBits.png" width="100%" height="100%" style="float: right;">

	var	duration = 10000;
	var	timeoutID = null;
	
	var	currentAd = -1;
	
	
	var	begin = function(showFor) {
		var	randomAd;
		
		if (showFor != null)
			duration = showFor;
			
		if (ads.length == 1)
			return ads[0];
					
		if (currentAd == -1)
			randomAd = Math.floor(Math.random() * ads.length);
		else {
			while (true) {
				randomAd = Math.floor(Math.random() * ads.length);
				if (randomAd != currentAd)
					break;
			}
		}
		
		currentAd = randomAd;
		
		$("#footer-advert").html('\
			<img \
				src="' + ads[currentAd].image + '" \
				width="100%" \
				height="100%" \
				style="float: right;"\
			/>\
		');
		
		timeoutID = setTimeout(function() {
			begin(duration);
		}, duration);
	};
	

	var	stop = function() {
		if (timeoutID != null) {
			clearTimeout(timeoutID);
			timeoutID = null;
		}
	};
	
	
	return {
		"begin": begin,
		"stop": stop
	};
	

})();

