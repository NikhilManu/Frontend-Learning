import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'ellipsis' // name of the pipe
  // by default pipes are pure. keyword --> pure
})
export class EllipsisPipe implements PipeTransform {

  // transform should return a data.
  transform(value: string, ...args: number[]): unknown {

    value =  value + value.substr(0, args[0]);
    return value + '...';
  }

}
