 export interface ConversionInterface {
    toImperial(): string;
    toMetric(): string;
  }

  export enum PropertyToConvert {
    Length = 'length',
    Mass = 'mass',
    Volume = 'volume'
  }