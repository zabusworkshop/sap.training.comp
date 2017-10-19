sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/training/comp/carriers/controller/CarriersDialog"
], function(UIComponent, CarriersDialog) {
	"use strict";

	return UIComponent.extend("sap.training.comp.carriers.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set fragment controller
			this.carriersDialog = new CarriersDialog();
		}
	});
});