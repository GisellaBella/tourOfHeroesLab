"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require('./hero.service');
// export class Hero {
//   id: number;
//   name: string;
// }
// const HEROES: Hero[] = [
//   { id: 11, name: 'Mr. Nice' },
//   { id: 12, name: 'Narco' },
//   { id: 13, name: 'Bombasto' },
//   { id: 14, name: 'Celeritas' },
//   { id: 15, name: 'Magneta' },
//   { id: 16, name: 'RubberMan' },
//   { id: 17, name: 'Dynama' },
//   { id: 18, name: 'Dr IQ' },
//   { id: 19, name: 'Magma' },
//   { id: 20, name: 'Tornado' }
// ];
var HeroesComponent = (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.heroes = this.heroService.getHeroes();
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n  \t\t\t\t<h2>My Heroes</h2>\n  \t\t\t\t\t<ul class=\"heroes\">\n  \t\t\t\t\t\t<li *ngFor=\"let hero of heroes\"  [class.selected]=\"hero === selectedHero\"  (click)=\"onSelect(hero)\"><span class=\"badge\">{{hero.id}} </span>{{hero.name}}</li>\n  \t\t\t\t\t</ul>\n  \t\t\t\t\t<my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n \t\t\t",
            styles: ["\n\t\t  .selected {\n\t\t    background-color: #CFD8DC !important;\n\t\t    color: white;\n\t\t  }\n\t\t  .heroes {\n\t\t    margin: 0 0 2em 0;\n\t\t    list-style-type: none;\n\t\t    padding: 0;\n\t\t    width: 15em;\n\t\t  }\n\t\t  .heroes li {\n\t\t    cursor: pointer;\n\t\t    position: relative;\n\t\t    left: 0;\n\t\t    background-color: #EEE;\n\t\t    margin: .5em;\n\t\t    padding: .3em 0;\n\t\t    height: 1.6em;\n\t\t    border-radius: 4px;\n\t\t  }\n\t\t  .heroes li.selected:hover {\n\t\t    background-color: #BBD8DC !important;\n\t\t    color: white;\n\t\t  }\n\t\t  .heroes li:hover {\n\t\t    color: #607D8B;\n\t\t    background-color: #DDD;\n\t\t    left: .1em;\n\t\t  }\n\t\t  .heroes .text {\n\t\t    position: relative;\n\t\t    top: -3px;\n\t\t  }\n\t\t  .heroes .badge {\n\t\t    display: inline-block;\n\t\t    font-size: small;\n\t\t    color: white;\n\t\t    padding: 0.8em 0.7em 0 0.7em;\n\t\t    background-color: #607D8B;\n\t\t    line-height: 1em;\n\t\t    position: relative;\n\t\t    left: -1px;\n\t\t    top: -4px;\n\t\t    height: 1.8em;\n\t\t    margin-right: .8em;\n\t\t    border-radius: 4px 0 0 4px;\n\t\t  }\n\t"]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map