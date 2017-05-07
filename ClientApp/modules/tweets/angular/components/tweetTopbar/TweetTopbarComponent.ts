import { TopbarModel } from "../../../core/models/impl/TopbarModel";
import { SharedModel } from "../../../core/models/impl/SharedModel";
declare var require: any;

export class TweetTopbarComponent implements ng.IComponentOptions {
    public controller: any = TweetTopbarController;
    public template: string = require('./TweetTopbarComponent.html');
}
export class TweetTopbarController {
    public static $inject: Array<string> = ["SharedModel", "TopbarModel"];

    constructor(public sharedModel: SharedModel, public model: TopbarModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }

    public post(): void {
        this.model.addTweet();
    }
}