import * as ko from "knockout";
import template from "./collapsible.html";
import { Component } from "@paperbits/common/ko/decorators";

@Component({
    selector: "collapsible",
    template: template
})
export class CollapsibleViewModel {
    public readonly runtimeConfig: ko.Observable<string>;

    constructor() {
        this.runtimeConfig = ko.observable<string>();
    }
}