Ext.application({
  name: 'TabPanelDemo',
  launch: function() {
		var tabpanel = Ext.create('Ext.TabPanel', {
			fullscreen: true,
			tabBarPosition: 'bottom',
			items: [{
				title: 'Tab 1',
				html: 'Tab 1 Content'
			},
			{
				title: 'Tab 2',
				html: 'Tab 2 Content'
			}]
		});
		Ext.Viewport.add(tabpanel);
	}
});