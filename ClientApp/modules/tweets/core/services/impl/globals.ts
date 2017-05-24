interface IBrowserHubServer {
    getData<T>(): JQueryDeferred<T>;
}

interface IBrowserHub {
    server: IBrowserHubServer;
}

interface SignalR {
    browserHub: IBrowserHub;
}