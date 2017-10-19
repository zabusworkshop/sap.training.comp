sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.comp.carriers.controller.Main", {
		
		onOpenDialog: function() {

			this.getOwnerComponent().carriersDialog.open(this.getView());

		}


	});

});