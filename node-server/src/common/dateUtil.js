const moment = require('moment');
const getCurrentDate = () => {
  const date = new Date();
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

const getTodayStartDate = () => {
  var date = new Date();
  date.setHours(0, 0, 0, 0);
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

const getTodayEndDate = () => {
  var date = new Date();
  date.setHours(23, 59, 59, 999);
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
};

module.exports = { getCurrentDate, getTodayStartDate, getTodayEndDate };
