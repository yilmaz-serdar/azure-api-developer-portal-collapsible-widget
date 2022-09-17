import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { CollapsibleHandlers } from "./collapsibleHandlers";
import { CollapsibleModelBinder } from "./collapsibleModelBinder";
import { CollapsibleEditor } from "./ko/collapsibleEditor";
import { CollapsibleViewModelBinder } from "./ko/collapsibleViewModelBinder";

export class CollapsibleDesignModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("collapsibleEditor", CollapsibleEditor);
        injector.bindToCollection("widgetHandlers", CollapsibleHandlers, "collapsibleHandlers");
        injector.bindToCollection("modelBinders", CollapsibleModelBinder);
        injector.bindToCollection("viewModelBinders", CollapsibleViewModelBinder);
    }
}