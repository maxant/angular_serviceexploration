var HeroService = (function () {
    function HeroService(otherService) {
        this.otherService = otherService;
    }
    HeroService.prototype.getHeroes = function () {
        {
            //here we are testing passing a function as a parameter
            console.log(\"otherService: \" + this.otherService);
            this.otherService.doSomethingTakingAFunctionAsAParameter(this.aFunctionToPassAsAParameter);
            function aLocalFunction(aTestString) {
                console.log(\"that worked too :-) \" + aTestString);
            }
            this.otherService.doSomethingTakingAFunctionAsAParameter(aLocalFunction);
            var aLocalArrowFunction = function (aTestString) {
                console.log(\"that worked three :-) \" + aTestString);
            };
            this.otherService.doSomethingTakingAFunctionAsAParameter(aLocalArrowFunction);
        }
        //now do what this method was designed to do and return some data
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    HeroService.prototype.aFunctionToPassAsAParameter = function (aTestString) {
        console.log(\"that worked :-) \" + aTestString);
    };
    HeroService = __decorate([
            core_1.Injectable(),
            __metadata('design:paramtypes', [other_service_1.OtherService])
        ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;


var other_service_1 = __webpack_require__(403);
__webpack_require__(404); //import, so that webpack packs it up
var AppComponent = (function () {
    function AppComponent(heroService) {
        this.heroService = heroService;
        this.title = 'Tour of Heroes';
    }
    AppComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        //import, so that webpack packs it up
                                                                                        core_1.Component({
                                                                                                    selector: 'my-app',
                                                                                                                template: __webpack_require__(408),
                                                                                                                            styles: [__webpack_require__(409)],
                                                                                                                                        directives: [hero_detail_component_1.HeroDetailComponent],

providers: [hero_service_1.HeroService, other_service_1.OtherService]
        }),
                __metadata('design:paramtypes', [hero_service_1.HeroService])
                    ], AppComponent);
                        return AppComponent;
                        }());
                        exports.AppComponent = AppComponent;
                        //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAuY29tcG9uZW50LnRzPzYxNmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3RoZXJTZXJ2aWNlIH0gZnJvbSAnLi9vdGhlci5zZXJ2aWNlJztcblxuaW1wb3J0ICcuLi8uLi9zdHlsZXMuY3NzJzsgLy9pbXBvcnQsIHNvIHRoYXQgd2VicGFjayBwYWNrcyBpdCB1cFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50Lmh0bWwnKSxcbiAgc3R5bGVzOiBbcmVxdWlyZSgnLi9hcHAuY29tcG9uZW50LmNzcycpXSxcbiAgZGlyZWN0aXZlczogW0hlcm9EZXRhaWxDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtIZXJvU2VydmljZSwgT3RoZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB0aXRsZSA9ICdUb3VyIG9mIEhlcm9lcyc7XG4gIGhlcm9lczogSGVyb1tdO1xuICBzZWxlY3RlZEhlcm86IEhlcm87XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH1cbiAgZ2V0SGVyb2VzKCkge1xuICAgIHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVyb2VzKCkudGhlbihoZXJvZXMgPT4gdGhpcy5oZXJvZXMgPSBoZXJvZXMpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZ2V0SGVyb2VzKCk7XG4gIH1cbiAgb25TZWxlY3QoaGVybzogSGVybykgeyB0aGlzLnNlbGVjdGVkSGVybyA9IGhlcm87IH1cbn1cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYXBwL2FwcC5jb21wb25lbnQudHNcbiAqKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBU0E7QUFJQTtBQUFBO0FBSEE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFGQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUFBO0FBYUE7QUFBQTtBQVpBOyIsInNvdXJjZVJvb3QiOiIifQ==");


var OtherService = (function () {
    function OtherService() {
        this.someMemberVariable = 200;
    }
    OtherService.prototype.doSomethingTakingAFunctionAsAParameter = function (f) {
        f("some test string + " + this.someMemberVariable);
    };
    OtherService = __decorate([
      core_1.Injectable(), __metadata('design:paramtypes', [])
    ], OtherService);
    return OtherService;
}());
exports.OtherService = OtherService;
