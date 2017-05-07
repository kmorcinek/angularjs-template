import { SharedModel } from "../../../core/models/impl/SharedModel";
declare var require: any;

export class TweetMainComponent implements ng.IComponentOptions {
    public controller: any = TweetMainController;
    public template: string = require('./TweetMainComponent.html');
}
export class TweetMainController {
    public static $inject: Array<string> = ["SharedModel"];
    constructor(public sharedModel: SharedModel) {
    }
}
