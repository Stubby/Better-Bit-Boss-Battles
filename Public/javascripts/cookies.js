window._cookies = {};

// Get all existing cookies when the DOM loads.
parse_cookies = function() {
  var all_cookies = document.cookie.split('; '),
      _cookies = {};

  all_cookies.map(function(pairs) {
    pair = pairs.split('=');

    _cookies[pair[0]] = pair[1];
  });

  window._cookies = _cookies;
}

// Set cookies during the session.
set_cookie = function(name, value, expiration_in_days, path) {
  var expiration_date = new Date();

  expiration_date.setDate(expiration_date.getDate + expiration_in_days);

  window._cookies[name] = value;
  document.cookie = name + "=" + escape(value) + ";expires=" + expiration_date.toGMTString();
}

// Delete cookies during the session.
delete_cookie = function(name) {
  delete(window._cookies[name]);
  set_cookie(name, null, -500);
}


(function($){
  $('document').ready(function() {
    parse_cookies();
  });
})(jQuery);