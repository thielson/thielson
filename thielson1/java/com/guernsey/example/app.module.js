"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var store_1 = require("@ngrx/store");
var hello_world_component_1 = require("guernsey3/java/com/guernsey/example/hello-world/hello-world.component");
var hello_world_module_1 = require("guernsey3/java/com/guernsey/example/hello-world/hello-world.module");
var reducers_1 = require("guernsey3/java/com/guernsey/example/reducers/reducers");
var todos_component_1 = require("guernsey3/java/com/guernsey/example/todos/todos.component");
var todos_module_1 = require("guernsey3/java/com/guernsey/example/todos/todos.module");
var app_component_1 = require("./app.component");
exports.appRoutes = [
    { path: '', pathMatch: 'full', component: hello_world_component_1.HelloWorldComponent },
    { path: 'todos', pathMatch: 'full', component: todos_component_1.TodosComponent },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule, router_1.RouterModule.forRoot(exports.appRoutes), hello_world_module_1.HelloWorldModule, todos_module_1.TodosModule,
                store_1.StoreModule.forRoot({ todoReducer: reducers_1.todoReducer })
            ],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
