import opaTest from "sap/ui/test/opaQunit";
import HelloPanelPage from "./pages/HelloPanelPage";

const onTheHelloPanelPage = new HelloPanelPage();

QUnit.module("Navigation");

opaTest("Should open the Hello dialog", function () {

	onTheHelloPanelPage.iStartMyUIComponent({
		componentConfig: {
			name: "ui5.tutorial.walkthrough"
		}
	});

	onTheHelloPanelPage.iPressTheSayHelloWithDialogButton();

	onTheHelloPanelPage.iShouldSeeTheHelloDialog();

	onTheHelloPanelPage.iTeardownMyApp();
});