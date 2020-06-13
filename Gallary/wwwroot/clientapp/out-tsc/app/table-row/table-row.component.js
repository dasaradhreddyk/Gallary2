var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AdventureTimeService } from '../services/adventure-time.service';
var TableRowComponent = /** @class */ (function () {
    function TableRowComponent(atService) {
        this.atService = atService;
        this.url1 = new EventEmitter();
        this.searchword = new EventEmitter();
    }
    TableRowComponent.prototype.ngOnInit = function () {
    };
    TableRowComponent.prototype.toggle = function (str) {
        this.atService.Updateclicks(str);
        console.log(str);
        this.url = str;
        //this.url1.emit(str);
        this.searchword.emit({ url: str, type: 'image' });
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TableRowComponent.prototype, "character", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], TableRowComponent.prototype, "columns", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableRowComponent.prototype, "value", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableRowComponent.prototype, "url", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TableRowComponent.prototype, "url1", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], TableRowComponent.prototype, "searchword1", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TableRowComponent.prototype, "searchword", void 0);
    TableRowComponent = __decorate([
        Component({
            selector: '[app-table-row]',
            templateUrl: './table-row.component.html',
            styleUrls: ['./table-row.component.css']
        }),
        __metadata("design:paramtypes", [AdventureTimeService])
    ], TableRowComponent);
    return TableRowComponent;
}());
export { TableRowComponent };
//# sourceMappingURL=table-row.component.js.map