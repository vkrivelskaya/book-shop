import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

  transform(arr: any[], orderedBy: string, isDescending: boolean): any[] {
    if(typeof arr[0][orderedBy] === 'string') {
      return isDescending
    ? arr.sort((a, b) => b[orderedBy].localeCompare(a[orderedBy]))
    : arr.sort((a, b) => a[orderedBy].localeCompare(b[orderedBy]));
    } else {
      return isDescending
    ? arr.sort((a, b) => (b[orderedBy] - a[orderedBy]))
    : arr.sort((a, b) => (a[orderedBy] - b[orderedBy]));
    }
  }
}
