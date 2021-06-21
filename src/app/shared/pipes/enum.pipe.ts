import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: any): string[] {
    const keys = Object.keys(data);
    return keys;
  }
}
