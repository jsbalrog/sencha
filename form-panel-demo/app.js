Ext.application({
	name: 'FormPanelDemo',
	launch: function() {
		var form = Ext.create('Ext.form.Panel', {
			fullscreen: true,
      items: [{
        xtype: 'textfield',
        label: 'Field 1',
        name: 'field1'
      }, {
        xtype: 'textfield',
        label: 'Field 2',
        name: 'field2'
      }]
		});
    form.setValues({
      field1: 'Tom',
      field2: 'Jones'
    });
    console.log(form.getValues());
		Ext.Viewport.add(form);
	}
});
