"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conversion_1 = require("./components/conversion");
var conversion_2 = require("./models/conversion");
//Instantiate Conversion object for Length
var lengthConversion = new conversion_1.Conversion(1, conversion_2.PropertyToConvert.Length);
var convertedImperialLength = lengthConversion.toImperial();
var convertedMetricLength = lengthConversion.toMetric();
console.log("To Imperial: 1 feet  is:  " + convertedImperialLength + " meters");
console.log("To Metric: 1 m  is:  " + convertedMetricLength + " feet");
//Instantiate Conversion object for Mass
var massConversion = new conversion_1.Conversion(1, conversion_2.PropertyToConvert.Mass);
var convertedImperialMass = massConversion.toImperial();
var convertedMetricMass = massConversion.toMetric();
console.log("To Imperial: 1 kg  is:  " + convertedImperialMass + " lb");
console.log("To Metric: 1 lb  is:  " + convertedMetricMass + " kg");
//Instantiate Conversion object for Volume
var volumeConversion = new conversion_1.Conversion(1, conversion_2.PropertyToConvert.Volume);
var convertedImperialVolume = volumeConversion.toImperial();
var convertedMetricVolume = volumeConversion.toMetric();
console.log("To Imperial: 1 cubic ft  is:  " + convertedImperialVolume + " cubic meter");
console.log("To Metric: 1 cubic meter  is:  " + convertedMetricVolume + " cubic feet");
