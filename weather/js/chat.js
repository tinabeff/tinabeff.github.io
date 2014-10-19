(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://zero-manila.codio.io:3000/start',
	    success: function(response, jqXHR, textStatus) {
            //for (i = 0; i < response.data.length; i++) {
            //    response.data[i].timestamp = moment(response.data[i].timestamp).fromNow();
            //}
            
			$('#chatTemplate')
				.tmpl(response.data)
				.appendTo('#content');  
	    },
	    complete: function(jqXHR, textStatus) {
           $(document).createWebSocket();
	    }
	});
}) ($);