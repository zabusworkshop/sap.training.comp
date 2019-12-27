sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("sap.training.comp.carriers.controller.Airline", {
		
		onInit: function () {
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("airline").attachPatternMatched(this.onAirlineMatched, this);
		},
		
		onAirlineMatched: function (oEvent) {
			var sCarrid = oEvent.getParameter("arguments").Carrid; // {Carrid: "AA"}
			var sPath = "/ZBC_C_Carrier_TP('" + sCarrid + "')"; // /ZBC_C_Carrier_TP('AA')
			// var sPath = `/ZBC_C_Carrier_TP('${sCarrid}')`
			this.getView().bindElement(sPath);
		},
		
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("main");
			}
		},
		
		onButtonPressed: function (oEvent) {
			var oCrossAppNavigation = sap.ushell.Container.getService("CrossApplicationNavigation");
            oCrossAppNavigation.toExternal({
                target: {
                    semanticObject: "Action",
                    action: "toappperssample2"
                }
            });
		}
	});

});






