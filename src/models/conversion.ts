 export interface ConversionInterface {
    toImperial(): string;
    // toMetric(): null | number;
  }


  export enum PropertyToConvert {
    Length = 'length',
    Mass = 'mass',
    Volume = 'volume'
  }