var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdventureTimeService } from '../services/adventure-time.service';
var VideoplayerComponent = /** @class */ (function () {
    function VideoplayerComponent(sanitizer, atService) {
        var _this = this;
        this.sanitizer = sanitizer;
        this.atService = atService;
        this.name = 'Angular 6';
        this.safeSrc2 = [];
        this.searchword = "";
        this.data = [];
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk");
        this.items = this.atService.getVideodata(this.searchword);
        console.log("call1");
        console.log(this.items);
        this.safeSrc2.push(this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/c9F5kMUfFKk"));
        this.atService.getvideodata1(this.searchword)
            .subscribe(function (res) {
            _this.data = res;
            _this.data.forEach(function (x) { return console.log(x.name); });
            _this.data.forEach(function (x) { return _this.safeSrc2.push(_this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + x.name)); });
            console.log("call2");
            console.log(_this.data);
        }, function (err) {
            console.log(err);
        });
    }
    VideoplayerComponent = __decorate([
        Component({
            selector: 'my-video',
            templateUrl: './videoplayer.component.html',
            styleUrls: ['./videoplayer.component.css']
        }),
        __metadata("design:paramtypes", [DomSanitizer, AdventureTimeService])
    ], VideoplayerComponent);
    return VideoplayerComponent;
}());
export { VideoplayerComponent };
//# sourceMappingURL=videoplayer.component.js.map