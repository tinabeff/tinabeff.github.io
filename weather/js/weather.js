(function($) {
    $('#send').on('click',function(event){
       event.preventDefault();//有防止其表單在送出時會閃一下
        var msg=$('msg').val();
        $.ajax({
            dataType: 'json',
                type:'post',
            url: 'http://zero-manila.codio.io:3000/send/'+msg
        });
    });
	$.ajax({
		dataType: 'json',
		url: 'http://api.openweathermap.org/data/2.5/weather?q=Taipei',
	    success: function(response, jqXHR, textStatus) {
            var data = [];
            var obj = {};
            
            obj.temp = response.main.temp;
            obj.humidity = response.main.humidity;
            
            // Weather Icons
            switch (response.weather[0].main) {
                case "Clouds": obj.weatherIcon = "wi-day-cloudy";
            }
            
            // Celsius
            obj.celsius = parseInt(response.main.temp - 273.15);
            
            
            data.push(obj);
            
			$('#postTemplate')
				.tmpl(data)
				.appendTo('#content');
            
            $('#weather-icon').addClass('wi-day-cloudy');
	    },
	    complete: function(jqXHR, textStatus) {
            $(document).createWebSocket({
                onmsg:function(){
                    $('.timestamp').each(function() {
                        var me = $(this);
                        var timestamp = me.html();

                        me.html(moment(timestamp).fromNow());
                    });
                }  
            });
	    }
	});
}) ($);
