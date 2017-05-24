import * as _ from "underscore"

import {Tweet} from "../../entities/Tweet";
import {TweetService} from "../../services/impl/TweetService";
export class SharedModel {
    public static $inject: Array<string> = ["TweetService"];
    public tweets: Array<Tweet>;
    public topbarCollapsed: Boolean = false;
    public sidebarCollapsed: Boolean = false;

    constructor(tweetService: TweetService) {
        this.tweets = tweetService.getAll();

        var ints = [1, 2];
        let map = _.map(ints, x => x * 2);
    }

    public toggleTopbar(): void {
        this.topbarCollapsed = !this.topbarCollapsed;
    }

    public toggleSidebar(): void {
        this.sidebarCollapsed = !this.sidebarCollapsed;
    }

}

