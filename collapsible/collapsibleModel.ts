export class CollapsibleModel {
    public sections: Array<Section>;
}

export class Section {
    public title: string;
    public explanation: string;

    constructor(title: string, explanation: string) {
        this.title = title;
        this.explanation = explanation;
    }
}