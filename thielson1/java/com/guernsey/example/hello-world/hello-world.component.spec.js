"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
var hello_world_component_1 = require("./hello-world.component");
var hello_world_module_ngsummary_1 = require("./hello-world.module.ngsummary");
// TODO(alexeagle): this helper should be in @angular/platform-browser-dynamic/testing
try {
    testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
}
catch (_a) {
    // Ignore exceptions when calling it multiple times.
}
describe('BannerComponent (inline template)', function () {
    var comp;
    var fixture;
    var el;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [hello_world_component_1.HelloWorldComponent],
            aotSummaries: hello_world_module_ngsummary_1.HelloWorldModuleNgSummary
        });
        testing_1.TestBed.compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(hello_world_component_1.HelloWorldComponent);
        comp = fixture.componentInstance;
        el = fixture.debugElement.query(platform_browser_1.By.css('div')).nativeElement;
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.name);
    });
    it('should display a different test title', function () {
        comp.name = 'Test';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test');
    });
});
