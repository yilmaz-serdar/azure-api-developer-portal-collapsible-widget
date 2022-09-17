import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { CollapsibleModel } from "./collapsibleModel";

export class CollapsibleHandlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: "collapsible",
            category: "Collapsible",
            displayName: "Collapsible: Basic",
            iconClass: "widget-icon widget-icon-api-management",
            requires: ["html"],
            createModel: async () => new CollapsibleModel()
        };

        return widgetOrder;
    }
}