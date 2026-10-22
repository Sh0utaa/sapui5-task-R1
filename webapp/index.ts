// import XMLView from "sap/ui/core/mvc/XMLView";

// XMLView.create({
//     viewName: "ui5.tutorial.walkthrough.view.App",
//     id: "app"
// }).then(function (view) {
//     view.placeAt("content");
// })

import ComponentContainer from "sap/ui/core/ComponentContainer";

new ComponentContainer({
	id: "container",
	name: "ui5.tutorial.walkthrough",
	settings: {
		id: "walkthrough"
	},
	autoPrefixId: true,
	async: true
}).placeAt("content");