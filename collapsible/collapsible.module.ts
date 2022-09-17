import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { CollapsibleModelBinder } from "./collapsibleModelBinder";
import { CollapsibleViewModelBinder } from "./ko/collapsibleViewModelBinder";
import { CollapsibleViewModel } from "./ko/collapsibleViewModel";

export class CollapsibleModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("collapsible", CollapsibleViewModel);
        injector.bindToCollection("modelBinders", CollapsibleModelBinder);
        injector.bindToCollection("viewModelBinders", CollapsibleViewModelBinder);
    }
}