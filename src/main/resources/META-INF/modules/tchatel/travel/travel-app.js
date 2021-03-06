System.register(["angular2/core", "angular2/router", "./travel-list", "./travel-edit"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, travel_list_1, travel_edit_1;
    var TravelApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (travel_list_1_1) {
                travel_list_1 = travel_list_1_1;
            },
            function (travel_edit_1_1) {
                travel_edit_1 = travel_edit_1_1;
            }],
        execute: function() {
            TravelApp = (function () {
                function TravelApp() {
                }
                TravelApp = __decorate([
                    router_1.RouteConfig([
                        { path: '/', component: travel_list_1.TravelList, as: 'List' },
                        { path: '/edit/:id', component: travel_edit_1.TravelEdit, as: 'Edit' },
                    ]),
                    core_1.Component({
                        selector: 'travel-app',
                        template: "\n        <h1>Angular 2 : Sample Travels Application</h1>\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_2.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TravelApp);
                return TravelApp;
            }());
            exports_1("TravelApp", TravelApp);
        }
    }
});
//# sourceMappingURL=travel-app.js.map