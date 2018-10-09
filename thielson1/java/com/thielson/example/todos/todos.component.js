"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var reducers_1 = require("guernsey3/java/com/guernsey/example/reducers/reducers");
var TodosComponent = /** @class */ (function () {
    function TodosComponent(store) {
        this.store = store;
        this.editing = false;
    }
    TodosComponent.prototype.ngOnInit = function () {
        this.todos$ = this.store.select('todoReducer');
    };
    TodosComponent.prototype.addTodo = function (value) {
        this.store.dispatch({ type: reducers_1.ADD_TODO, payload: { value: value, done: false } });
        this.todo = '';
    };
    TodosComponent.prototype.deleteTodo = function (index) {
        this.store.dispatch({ type: reducers_1.DELETE_TODO, payload: { index: index } });
    };
    TodosComponent.prototype.editTodo = function (todo, index) {
        this.editing = true;
        this.todo = todo.value;
        this.indexToEdit = index;
    };
    TodosComponent.prototype.cancelEdit = function () {
        this.editing = false;
        this.todo = '';
        this.indexToEdit = null;
    };
    TodosComponent.prototype.updateTodo = function (updatedTodo) {
        this.store.dispatch({ type: reducers_1.UPDATE_TODO, payload: { index: this.indexToEdit, newValue: updatedTodo } });
        this.todo = '';
        this.indexToEdit = null;
        this.editing = false;
    };
    TodosComponent.prototype.toggleDone = function (todo, index) {
        this.store.dispatch({ type: reducers_1.TOGGLE_DONE, payload: { index: index, done: todo.done } });
    };
    TodosComponent = __decorate([
        core_1.Component({
            selector: 'todos',
            templateUrl: './todos.component.html',
            styleUrls: ['./todos.component.css']
        })
    ], TodosComponent);
    return TodosComponent;
}());
exports.TodosComponent = TodosComponent;
