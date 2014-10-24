Ext.application({
  name: 'NavigationViewDemo',
  launch: function() {
    var navigationview = Ext.create('Ext.NavigationView', {
      fullscreen: true,
      items: [{
        title: 'First Item',
        items: [{
          xtype: 'button',
          text: 'Push',
          handler: function() {
            navigationview.push({
              title: 'Second Item',
              html: 'Hello Navigation View'
            });
          }
        }]
      }]
    });
    Ext.Viewport.add(navigationview);
	}
});