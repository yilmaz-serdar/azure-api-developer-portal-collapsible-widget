import * as ko from "knockout";
import template from "./collapsible.html";
import { Component, RuntimeComponent, OnMounted, Param } from "@paperbits/common/ko/decorators";
import { Section } from "../../collapsibleModel";

@RuntimeComponent({
    selector: "collapsible-runtime"
})
@Component({
    selector: "collapsible-runtime",
    template: template
})
export class Collapsible {
    
    constructor() {
        this.sections = ko.observableArray([]);
    }

    @Param()
    public sections: ko.ObservableArray<Section>;

    @OnMounted()
    public async initialize(): Promise<void> {
    }
}
