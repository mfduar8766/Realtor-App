import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<string>, args?: any): any {

    if (array) {
      let sortField = args[0];
      let sortDirection = args[1];
      let modifire = 1;

      if(sortDirection == 'desc') {   //Toggle between asc & desc values//
        modifire = -1;
      }

      array.sort((a: any, b: any) => {
        if (a[sortField] < b[sortField]) {
          return -1 * modifire;
        } else if (a[sortField] > b[sortField]) {
          return 1 * modifire;
        } else {
          return 0;
        }
      });
      return array;
    }

  }

}
