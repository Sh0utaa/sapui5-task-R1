import ResourceBundle from "sap/base/i18n/ResourceBundle";
import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";
import ResourceModel from "sap/ui/model/resource/ResourceModel";

/**
 * @namespace ui5.tutorial.walkthrough.controller
 */
export default class AppController extends Controller {
    onShowHello(): void {
        const recipient = (this.getView()?.getModel() as JSONModel)?.getProperty("/recipient/name");
        const resourceBundle = (this.getView()?.getModel("i18n") as ResourceModel)?.getResourceBundle() as ResourceBundle;
        const msg = resourceBundle.getText("helloMsg", [recipient]) as string;

        MessageToast.show(msg);
    }
}