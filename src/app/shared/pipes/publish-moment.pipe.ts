import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Post } from '../models/post';

@Pipe({
  name: 'publishMoment'
})
export class PublishMomentPipe implements PipeTransform {

  transform(createdDate: any): any {
    if(moment().diff(createdDate, 'm') <= 0) {      
      return `${moment().diff(createdDate, 's')}s.`
    } else if(moment().diff(createdDate, 'm') > 0 && moment().diff(createdDate, 'm') < 60) {      
      return `${moment().diff(createdDate, 'm')}m.`
    } else {
      return `${moment().diff(createdDate, 'h')} hours ago.`
    }
  }

}
