///////////////////////////////////////////////////////////
// objBlogger2016.js
//
// M. Nealon, 2018.
//


var	objBlogger2016 = (function() {
	
	var	entries = [
	
///////////////////////////////////////////////////////////
//	October '16
//
		{
			"month": "October",
			"posts": [
			
				{
					"date": "27th",
					"time": "22:50",
					"category": "General",
					"description": "My first blog post!",
					"title": "First-blog-post",
					"thumb": "blogs/2016/images/Thumb1.png",
					"page": "blogs/2016/blogs/First-blog-post.html"
				}
				
			]
		},
		
///////////////////////////////////////////////////////////
//	November '16
//		
		{
			"month": "November",
			"posts": [
			
				{
					"date": "12th",
					"time": "17:12",
					"category": "Web-Development",
					"description": "My second blog post!",
					"title": "Second-blog-post",
					"thumb": "blogs/2016/images/Thumb2.png",
					"page": "blogs/2016/blogs/Second-blog-post.html"
				},
				
				{
					"date": "19th",
					"time": "10:01",
					"category": "Programming",
					"description": "My third blog post!",
					"title": "Third-blog-post",
					"thumb": "blogs/2016/images/Thumb3.png",
					"page": "blogs/2016/blogs/Third-blog-post.html"
				}
				
			]
		},
			
///////////////////////////////////////////////////////////
//	December '16
//		
		{
			"month": "December",
			"posts": [
			
				{
					"date": "01st",
					"time": "00:14",
					"category": "General",
					"description": "My fourth blog post!",
					"title": "Fourth-blog-post",
					"thumb": "blogs/2016/images/Thumb4.png",
					"page": "blogs/2016/blogs/Fourth-blog-post.html"
				},
			
				{
					"date": "16th",
					"time": "08:04",
					"category": "Programming",
					"description": "My fifth blog post!",
					"title": "Fifth-blog-post",
					"thumb": "blogs/2016/images/Thumb5.png",
					"page": "blogs/2016/blogs/Fifth-blog-post.html"
				},
				
				{
					"date": "22nd",
					"time": "09:16",
					"category": "Web-Development",
					"description": "My sixth blog post!",
					"title": "Sixth-blog-post",
					"thumb": "blogs/2016/images/Thumb6.png",
					"page": "blogs/2016/blogs/Sixth-blog-post.html"
				}
				
			]
		}
		
	];
	
	
///////////////////////////////////////////////////////////
//	listAllCategories()
//
//	Returns every available category in the entries.
//
	var	listAllCategories = function() {
		var	cats = [];
		
		for (var ent = 0; ent < entries.length; ent++) {
			for (var post = 0; post < entries[ent].posts.length; post++) {
				var	cat = entries[ent].posts[post].category;
				
				// Discard duplicates
				if (cats.includes(cat))
					continue;
				
				cats.push(cat);
			}
		}
		
		return cats;
	};
	
	
///////////////////////////////////////////////////////////
//	listAllMonths()
//
//	Returns an array listing all available months in the
//	entries array.
//
	var	listAllMonths = function() {
		var	months = [];
		
		console.log("Listing all months");
		for (var ent = 0; ent < entries.length; ent++) {
			months.push(entries[ent]);
		}
		
		return months;
	};
	
	
///////////////////////////////////////////////////////////
//	listAllPosts()
//
//	Returns an array listing all of the post objects in
//	the entries array.
//
	var	listAllPosts = function() {
		var	posts = [];
		
		for (var ent = 0; ent < entries.length; ent++) {
			for (var post = 0; post < entries[ent].posts.length; post++) {
				posts.push(entries[ent].posts[post]);
			}
		}
		
		return posts;
	};
	
	
	var	getMonthIndex = function(month) {
		for (var ent = 0; ent < entries.length; ent++) {
			if (entries[ent].month == month)
				return ent;
		}
		
		return -1;
	};
	
	
	var listAllPostsIn = function(month) {
		var	monthIndex = getMonthIndex(month);
		
		if (monthIndex < 0)
			return false;
		
		return entries[monthIndex].posts;
	};
	
	
	var	isValidMonth = function(month) {
		if (getMonthIndex(month) == -1)
			return false;
		return true;
	};
	
	
	var	findPost = function(month, post) {
		var	monthIndex = getMonthIndex(month);
		
		if (monthIndex < 0)
			return false;
		
		alert("finding month " + month + ", post " + post);
		for (var p = 0; p < entries[monthIndex].posts.length; p++) {
			if (entries[monthIndex].posts[p].title == post)
				return entries[monthIndex].posts[p];
		}
		
		return false;
	};
	
	
	return {
		"listAllCategories": listAllCategories,
		"listAllMonths": listAllMonths,
		"listAllPosts": listAllPosts,
		"listAllPostsIn": listAllPostsIn,
		"isValidMonth": isValidMonth,
		"findPost": findPost
	};
	
	
})();

