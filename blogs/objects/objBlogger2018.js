///////////////////////////////////////////////////////////
// objBlogger2018.js
//
// M. Nealon, 2018.
//


var	objBlogger2018 = (function() {
	
	var	entries = [
	
///////////////////////////////////////////////////////////
//	August '18
//
		{
			"month": "August",
			"posts": [
			
				{
					"date": "27th",
					"time": "22:50",
					"category": "General",
					"description": "My first ever blog post on NunchyCrut!",
					"title": "First-blog-post",
					"page": "blogs/2018/blogs/First-blog-post.html",
					"thumb": "images/SimonThinkwell.png",
					"link": "?Blog/2018/August/First-blog-post.html"
				}
				
			]
		},
		
///////////////////////////////////////////////////////////
//	September '18
//		
		{
			"month": "September",
			"posts": [
			
				{
					"date": "2nd",
					"time": "14:44",
					"category": "Web-Development",
					"description": "Learn all about the birth of the pop-up!",
					"title": "Birth-of-the-pop-up",
					"page": "blogs/2018/blogs/Birth-of-the-pop-up.html",
					"thumb": "blogs/2018/images/Pop-up.jpg",
					"link": "?Blog/2018/September/Birth-of-the-pop-up"
				},
				{
					"date": "5th",
					"time": "16:58",
					"category": "Programming",
					"description": "This blog chronicles the development and deployment of the very first database!",
					"title": "The-first-ever-database",
					"page": "blogs/2018/blogs/The-first-ever-database.html",
					"thumb": "blogs/2018/images/Bee.jpg",
					"link": "?Blog/2018/September/The-first-ever-database"
				},
				{
					"date": "9th",
					"time": "10:25",
					"category": "Fan-mail",
					"description": "Yet more angry mail from an angry, jealous nobody.",
					"title": "Confrontational-email",
					"page": "blogs/2018/blogs/Confrontational-email.html",
					"thumb": "blogs/2018/images/Angry.jpg",
					"link": "?Blog/2018/September/Confrontational-email"
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
		
		for (var p = 0; p < entries[monthIndex].posts.length; p++) {
			if (entries[monthIndex].posts[p].title == post)
				return entries[monthIndex].posts[p];
		}
		
		return false;
	};
	
	
	var	getLatestPosts = function(posts) {
		var	pages = [];
		
		for (var ent = (entries.length - 1); ent >= 0; ent--) {
			if (! posts < 0)
				break;
			
			for (var post = (entries[ent].posts.length - 1); posts--, post >= 0; post--) {
				if (posts < 0)
					break;
				
				pages.push(entries[ent].posts[post]);
			}
		}
		
		return pages;
	};
	
	
	return {
		"listAllCategories": listAllCategories,
		"listAllMonths": listAllMonths,
		"listAllPosts": listAllPosts,
		"listAllPostsIn": listAllPostsIn,
		"isValidMonth": isValidMonth,
		"findPost": findPost,
		"getLatestPosts": getLatestPosts
	};
	
	
})();

