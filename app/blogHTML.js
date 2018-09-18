///////////////////////////////////////////////////////////
// blogHTML.js
//
// M. Nealon, 2018.
//


function showYears(yearList, domain) {
	var	blogEl = $("#blog-menu");
	
	$("#blog-post").html("");
	
	blogEl.html('\
		<h1>Explore!<br /><br /></h1>\
		<p>\
			Explore and enjoy my famous <b>Blogs</b>!\
			<br /><br />\
			Here you will find excerpts from the journals of \
			my great, great, great, great, great, great Grandfather, \
			Father <b>Rudyard P. Thinkwell</b>.\
			<br /><br />\
		</p>\
	');
	
	for (var l = (yearList.length - 1); l >= 0; l--) {
		var	linkURL = domain + "?Blog/" + yearList[l].year;
		
		console.log("linkURL = " + linkURL);
		
		blogEl.append('\
			<div \
				id="blog-year-' + yearList[l].year + '" \
				class="blog-year-el" \
				title="View entries for the year ' + yearList[l].year + '"\
				onclick="window.open(\'' + linkURL + '\', \'_self\')"\
			>\
				' + yearList[l].year + '\
			</div>\
		')
	}
}

function showMonths(listMonths, domain, year) {
	var	yearEl = $("#blog-year-" + year);
	
	yearEl.css("color", "#1E90FF");

	for (var m = 0; m < listMonths.length; m++) {
		var	linkURL = domain + "?Blog/" + year + "/" + listMonths[m].month;
	
		yearEl.after('\
			<div \
				id="blog-year-' + year + '-month-' + listMonths[m].month + '" \
				class="blog-year-el blog-month-el" \
				title="View posts from ' + listMonths[m].month + ', ' + year + '"\
				onclick="window.open(\'' + linkURL + '/\', \'_self\')"\
			>\
				' + listMonths[m].month + '\
			</div>\
		');
	}
}

function showPosts(listPosts, domain, year, month) {
	var	monthEl = $("#blog-year-" + year + "-month-" + month);
	
	monthEl.css("color", "#1E90FF");
	
	for (var p = 0; p < listPosts.length; p++) {		
		var	linkURL = domain + "?Blog/" + year + "/" + month + "/" + listPosts[p].title;
		
		monthEl.after('\
			<div \
				id="blog-post-' + year + '-month-' + month + '-' + listPosts[p].title + '" \
				class="blog-year-el blog-post-title-el" \
				title="' + listPosts[p].title + '" \
				onclick="window.open(\'' + linkURL + '/\', \'_self\')"\
			>\
				' + listPosts[p].title.replace(/-/g, ' ') + '\
			</div>\
		');
	}
}

function showBlogHeader(year, month, post, page, domain) {
	var	headerEl = $("#blog-menu");
	
	var	yearURL = domain + "?Blog/" + year;
	var	monthURL = domain + "?Blog/" + year + "/" + month;
	
	headerEl.html('\
		<div id="blog-title" class="blog-post-title">\
			<div \
				id="blog-title-year" \
				class="blog-post-title-data" \
				title="Take me back to ' + year + '" \
				onclick="window.open(\'' + yearURL + '/\', \'_self\')"\
			>\
				' + year + '\
			</div>\
			<div class="blog-post-title-pad">&gt;</div>\
			<div \
				id="blog-title-month" \
				class="blog-post-title-data" \
				title="Take me back to ' + month + ', ' + year + '" \
				onclick="window.open(\'' + monthURL + '/\', \'_self\')"\
			>\
				' + month + '\
			</div>\
		</div>\
		<div id="blog-info" class="blog-info">\
			<div id="blog-info-date" class="blog-info-el blog-info-date">\
				' + page.date + ' ' + month + ', ' + year + '\
			</div>\
			<div id="blog-info-category" class="blog-info-el blog-info-category">\
				' + page["category"].replace(/-/g, ' ') + '\
			</div>\
		</div>\
	');
}

function showBlogItems(domain) {
	var	blogItems = jsBlogger.getLatestPosts("2018", 3);
	
	var itemEl = $("#content-items");

	itemEl.html('\
		<h2 \
			id="latest-blog-posts" \
			style="\
				position: relative; \
				float: left; \
				font-size: 16px; \
				line-height: 20px; \
				margin: 6px 0px 8px 3%; \
				color: #1E90FF; \
			"\
		>\
			Latest Blog posts\
		</h2>\
	');

	for (var item = 0; item < blogItems.length; item++) {
		itemEl.append('\
			<div \
				id="blog-item-' + item.toString() + '" \
				class="blog-item" \
			>\
				<div \
					id="blog-item-' + item.toString() + '-title" \
					class="blog-item-title" \
				>\
					' + blogItems[item].title.replace(/-/g, ' ') + '\
				</div>\
				<img \
					id="blog-item-' + item.toString() + '-thumb" \
					class="blog-item-thumb" \
					src="' + blogItems[item].thumb + '" \
					width="100%" height="100%" \
					title="' + blogItems[item].title.replace(/-/g, ' ') + '" \
					onclick="window.open(\'' + domain + blogItems[item].link + '/\', \'_self\')"\
				>\
			</div>\
		');
	}
	console.log("Hyor");
}

