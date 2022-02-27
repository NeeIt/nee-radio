import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class DateService{
  constructor(){ }

  static isToday(...strDateList: string[]): boolean{
        let result = false;
        const today = new Date();

        strDateList.forEach(strDate => {
          let date: Date;

          if (strDate.split('-').length === 3){
            date = new Date(strDate);
          } else {
            date = new Date(today.getFullYear() + '-' + strDate);
          }

          if (date.getDate() === today.getDate()
          && date.getMonth() === today.getMonth()
          && date.getFullYear() === today.getFullYear()){
            result = true;
          }
        });

      return result;
  }

  static isInterval(strDateFrom: string, strDateTo: string): boolean{
    const today = new Date();
    const [fromMonth, fromDay] = strDateFrom.split('-');
    const [toMonth, toDay] = strDateTo.split('-');

    const dateFrom = new Date(today.getFullYear(), +fromMonth - 1, +fromDay);
    const dateTo = new Date(today.getFullYear(), +toMonth - 1, +toDay);

    return today > dateFrom && today < dateTo;
  }
}
