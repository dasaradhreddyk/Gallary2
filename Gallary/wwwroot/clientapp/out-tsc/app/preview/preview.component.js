var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    PreviewComponent.prototype.ngOnInit = function () {
    };
    PreviewComponent.prototype.ngOnChanges = function (changes) {
        console.log("Preview" + this.url);
    };
    PreviewComponent.prototype.photoURL = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], PreviewComponent.prototype, "url", void 0);
    PreviewComponent = __decorate([
        Component({
            selector: 'app-preview',
            templateUrl: './preview.component.html',
            styleUrls: ['./preview.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer])
    ], PreviewComponent);
    return PreviewComponent;
}());
export { PreviewComponent };
//# sourceMappingURL=preview.component.js.map