Ext.application({
	name: 'PanelDemo',
	launch: function() {
		var panel = Ext.create('Ext.Panel', {
			fullscreen: true,
			items: [{
				xtype: 'button',
				text: 'Show Overlay',
				listeners: {
					tap: function(button){
						var overlay = Ext.create('Ext.Panel', {
							height: 100,
							width: 300,
							html: 'Panel as Overlay'
						});
						overlay.showBy(button);
					}
				}
			}]
		});
		Ext.Viewport.add(panel);
	}
});