import {Pipe, PipeTransform} from '@angular/core';
import {DateTime} from 'luxon';

@Pipe({name: 'fromNow'})
export class FromNowPipe implements PipeTransform{
  transform(value: number, ...args: unknown[]): unknown{
    return DateTime.fromMillis(value).toRelative();
  }
}
