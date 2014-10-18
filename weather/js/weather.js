/**
* Created with tinabeff.github.io.
* User: tinabeff
* Date: 2014-10-18
* Time: 03:18 AM
* To change this template use Tools | Templates.
*/

(function($) {
	$.ajax({
		dataType: 'json',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Taipei',
	    success: function(response, jqXHR, textStatus) {
			$('#postTemplate')
				.tmpl(response.posts)
				.appendTo('#content');
	    },
	    complete: function(jqXHR, textStatus) {
			$('[id=subject]').each(function(index) {
				var me = $(this);
				
				me.on('click', function() {
					var id = me.data('id');

					$.ajax({
						dataType: 'json',
						url: 'http://localhost:3000/1/post/' + id,
						success: function(response, jqXHR, textStatus) {
							$('#content').html('<h2>' 
								+ response.post.content 
								+ '</h2>');
						},
					});
				});
			});
	    }
	});
}) ($);
