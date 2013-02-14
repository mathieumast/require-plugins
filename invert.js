/**
 * RequireJS Plugin for Inverted
 * 
 * Copyright (c) 2013, Mathieu MAST Licensed under the MIT license
 */
define([ "appContext" ], function(appContext) {
  "use strict";
  
  var invert = {
    
    protoLoaded : function(proto, name, req, onload, config) {
      console.log("\"invert!" + name + "\" Loaded");
      onload(proto);
      
      // Remove proto from Require cache 
      req.undef("invert!" + name);
    },
    
    load : function(name, req, onload, config) {
      appContext.getProto(name, function (proto) {invert.protoLoaded(proto, name, req, onload, config)}, onload.error);
    }

  };
  
  return invert;
});
