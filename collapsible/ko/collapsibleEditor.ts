import * as ko from "knockout";
import template from "./collapsibleEditor.html";
import { Component, OnMounted, Param, Event } from "@paperbits/common/ko/decorators";
import { Section, CollapsibleModel } from "../collapsibleModel";

@Component({
    selector: "collapsible-editor",
    template: template
})
export class CollapsibleEditor {
    public readonly title: ko.Observable<string>;
    public readonly explanation: ko.Observable<string>;
    public readonly sections: ko.ObservableArray<Section>;

    constructor() {
        this.title = ko.observable();
        this.explanation = ko.observable();
        this.sections = ko.observableArray([]);
    }

    @Param()
    public model: CollapsibleModel;

    @Event()
    public onChange: (model: CollapsibleModel) => void;

    @OnMounted()
    public initialize(): void {
        if (this.model.sections) {
            this.sections(this.model.sections);
        }
    }

    private applyChanges(): void {
        this.model.sections = this.sections();
        this.onChange(this.model);
    }

    public add(): void {
        if (!this.title() || !this.explanation())
            return;

        this.sections.push({ title: this.title(), explanation: this.explanation() });

        this.title("");
        this.explanation("");
        this.applyChanges();
    }

    public remove(announcement: Section): void {     
        this.sections.remove(announcement);
        this.applyChanges();
    }
}