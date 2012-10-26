// Generated by CoffeeScript 1.3.3
(function() {
  var _this = this;

  $(function() {
    var ws;
    $.ajax(location.href, {
      data: {
        __h__: "__at__"
      }
    }).done(function(data) {
      document.open();
      document.write(data);
      return document.close();
    }).fail(function(data) {
      document.open();
      document.write(data.responseText);
      return document.close();
    });
    _this.ws = ws = new WebSocket("ws://localhost:" + _this.__ws_port);
    ws.onclose = function(m) {
      return console.log("close " + m);
    };
    ws.onmessage = function(m) {
      return console.log("message " + m.data);
    };
    ws.onerror = function(m) {
      return console.log("error " + m);
    };
    return ws.onopen = function(m) {
      return console.log("open " + m);
    };
  });

}).call(this);
