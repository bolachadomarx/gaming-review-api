"use strict";
exports.__esModule = true;
var get_console_factory_1 = require("@/main/factory/console/get-console.factory");
var get_all_console_factory_1 = require("@/main/factory/console/get-all-console.factory");
var update_console_factory_1 = require("@/main/factory/console/update-console.factory");
var create_console_factory_1 = require("@/main/factory/console/create-console.factory");
var express_route_adapter_1 = require("./../adapters/express-route-adapter");
var delete_console_factory_1 = require("@/main/factory/console/delete-console.factory");
exports["default"] = (function (router) {
    router.post('/console', express_route_adapter_1.adaptRoute(create_console_factory_1.makeCreateConsoleController()));
    router.put('/console/:idConsole', express_route_adapter_1.adaptRoute(update_console_factory_1.makeUpdateConsoleController()));
    router.get('/console', express_route_adapter_1.adaptRoute(get_all_console_factory_1.makeGetAllConsoleController()));
    router.get('/console/:idConsole', express_route_adapter_1.adaptRoute(get_console_factory_1.makeGetConsoleController()));
    router["delete"]('/console/:idConsole', express_route_adapter_1.adaptRoute(delete_console_factory_1.makeDeleteConsoleController()));
});
