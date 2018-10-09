"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
exports.__esModule = true;
exports.ADD_TODO = 'ADD_TODO';
exports.DELETE_TODO = 'DELETE_TODO';
exports.UPDATE_TODO = 'UPDATE_TODO';
exports.TOGGLE_DONE = 'TOGGLE_DONE';
function todoReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case exports.ADD_TODO:
            return [action.payload].concat(state);
        case exports.DELETE_TODO:
            return state.filter(function (item, index) { return index !== action.payload.index; });
        case exports.UPDATE_TODO:
            return state.map(function (item, index) {
                return index === action.payload.index ? __assign({}, item, { value: action.payload.newValue }) : item;
            });
        case exports.TOGGLE_DONE:
            return state.map(function (item, index) {
                return index === action.payload.index ? __assign({}, item, { done: !action.payload.done }) : item;
            });
        default:
            return state;
    }
}
exports.todoReducer = todoReducer;
