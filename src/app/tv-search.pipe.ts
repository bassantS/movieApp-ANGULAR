import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tvSearch'
})
export class TvSearchPipe implements PipeTransform {

  transform(trendingTv: any[], term:string): any[] {
    return trendingTv.filter((tv)=>tv.name.toLowerCase().includes(term.toLowerCase()));
  }

}
