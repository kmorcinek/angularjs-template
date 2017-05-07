import { SharedModel } from "../../../core/models/impl/SharedModel";

declare var require: any;

export class PageTweetsComponent implements ng.IComponentOptions {
    public controller: any = PageTweetsController;
    public template = require('./PageTweetsComponent.html');
}
export class PageTweetsController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}