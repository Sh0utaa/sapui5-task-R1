import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import History from "sap/ui/core/routing/History";
import Route, { Route$PatternMatchedEvent } from "sap/ui/core/routing/Route";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ui5.tutorial.walkthrough.controller
 */
export default class Detail extends Controller {

	onInit(): void {
		const viewModel = new JSONModel({
			currency: "EUR"
		});
		this.getView()?.setModel(viewModel, "view");
		
		const router = UIComponent.getRouterFor(this);
		(router.getRoute("detail") as Route).attachPatternMatched(this.onObjectMatched, this);
	}

	onObjectMatched(event: Route$PatternMatchedEvent): void {
		this.getView()?.bindElement({
			path: "/" + window.decodeURIComponent( (event.getParameter("arguments") as any).invoicePath),
			model: "invoice"
		});
	}

	onNavBack(): void {
		const history = History.getInstance();
		const previousHash = history.getPreviousHash();

		if (previousHash !== undefined) {
			window.history.go(-1);
		} else {
			const router = UIComponent.getRouterFor(this);
			router.navTo("overview", {}, true);
		}
	}
};