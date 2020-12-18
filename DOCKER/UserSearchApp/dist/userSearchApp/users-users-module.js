(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "2A6q":
/*!*********************************************!*\
  !*** ./src/app/users/state/user.effects.ts ***!
  \*********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _state_user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state/user.actions */ "7dDi");
/* harmony import */ var _service_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/users.service */ "Df4m");








class UserEffects {
    constructor(actions$, usersService) {
        this.actions$ = actions$;
        this.usersService = usersService;
        this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => {
            return this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["searchUsersByFilterSearchText"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(action => this.usersService.getUsersByFullSearchText(action.filterSearchText)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(users => _state_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadUsersSuccess"]({ users })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_state_user_actions__WEBPACK_IMPORTED_MODULE_4__["loadUsersFailure"]({ error }))))));
        });
    }
}
UserEffects.ɵfac = function UserEffects_Factory(t) { return new (t || UserEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"])); };
UserEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserEffects, factory: UserEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _service_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "Df4m":
/*!************************************************!*\
  !*** ./src/app/users/service/users.service.ts ***!
  \************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class UsersService {
    constructor(http) {
        this.http = http;
        this.usersUrl = "http://localhost:3000/users";
    }
    getUsers() {
        return this.http.get(this.usersUrl)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => console.log(JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getUsersByFullSearchText(search) {
        if (search === null) {
            return this.getUsers();
        }
        return this.http.get(this.usersUrl + '?q=' + search)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(data => console.log(JSON.stringify(data))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(err) {
        let errorMessage;
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
        }
        console.error(err);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zrcO":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _users_users_home_users_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/users-home/users-home.component */ "5J9E");
/* harmony import */ var _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/users-list/users-list.component */ "iNSo");
/* harmony import */ var _users_users_search_users_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/users-search/users-search.component */ "YwI9");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _state_user_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/user.reducer */ "Lndh");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _state_user_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state/user.effects */ "2A6q");
/* harmony import */ var _shared_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/datepicker/datepicker.component */ "N1cB");
/* harmony import */ var _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/dropdown/dropdown.component */ "ahQ3");


















const userRoutes = [
    { path: '', component: _users_users_home_users_home_component__WEBPACK_IMPORTED_MODULE_3__["UsersHomeComponent"] }
];
class UsersModule {
}
UsersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsersModule_Factory(t) { return new (t || UsersModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(userRoutes),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('users', _state_user_reducer__WEBPACK_IMPORTED_MODULE_7__["usersReducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_user_effects__WEBPACK_IMPORTED_MODULE_10__["UserEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_users_users_home_users_home_component__WEBPACK_IMPORTED_MODULE_3__["UsersHomeComponent"],
        _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
        _users_users_search_users_search_component__WEBPACK_IMPORTED_MODULE_5__["UsersSearchComponent"],
        _shared_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__["DatepickerComponent"],
        _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["DropdownComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _users_users_home_users_home_component__WEBPACK_IMPORTED_MODULE_3__["UsersHomeComponent"],
                    _users_users_list_users_list_component__WEBPACK_IMPORTED_MODULE_4__["UsersListComponent"],
                    _users_users_search_users_search_component__WEBPACK_IMPORTED_MODULE_5__["UsersSearchComponent"],
                    _shared_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_11__["DatepickerComponent"],
                    _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["DropdownComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forChild(userRoutes),
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('users', _state_user_reducer__WEBPACK_IMPORTED_MODULE_7__["usersReducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_9__["EffectsModule"].forFeature([_state_user_effects__WEBPACK_IMPORTED_MODULE_10__["UserEffects"]])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map