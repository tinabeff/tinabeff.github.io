
(function() {
    $.fn.createWebSocket = function(msgVal) {
        var self = this;
        var ws = new WebSocket("ws://zero-manila.codio.io:3000/", "echo-protocol"); 
        ws.onopen = function(evt) {
             $('[data-status]').addClass('hide');
             $('[data-status=success]').removeClass('hide');
        };
        ws.onclose = function(evt) {
             $('[data-status]').addClass('hide');
             $('[data-status=close]').removeClass('hide'); 
        };
        ws.onerror = function(evt) {
             $('[data-status]').addClass('hide');
             $('[data-status=error]').removeClass('hide');
        };
        ws.onmessage = function(evt) {
            var messages = JSON.parse(evt.data);
			$('#chatTemplate')
				.tmpl(messages.reverse().slice(0, 1))
				.appendTo(self);  
            if (msgVal && msgVal.onmessage === 'function') {
                msgVal.onmessage();
            }
        };    
    }; 
}) ();