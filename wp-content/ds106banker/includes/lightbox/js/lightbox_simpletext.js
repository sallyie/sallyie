function wp_tags( taglist ) {
	var mystr = '';
	var tagarray = taglist.split(',');
		
	for (i = 0; i < tagarray.length; i++) { 
		mystr += '<a href="#" rel="tag" class="label" onclick="return false;">' + tagarray[i] + '</a>, ';
    }
    return (mystr.substr(0, mystr.length-2)); 
}

function decodeEntities(input) {
  var y = document.createElement('textarea');
  y.innerHTML = input;
  return y.value;
}



(function($) {
 
    // Initialize the Lightbox for any links with the 'fancybox' class
	$(".fancybox").fancybox({
	
		fitToView	: false,
		width		: '60%',
		height		: '80%',
		autoSize	: false,
		closeClick	: false,
		openEffect  : 'fade',
		closeEffect : 'fade',
		scrolling   : 'yes',
		afterLoad   : function() {
		
			this.content = '<h1 class="single-title assignment-header">Resource for this ' +   $('#thingName').val()  + '</h1><ol><li><a href="' + $('#exampleURL').val() + '" onclick="return false;">' + $('#exampleTitle').val() + '</a> (' + $('#submitterName').val() + ')<br />' + $('#exampleDescription').val() + '</li></ol>'
								
			$('#submitexample').removeClass( "disabled" );
		},
		helpers : {
			title: {
				type: 'outside',
				position: 'top'
			}
    	},
	}); 
	
})(jQuery);