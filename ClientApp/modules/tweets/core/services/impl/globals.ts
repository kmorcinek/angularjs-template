
interface IBrowserHubServer {
    getData(): JQueryDeferred<string>;
}

interface IBrowserHub {
    server: IBrowserHubServer;
}

interface SignalR {
    browserHub: IBrowserHub;
}