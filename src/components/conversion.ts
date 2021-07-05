import { ConversionInterface, PropertyToConvert } from './../models/conversion';
import convert from 'convert-units';


export class Conversion implements ConversionInterface {
  private valueToConvert: number = 0;
  private propertyToConvert: string = '';
  private fixedPoint: number = 4;

  constructor(valueToConvert: number, propertyToConvert: PropertyToConvert) {
    this.valueToConvert = valueToConvert;
    this.propertyToConvert = propertyToConvert;
  }

  toImperial() {
    let convertedValue =  null;
    if(this.propertyToConvert === PropertyToConvert.Length) {
        convertedValue =  convert(this.valueToConvert).from('ft').to('m');
    }

    if(this.propertyToConvert === PropertyToConvert.Mass) {
        convertedValue =  convert(this.valueToConvert).from('kg').to('lb');
    }

    if(this.propertyToConvert === PropertyToConvert.Volume) {
        convertedValue =  convert(this.valueToConvert).from('ft3').to('m3');
    }
    return convertedValue!.toFixed(this.fixedPoint);
  }


  toMetric() {
    let convertedValue =  null;
    if(this.propertyToConvert === PropertyToConvert.Length) {
        convertedValue =  convert(this.valueToConvert).from('m').to('ft');
    }

    if(this.propertyToConvert === PropertyToConvert.Mass) {
        convertedValue =  convert(this.valueToConvert).from('lb').to('kg');
    }

    if(this.propertyToConvert === PropertyToConvert.Volume) {
        convertedValue =  convert(this.valueToConvert).from('m3').to('ft3');
    }
    return convertedValue!.toFixed(this.fixedPoint);
  }
}