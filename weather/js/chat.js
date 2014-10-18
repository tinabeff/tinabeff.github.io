(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://zero-manila.codio.io:3000/start',
	    success: function(response, jqXHR, textStatus) {
			$('#chatTemplate')
				.tmpl(response.data)
				.appendTo('#content');            
	    },
	    complete: function(jqXHR, textStatus) {
	    }
	});
}) ($);
