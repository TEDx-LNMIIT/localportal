define([
  'joshlib!utils/woodman',
  'joshlib!utils/dollar',
  'joshlib!vendor/underscore',
  'joshlib!vendor/backbone',

  'joshlib!ui/list',

  'text!templates/homepage/displayer/MenuDisplay.html'
], function(
  woodman,
  $,
  _,
  Backbone,

  List,

  MenuDisplayTemplate
) {
  var logger = woodman.getLogger('views.MenuDisplayView');
  var MenuDisplayView = List.extend({

    initialize: function(options) {
      logger.info('initialize MenuDisplayView');
      var options = options || {},
          self = this;

      options.itemTemplate = MenuDisplayTemplate;

      List.prototype.initialize.call(this,options);

      this.collection.off();
      this.collection.on('loaded', function(){
        self.update(true);
      });
    }
  });

  return MenuDisplayView;
});
