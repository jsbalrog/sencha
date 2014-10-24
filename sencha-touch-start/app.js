/* jshint -W117 */
/*jshint -W097 */

'use strict';

Ext.application({
	name: 'Hello World',
	launch: function() {
		var panel = Ext.create('Ext.Panel', {
			fullscreen: true,
			layout: 'vbox',
			items: [{
				xtype: 'panel',
				html: 'BOX1',
				flex: 1,
				style: {
					'background-color': 'blue'
				}
			}, {
				xtype: 'panel',
				html: 'BOX2',
				flex: 1,
				style: {
				'background-color': 'red'
				}
			}, {
				xtype: 'panel',
				html: 'BOX3',
				flex: 1,
				style: {
					'background-color': 'green'
				}
			}]
		});
		Ext.viewport.add(panel);
	}
});