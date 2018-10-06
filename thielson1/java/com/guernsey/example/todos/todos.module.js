"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var todos_component_1 = require("./todos.component");
var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = __decorate([
        core_1.NgModule({
            declarations: [todos_component_1.TodosComponent],
            imports: [common_1.CommonModule, forms_1.FormsModule]
        })
    ], TodosModule);
    return TodosModule;
}());
exports.TodosModule = TodosModule;