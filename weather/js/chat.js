
(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://zero-manila.codio.io:3000/start',
	    success: function(response, jqXHR, textStatus) {
            //Dirty:
            // for (i = 0; i < response.data.length; i++) {
            //     response.data[i].timestamp = moment(response.data[i].timestamp).fromNow();
            // }
            
			$('#chatTemplate')
				.tmpl(response.data)
				.appendTo('#content');  
	    },
	    complete: function(jqXHR, textStatus) {
            // SPA Principle: MVC Architecture
            //  - Modify View instead of Model
            $('.timestamp').each(function() {
                var me = $(this);
                var timestamp = me.html();

                me.html(moment(timestamp).fromNow());
            });
	    }
	});
}) ($);