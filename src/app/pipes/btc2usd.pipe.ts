import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btc2usd'
})
export class Btc2usdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = true): number {
    return isBtcToUsd ? amount * 97931 : amount / 97931;
  }

}
