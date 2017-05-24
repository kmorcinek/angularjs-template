import {Tweet} from "../../entities/Tweet";

interface IBrowserHubServer {
    getData(): JQueryDeferred<Tweet>;
}

interface IBrowserHub {
    server: IBrowserHubServer;
}

interface SignalR {
    browserHub: IBrowserHub;
}