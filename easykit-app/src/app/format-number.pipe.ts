import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

  transform(value: any, showDecimal: boolean = true): any {
    if (!value) {
      return '';
    }

    // Arredondar para 2 casas decimais apenas se showDecimal for verdadeiro
    value = showDecimal ? Math.round(value * 100) / 100 : Math.round(value);

    // Convertendo para string e substituindo o ponto por vírgula
    let formattedValue = value.toString().replace('.', ',');

    // Certificar-se de que há duas casas decimais se showDecimal for verdadeiro
    const parts = formattedValue.split(',');
    if (showDecimal) {
      if (parts.length === 1) {
        parts.push('00');
      } else if (parts[1].length === 1) {
        parts[1] += '0';
      }
    }

    // Adicionando pontos como separadores de milhar
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Juntando as partes novamente
    formattedValue = parts.join(showDecimal ? ',' : '');

    return formattedValue;
  }

}
