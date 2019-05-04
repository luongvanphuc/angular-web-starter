import { Injectable } from '@angular/core';
import { NgbDateAdapter, NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { formatDate } from '../helpers';

@Injectable()
export class NgbDateNativeAdapter extends NgbDateAdapter<Date> {
  fromModel(date: Date): NgbDateStruct {
    return (date && date.getFullYear) ?
      { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
  }

  toModel(date: NgbDateStruct): Date {
    return date && date.year && date.month ? new Date(date.year, date.month - 1, date.day) : null;
  }
}

@Injectable()
export class NgbDateFRParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    // value is like Sep 05, 2018
    if (value) {
      const date = new Date(value);
      return (date && date.getFullYear) ?
        { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } : null;
    }

    return null;
  }

  format(date: NgbDateStruct): string {
    const dateObject = date && date.year && date.month ? new Date(date.year, date.month - 1, date.day) : null;
    if (dateObject) {
      return formatDate(dateObject);
    }

    return '';
  }
}
