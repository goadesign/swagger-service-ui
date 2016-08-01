'use strict';

SwaggerUi.Views.HeaderView = Backbone.View.extend({
  events: {
    // 'keyup #input_baseUrl'          : 'showCustomOnKeyup',
    // 'keyup #input_apiKey'           : 'showCustomOnKeyup'
  },

  initialize: function(){},

  update: function(url, apiKey, trigger){
    if (trigger === undefined) {
      trigger = false;
    }
    if (!url) {
      url = 'http://api.swagger.goa.design/swagger/spec/github.com/goadesign/goa-cellar/design';
    }

    var val = url.replace(/^http:\/\/api.swagger.goa.design\/swagger\/spec\/github.com\//, '');
    $('#input_baseUrl').val(decodeURIComponent(val));

    if (trigger) {
      this.trigger('update-swagger-ui', {url:url});
    }
  }
});
