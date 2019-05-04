import { DatePipe } from '@angular/common';
import { DATE_FORMAT } from '../constants';

const datePipe = new DatePipe('en-US');

export const formatDate = (date: any, format = DATE_FORMAT, timezone?: string, locale?: string): string | null => {
  if (!date) {
    return '';
  }

  return datePipe.transform(date, format, timezone, locale);
};

export const toTimeAgo = (date: any) => {
  if (!date) {
    return '';
  }

  let tDate;
  if (typeof date === 'string') {
    tDate = new Date(date);
  }
  else if (typeof date.getTime === 'function') {
    tDate = date;
  }

  if (!tDate) {
    return '';
  }

  const msPerMinute = 60 * 1000;
  const msPerHour = msPerMinute * 60;
  const msPerDay = msPerHour * 24;
  const msPerMonth = msPerDay * 30;
  const msPerYear = msPerDay * 365;
  const today = new Date();
  const elapsed = today.getTime() - tDate.getTime();

  if (elapsed < msPerMinute) {
    return 'Less than a minute';
  } else if (elapsed < msPerHour) {
    const mins = Math.round(elapsed / msPerMinute);
    return `${mins} minute${mins > 1 ? 's' : ''} ago`;
  } else if (elapsed < msPerDay) {
    const hours = Math.round(elapsed / msPerHour);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else if (elapsed < msPerMonth) {
    const days = Math.round(elapsed / msPerDay);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    return formatDate(tDate);
  }
};
