import {Tweet} from "../../entities/Tweet";
import * as jQuery from 'jquery';
import 'signalr';
import './globals'

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

        jQuery.connection.browserHub.server.getData()
            .done(() => {
                console.log('getData');
            });

        return returnObj;
    }
}