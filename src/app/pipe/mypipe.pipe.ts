import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MypipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if (value) {
      if (value < 0) return 'Early';
      else if (value >= 0 && value <= 300) return 'On Time';
      else return 'Late';
    }
    else
      return "has no data"

  }


}
