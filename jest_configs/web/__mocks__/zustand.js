"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = create;
var react_1 = require("@testing-library/react");
var zustand = jest.requireActual("zustand");
var actualCreate = zustand.create;
// a variable to hold reset functions for all stores declared in the app
var storeResetFns = new Set();
// when creating a store, we get its initial state, create a reset function and add it in the set
var createImpl = function (createState) {
    var store = actualCreate(createState);
    var initialState = store.getState();
    storeResetFns.add(function () { return store.setState(initialState, true); });
    return store;
};
// support currying
function create(f) {
    return f === undefined ? createImpl : createImpl(f);
}
// Reset all stores after each test run
beforeEach(function () {
    (0, react_1.act)(function () { return storeResetFns.forEach(function (resetFn) { return resetFn(); }); });
});
