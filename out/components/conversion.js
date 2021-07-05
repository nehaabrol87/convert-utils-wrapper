"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversion = void 0;
var conversion_1 = require("./../models/conversion");
var convert_units_1 = __importDefault(require("convert-units"));
var Conversion = /** @class */ (function () {
    function Conversion(valueToConvert, propertyToConvert) {
        this.valueToConvert = 0;
        this.propertyToConvert = '';
        this.precision = 4;
        this.valueToConvert = valueToConvert;
        this.propertyToConvert = propertyToConvert;
    }
    Conversion.prototype.toImperial = function () {
        var convertedValue = null;
        if (this.propertyToConvert === conversion_1.PropertyToConvert.Length) {
            convertedValue = convert_units_1.default(this.valueToConvert).from('ft').to('m');
        }
        if (this.propertyToConvert === conversion_1.PropertyToConvert.Mass) {
            convertedValue = convert_units_1.default(this.valueToConvert).from('kg').to('lb');
        }
        if (this.propertyToConvert === conversion_1.PropertyToConvert.Volume) {
            convertedValue = convert_units_1.default(this.valueToConvert).from('ft3').to('m3');
        }
        return convertedValue.toFixed(this.precision);
    };
    Conversion.prototype.toMetric = function () {
        var convertedValue = null;
        if (this.propertyToConvert === conversion_1.PropertyToConvert.Length) {
            convertedValue = convert_units_1.default(this.valueToConvert).from('m').to('ft');
        }
        if (this.propertyToConvert === conversion_1.PropertyToConvert.Mass) {
            convertedValue = convert_units_1.default(this.valueToConvert).from('lb').to('kg');
        }
        if (this.propertyToConvert === conversion_1.PropertyToConvert.Volume) {
            convertedValue = convert_units_1.default(this.valueToConvert).from('m3').to('ft3');
        }
        return convertedValue.toFixed(this.precision);
    };
    return Conversion;
}());
exports.Conversion = Conversion;
