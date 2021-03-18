import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'Portfolio'
})
export class CustomPipe implements PipeTransform {

  transform(tableValue: any, columnName: string): unknown {

    if (tableValue) {
      if (this.checkIfUrl(tableValue)) {
        return '<a href="' + tableValue + '" target="_blank">URL</a>'
      }
      if (columnName === 'tickerSymbol') {
        return '<a href="https://finance.yahoo.com/quote/' + tableValue + '" target="_blank">' + tableValue + '</a>'
      }
    }
    return tableValue;
  }

  private checkIfUrl(value: string) {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  }
}
