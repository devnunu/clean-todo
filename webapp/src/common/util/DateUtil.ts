import moment from 'moment';

class DateUtil {
  public static getCurrentDateFormat() {
    return moment().format('ddd D MMMM');
  }
}

export default DateUtil;
