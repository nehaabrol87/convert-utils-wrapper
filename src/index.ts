import { Conversion } from './components/conversion';
import { PropertyToConvert } from './models/conversion';

//Instantiate Conversion object for Length
let lengthConversion = new Conversion(1, PropertyToConvert.Length);

let convertedImperialLength  = lengthConversion.toImperial();
let convertedMetricLength  = lengthConversion.toMetric();

console.log(`To Imperial: 1 feet  is:  ${convertedImperialLength} meters`);
console.log(`To Metric: 1 m  is:  ${convertedMetricLength} feet`);


//Instantiate Conversion object for Mass
let massConversion = new Conversion(1, PropertyToConvert.Mass);

let convertedImperialMass  = massConversion.toImperial();
let convertedMetricMass  = massConversion.toMetric();

console.log(`To Imperial: 1 kg  is:  ${convertedImperialMass} lb`);
console.log(`To Metric: 1 lb  is:  ${convertedMetricMass} kg`);


//Instantiate Conversion object for Volume
let volumeConversion = new Conversion(1, PropertyToConvert.Volume);

let convertedImperialVolume  = volumeConversion.toImperial();
let convertedMetricVolume  = volumeConversion.toMetric();

console.log(`To Imperial: 1 cubic ft  is:  ${convertedImperialVolume} cubic meter`);
console.log(`To Metric: 1 cubic meter  is:  ${convertedMetricVolume} cubic feet`);