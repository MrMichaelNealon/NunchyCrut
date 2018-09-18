///////////////////////////////////////////////////////////
// evenText.js
//
// M. Nealon, 2018.
//


function evenText(
	parentElement,
	childIDPrefix,
	childClass,
	textString
)
{

	var	parentEl = $("#" + parentElement);
	var	childElWidth = (100 / textString.length);
	
	parentEl.html("");
	
	console.log("Width of " + textString + " is " + childElWidth);
	for (var charNo = 0; charNo < textString.length; charNo++) {
		var	ch = textString.substr(charNo, 1);
		
		if (ch == " ") ch = "&nbsp;";
		
		parentEl.append('\
			<div \
				id="' + childIDPrefix + charNo.toString() + '" \
				class="' + childClass + '" \
				style="\
					width: ' + childElWidth.toString() + '%; \
				"\
			>\
				' + ch + '\
			</div>\
		');
	}
}

