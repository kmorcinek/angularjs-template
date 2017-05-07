import { ContentModel } from "../../../core/models/impl/ContentModel";
declare var require: any;

export class TweetContentComponent implements ng.IComponentOptions {
    public controller: any = TweetContentController;
    public template = require('./TweetContentComponent.html');
}
export class TweetContentController {
    public static $inject: Array<string> = ["ContentModel"];
    constructor(public model: ContentModel) {
    }
}