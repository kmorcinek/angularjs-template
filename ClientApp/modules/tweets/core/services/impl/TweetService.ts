import {Tweet} from "../../entities/Tweet";
import * as jQuery from 'jquery';
import 'signalr';

export class TweetService {
    public getAll(): Array<Tweet> {
        var returnObj: Array<Tweet> = new Array<Tweet>();
        for (var i: number = 0; i < 5; i++) {
            returnObj.push(new Tweet("@user", "Content", false));
        }

        // Try also uncommenting the second
        jQuery('body').css('color', 'green');
        //$('body').css('color', 'red');

        var signalRExists = jQuery.connection != null;
        console.log('signalRExist', signalRExists);

        return returnObj;
    }
}