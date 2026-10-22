import MessageToast from "sap/m/MessageToast";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

export default class AppController extends Controller {
    onInit(): void {
        const data = {
            recipient: {
                name: "EPAM"
            }
        }

        const dataModel = new JSONModel(data);
        this.getView()?.setModel(dataModel);
    }

    onShowHello(): void {
        MessageToast.show("Hello EPAM!");
    }
}