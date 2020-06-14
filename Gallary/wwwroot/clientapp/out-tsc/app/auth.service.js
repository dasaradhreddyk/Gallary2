var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth0-variables';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
window.global = window;
var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        this.auth0 = new auth0.WebAuth({
            clientID: AUTH_CONFIG.clientID,
            domain: AUTH_CONFIG.domain,
            responseType: 'token id_token',
            audience: AUTH_CONFIG.apiUrl,
            redirectUri: AUTH_CONFIG.callbackURL,
            scope: 'openid profile email read:messages'
        });
        this.ssoAuthComplete$ = new Observable(function (obs) { return (_this.observer = obs); });
    }
    AuthService.prototype.login = function () {
        this.auth0.authorize();
    };
    AuthService.prototype.handleAuthentication = function () {
        var _this = this;
        this.auth0.parseHash(function (err, authResult) {
            if (authResult && authResult.accessToken && authResult.idToken) {
                _this.setSession(authResult);
                _this.router.navigate(['/']);
            }
            else if (err) {
                _this.router.navigate(['/']);
                console.log(err);
                alert("Error: " + err.error + ". Check the console for further details.");
            }
        });
    };
    AuthService.prototype.getProfile = function (cb) {
        var accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            throw new Error('Access token must exist to fetch profile');
        }
        var self = this;
        this.auth0.client.userInfo(accessToken, function (err, profile) {
            if (profile) {
                self.userProfile = profile;
            }
            cb(err, profile);
        });
    };
    AuthService.prototype.setSession = function (authResult) {
        // Set the time that the access token will expire at
        var expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
    };
    AuthService.prototype.logout = function () {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // Go back to the home route
        this.router.navigate(['/']);
    };
    AuthService.prototype.isAuthenticated = function () {
        // Check whether the current time is past the
        // access token's expiry time
        var expiresAt = JSON.parse(localStorage.getItem('expires_at') || '{}');
        return new Date().getTime() < expiresAt;
    };
    AuthService.prototype.renewToken = function () {
        var _this = this;
        this.auth0.checkSession({}, function (err, result) {
            if (err) {
                alert("Could not get a new token (" + err.error + ": " + err.error_description + ").");
                _this.login();
            }
            else {
                _this.setSession(result);
                _this.observer.next(true);
            }
        });
    };
    //public scheduleRenewal() {
    //  if (!this.isAuthenticated()) return;
    //  this.unscheduleRenewal();
    //  const expiresAt = JSON.parse(window.localStorage.getItem('expires_at'));
    //  const source = Observable.of(expiresAt).flatMap(expiresAt => {
    //    const now = Date.now();
    //    // Use the delay in a timer to
    //    // run the refresh at the proper time
    //    return Observable.timer(Math.max(1, expiresAt - now));
    //  });
    //  // Once the delay time from above is
    //  // reached, get a new JWT and schedule
    //  // additional refreshes
    //  this.refreshSubscription = source.subscribe(() => {
    //    this.renewToken();
    //    this.scheduleRenewal();
    //  });
    //}
    AuthService.prototype.unscheduleRenewal = function () {
        if (!this.refreshSubscription)
            return;
        this.refreshSubscription.unsubscribe();
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map