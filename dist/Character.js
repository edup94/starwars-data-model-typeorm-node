"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.__esModule = true;
exports.Character = void 0;
var typeorm_1 = require("typeorm");
var Favorite_1 = require("./Favorite");
var Character = /** @class */ (function (_super) {
    __extends(Character, _super);
    function Character() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Character.prototype, "CharacterID");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "Name");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Character.prototype, "Height");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Character.prototype, "Mass");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "HairColor");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "SkinColor");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "EyeColor");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "BirthYear");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "Gender");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "Homeworld");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Character.prototype, "ImgUrl");
    __decorate([
        typeorm_1.ManyToOne(function () { return Favorite_1.Favorite; }, function (favorite) { return favorite.characters; }),
        __metadata("design:type", Favorite_1.Favorite)
    ], Character.prototype, "favorite");
    Character = __decorate([
        typeorm_1.Entity()
    ], Character);
    return Character;
}(typeorm_1.BaseEntity));
exports.Character = Character;