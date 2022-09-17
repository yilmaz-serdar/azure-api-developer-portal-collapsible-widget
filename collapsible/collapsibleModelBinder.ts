import { Contract } from "@paperbits/common";
import { IModelBinder } from "@paperbits/common/editing";
import { CollapsibleModel } from "./collapsibleModel";
import { CollapsibleContract } from "./collapsibleContract";

export class CollapsibleModelBinder implements IModelBinder<CollapsibleModel> {

    public canHandleContract(contract: Contract): boolean {
        return contract.type === "collapsible";
    }

    public canHandleModel(model: Object): boolean {
        return model instanceof CollapsibleModel;
    }

    public async contractToModel(contract: CollapsibleContract): Promise<CollapsibleModel> {
        const model = new CollapsibleModel();
        model.sections = contract.sections;

        return model;
    }

    public modelToContract(model: CollapsibleModel): Contract {
        const contract: CollapsibleContract = {
            type:  "collapsible",
            sections: model.sections
        };

        return contract;
    }
}
