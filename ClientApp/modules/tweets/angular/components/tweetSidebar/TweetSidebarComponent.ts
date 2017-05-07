import {SidebarModel} from "../../../core/models/impl/SidebarModel";
import { SharedModel } from "../../../core/models/impl/SharedModel";
declare var require: any;

export class TweetSidebarComponent implements ng.IComponentOptions {
    public template: string = require('./TweetSidebarComponent.html');
    public controller: any = TweetSidebarController;
}
export class TweetSidebarController {
    public static $inject: Array<string> = ["SidebarModel", "SharedModel"];

    constructor(public model: SidebarModel, public sharedModel: SharedModel) {
    }

    public toggleCollapsed(): void {
        this.model.toggleCollapsed();
    }
}
