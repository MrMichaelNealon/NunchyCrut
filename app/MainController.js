///////////////////////////////////////////////////////////
// MainController.js
//
// M. Nealon, 2018.
//


var	MainController = function() {


///////////////////////////////////////////////////////////
//	First thing - the url must be parsed so that we can
//	route to the correct page, this is done by the
//	parseURL() closure function.
//
//	See parseURL.js for more detailed info.
//
	var	urlParams = new parseURL();
	var	params = urlParams.getParams();
	
	// The urlParams.getParams() method returned an array,
	// these are the parsed / separated parameters in the
	// url, example:
	//
	//		www.somesite?a/b/c
	//
	// Results in an array of 3 elements:
	//
	//	params[0] = "a"
	//	params[1] = "b"
	//	params[2] = "c"
	//
	// The first element - params[0] - is the requested
	// page, the meaning and use of subsequent parameters
	// depends on the request.
	//
	// regardless - the getRoute() method of the parseURL
	// class will return the appropriate page.
	//
	if (params.length < 1 || typeof(params[0]) === "undefined" || params[0] == "")
		params[0] = "Home";
	
	var	currentPage = params[0];
	//
	//var	route = urlParams.getRoute(params[0]);
	
	
	var	loadPage = function(page) {
		var	route = urlParams.getRoute(page);
		
		var	urlString = urlParams.buildURL(page);
		console.log("urlString = " + urlString);
		
		window.history.pushState('', '', urlString);
		
		$("#content-blog").load(route.path);
		currentPage = page;
		
		$("#navbar-link-" + page).css({
			"color": "#1E90FF"
		});
		
		intruAd.stop();
		intruAd.begin(30000);
		
		
		showBlogItems(urlParams.getDomain());	
	};
	
	
	loadPage(currentPage);
	
	//$("#content-blog").load(route.path);

	$(".navbar-link").on("click", function() {
		var	attrID = $(this).attr("id");
		var	linkID = attrID.substr(12, (attrID.length - 12));
		
		$(".navbar-link").css({
			"color": "#FF8C00"
		});
		
		console.log("clicked link " + linkID);
		
		urlParams.resetParams(linkID);
		
		loadPage(linkID);
	});
	
};

