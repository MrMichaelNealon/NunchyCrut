///////////////////////////////////////////////////////////
// jsBlogger.js
//
// M. Nealon, 2018.
//


const	BLOGGER_MODE_YEAR = 0;
const	BLOGGER_MODE_CATEGORY = 1;


const	BLOGGER_NOT_FOUND = -1;


var	jsBlogger = (function() {
	
	
	var	blogs = [
		{
			"year": "2018",
			"blogs": objBlogger2018
		}
	];

	
///////////////////////////////////////////////////////////
//	searchByYear()
//
	var	searchByYear = function(params) {
		var	yearIndex = getYearIndex(params[1]);
				
		if (yearIndex < 0)
			// Invalid year parameter.
			return false;
		else {
			// If params[2] is not available we
			// return the list of available
			// months in the year.
			if (params.length < 3)
				return blogs[yearIndex].blogs.listAllMonths();
			
			// So params[2] is available, in this case it
			// is either a valid month or category
			if (blogs[yearIndex].blogs.isValidMonth(params[2])) {
				// It's a valid month.
				//
				// Now there is another possible parameter,
				// params[3] - if doesn't exist then all
				// posts in the specified month are returned.
				if (params.length < 4)
					return blogs[yearIndex].blogs.listAllPostsIn(params[2]);
				else
					// We have params[3] - it is assumed to
					// be the name of a particular page to serve
					// in which case the post object is returned
					//
					return blogs[yearIndex].blogs.findPost(params[2], params[3]);
			}
			//else {
				// It's not a valid month so is assumed
				// to be a category in which case an
				// array of all individual categories
				// for the year is returned.
				
			//}
		}
	};
	
	
///////////////////////////////////////////////////////////
//	search()
//
//	Given an array of parameters, will return the
//	requested blog or list of blogs.
//
//
	var	search = function(params) {
		var	mode;
		
		if (params.length < 2)
			// In the event that no parameters are
			// given - return the list of all
			// valid years.
			//
			return listYears();
		
		// Parameter 1 will be one of two things -
		// it will be a 4-digit number in which
		// case it is a year, if anything other
		// than a 4-digit number it's assumed to
		// be a category.
		//
		if (isValidYearString(params[1]))
			mode = BLOGGER_MODE_YEAR;
		else
			mode = BLOGGER_MODE_CATEGORY;
		
		if (mode == BLOGGER_MODE_YEAR) {
			return searchByYear(params);
		}
	};
	

///////////////////////////////////////////////////////////
//	isValidYearString()
//
//	Returns true if the given string (param) is a valid
//	year - must be 4 characters and digits only. Anything
//	else will result in a return of false.
//
	var isValidYearString = function(param) {
		if (param.length == 4 && /^\d+$/.test(param))
			return true;
	
		return false;
	};
	
	
///////////////////////////////////////////////////////////
//	getYearIndex()
//
//	Given a year (string) as a parameter, will return
//	the index of the corresponding blogs[] object (if
//	it exists!)
//
//	Otherwise will reutrn BLOGGER_NOT_FOUND (-1).
//
	var	getYearIndex = function(year) {
		for (var y = 0; y < blogs.length; y++) {
			if (blogs[y].year == year) {
				return y;
			}
		}
		
		return BLOGGER_NOT_FOUND;
	};
	
	
///////////////////////////////////////////////////////////
//	listYears()
//
//	Returns an array listing all valid years in the
//	blogs[] array.
//
	var	listYears = function() {
	//	var	years = [];
		
	//	for (var y = 0; y < blogs.length; y++)
	//		years.push(blogs[y].year);
		
		return blogs;
	};
	
	var	listAllMonths = function(year) {
		var	yearIndex = getYearIndex(year);
		
		if (yearIndex < 0)
			return false;
		
		return blogs[yearIndex].blogs.listAllMonths();
	};
	
	
	var	getAll = function() {
		return blogs;
	};
	
	
	var	getLatestPosts = function(year, posts) {
		var	yearIndex = getYearIndex(year);
		
		if (yearIndex < 0)
			return false;
		
		return blogs[yearIndex].blogs.getLatestPosts(posts);
	};
	
	
	return {
		"search": search,
		"getAll": getAll,
		"listAllMonths": listAllMonths,
		"getLatestPosts": getLatestPosts
	}
	
})();

