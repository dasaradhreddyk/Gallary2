var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.open = function () {
        this.modal.nativeElement.style.display = 'block';
    };
    ShareComponent.prototype.close = function () {
        this.modal.nativeElement.style.display = 'none';
    };
    __decorate([
        ViewChild('myModal', { read: false }),
        __metadata("design:type", ElementRef)
    ], ShareComponent.prototype, "modal", void 0);
    ShareComponent = __decorate([
        Component({
            selector: 'app-modal',
            template: "\n    <div #myModal class=\"container\">\n    <div class=\"content\">\n      <p>Some content here...</p>\n      <button (click)=\"close()\">Close</button>\n    </div>\n    </div>\n  ",
            styleUrls: ['./share.component.css']
        })
    ], ShareComponent);
    return ShareComponent;
}());
export { ShareComponent };
//# sourceMappingURL=share.component.js.map