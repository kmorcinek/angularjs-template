import 'expose-loader?jQuery!jquery';

import "./modules/application/angular/index";
import "./modules/tweets/angular/index";
import "./modules/about/angular/index";
import * as angular from "angular";

// load our default (non specific) css
import "bootstrap/dist/css/bootstrap.css";
import "./styles/screen.less"

angular.module("app", ["app.application", "app.tweets", "app.about"]);
angular.bootstrap(document, ["app"], {
    strictDi: true
});