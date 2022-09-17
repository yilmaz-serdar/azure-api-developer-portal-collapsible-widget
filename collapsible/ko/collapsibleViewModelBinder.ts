import { Bag } from "@paperbits/common";
import { ComponentFlow } from "@paperbits/common/editing";
import { EventManager, Events } from "@paperbits/common/events";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { CollapsibleModel } from "../collapsibleModel";
import { CollapsibleViewModel } from "./collapsibleViewModel";

export class CollapsibleViewModelBinder implements ViewModelBinder<CollapsibleModel, CollapsibleViewModel> {

    constructor(private readonly eventManager: EventManager) { }

    public async modelToViewModel(model: CollapsibleModel, viewModel?: CollapsibleViewModel, bindingContext?: Bag<any>): Promise<CollapsibleViewModel> {
        if (!viewModel) {
            viewModel = new CollapsibleViewModel();

            viewModel["widgetBinding"] = {
                displayName: "Collapsible",
                layer: bindingContext?.layer,
                model: model,
                draggable: true,
                flow: ComponentFlow.Block,
                editor: "collapsible-editor",
                applyChanges: async (updatedModel: CollapsibleModel) => {
                    await this.modelToViewModel(updatedModel, viewModel, bindingContext);
                    this.eventManager.dispatchEvent(Events.ContentUpdate);
                }
            };
        }

        const runtimeConfig = {
            sections: model.sections
        };

        viewModel.runtimeConfig(JSON.stringify(runtimeConfig));

        return viewModel;
    }

    public canHandleModel(model: CollapsibleModel): boolean {
        return model instanceof CollapsibleModel;
    }
}