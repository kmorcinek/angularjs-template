import {Tweet} from "../../entities/Tweet";
import {SharedModel} from "./SharedModel";

export class ContentModel {
    public tweets: Array<Tweet>;

    constructor(sharedModel: SharedModel) {
        this.tweets = sharedModel.tweets;
    }
}
