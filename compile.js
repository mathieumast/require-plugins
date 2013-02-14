/**
 * RequireJS Plugin for Handlerbar
 * 
 * Copyright (c) 2013, Mathieu MAST Licensed under the MIT license
 */
define([ "handlebars", "text" ], function(Handlebars, text) {
  "use strict";

  var compile = {

    load : function(name, req, onload, config) {
      text.get(req.toUrl(name), function(uncompiledTmpl) {
        onload(Handlebars.compile(uncompiledTmpl));
      });
    }

  };

  return compile;
});
