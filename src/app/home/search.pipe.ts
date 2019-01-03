import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'customerEmailFilter'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.name.toLocaleLowerCase().includes(args)) || (val.sallery.toLocaleLowerCase().includes(args))|| (val.designation.toLocaleLowerCase().includes(args));
      return rVal;
    })

  }

}