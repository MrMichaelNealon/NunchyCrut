///////////////////////////////////////////////////////////
// parseURL.js
//
// M. Nealon, 2018.
//


var	parseURLRouter = (function() {
	
	var	routes = [
		{
			"request": "Home",
			"path": "pages/Home.html"
		},
		{
			"request": "Blog",
			"path": "pages/Blog.html"
		},
		{
			"request": "About",
			"path": "pages/About.html"
		},
		{
			"request": "Contact",
			"path": "pages/Contact.html"
		}
	];
	
	var	error404 = {
		"request": "error",
		"path": "pages/404.html"
	};
	

///////////////////////////////////////////////////////////
//	getRoute()
//
//	Matches the given request to an object in the routes
//	array.
//
//	If found then that particular object is returned, if
//	not then error404 is returned instead.
//	
	var	getRoute = function(request) {
		for (var route = 0; route < routes.length; route++) {
			if (routes[route].request == request)
				return routes[route];
		}
		
		return error404;
	};
	
	
	return {
		"getRoute": getRoute
	}
	
})();


var	parseURL = function(urlString) {
	
	if (urlString == null || urlString == "")
		urlString = window.location.href;
	
	var url = urlString;
	
	var	urlParts = null;
	var	urlDomain = null;
	var	urlParams = null;
	
	
	// Remove all trailing / characters from the url.
	//
	while (url.substr((url.length - 1), 1) == "/")
		url = url.substr(0, (url.length - 1));
	
	
///////////////////////////////////////////////////////////
//	getParams()
//
//	This method returns an array containing the parsed
//	url parameters, example - the url:
//
//		www.somesite.com?a/b/c
//
//	Will return array[0] = "a", array[1] = "b" and
//	array[2] = "c"
//
	this.getParams = function() {
		urlParts = url.split("?");
		
		urlParams = [];
		urlDomain = urlParts[0];

		if (typeof(urlParts[1]) !== "undefined" && urlParts[1] != "") {
			urlParams = filterParams(urlParts[1].split("/"));
		}
		
		return urlParams;
	};
	
	
///////////////////////////////////////////////////////////
//	filterParams()
//
//	Returns the given array with empty and undefined
//	elements removed.
//
	var	filterParams = function(params) {
		var	filtered = [];
		for (var param = 0; param < params.length; param++) {
			if (typeof(params[param]) === "undefined" || params[params] =="")
				continue;
			filtered.push(params[param]);
		}	
		return filtered;
	};
	
	
///////////////////////////////////////////////////////////
//	getRoute()
//
//	Requests the specified routes object from the
//	parseURLRouter() closure function.
//
//	If route exists the relevant routes object will be
//	returned:
//
//		{
//			"request": "route-name",
//			"path": "path/to/page.html"
//		}
//
	this.getRoute = function(request) {
		return parseURLRouter.getRoute(request);
	};
	
	
///////////////////////////////////////////////////////////
//	getDomain()
//
//	Method returns the domain portion of the url string,
//	useful for when the url needs to be reconstructed
//	with new parameters.
//
	this.getDomain = function() {
		return urlDomain;
	};
	
	this.buildURL = function(request) {
		var	url = urlDomain + "?" + request;
		
		for (var p = 1; p < urlParams.length; p++)
			url = url + "/" + urlParams[p];
		
		return url;
	};
	
	this.resetParams = function(request) {
		urlParams = [];
		urlParams.push(request);
	};
	
};

