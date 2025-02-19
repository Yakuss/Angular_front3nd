import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

 /* transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }*/

  transform(list: any[], filterText: string): any {
    return list ? list.filter(item =>
    item.title.toLowerCase().includes(filterText)) : [];
    }
}
