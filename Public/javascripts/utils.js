(function($) {
  window._cookies = {};
  window._queries = {};

  // Get all existing cookies when the DOM loads.
  parse_cookies = function() {
    var all_cookies = document.cookie.split('; '),
        _cookies = {};

    all_cookies.map(function(pairs) {
      pair = pairs.split('=');

      // Exit if no cookies were found.
      if (pair.length == 1) { return; }

      _cookies[pair[0]] = pair[1];
    });

    window._cookies = _cookies;
  }

  // Set cookies during the session.
  set_cookie = function(name, value, expiration_in_days = 3650) {
    var expiration_date = new Date();

    expiration_date.setDate(expiration_date.getDate() + expiration_in_days);

    window._cookies[name] = value;
    document.cookie = name + "=" + escape(value) + ";expires=" + expiration_date.toUTCString();
  }

  // Delete cookies during the session.
  delete_cookie = function(name) {
    set_cookie(name, null, -500);
    delete(window._cookies[name]);
  }

  parse_query_string = function() {
    var all_queries = window.location.search.substring(1).split('&'),
        _queries = {};

    all_queries.map(function(pair) {
      query = pair.split('=');
      _queries[query[0]] = decodeURIComponent(query[1]);
    });

    window._queries = _queries;
  }

  $('document').ready(function() {
    parse_cookies();
    parse_query_string();
  });
}(jQuery));

