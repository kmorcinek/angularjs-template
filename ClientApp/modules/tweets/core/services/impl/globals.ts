import {Tweet} from "../../entities/Tweet";

declare global {
    interface IBrowserHubServer {
        getData(): JQueryDeferred<Tweet>;
    }

    interface IBrowserHub {
        server: IBrowserHubServer;
    }

    interface SignalR {
        browserHub: IBrowserHub;
    }
}