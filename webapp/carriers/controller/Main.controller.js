sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.training.comp.carriers.controller.Main", {
		
		onOpenDialog: function() {

			this.getOwnerComponent().carriersDialog.open(this.getView());

		},
		
		onAirlineSelected: function (oEvent) {
			var oItem = oEvent.getParameter("listItem");
			var sCarrid = oItem.getBindingContext().getProperty("Carrid");
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("airline", {
				Carrid: sCarrid
			});
		}


	});

});













