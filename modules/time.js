import { DateTime } from './luxon.js';

const currentDate = (tag) => {
  const time = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  tag.textContent = time;
};

export default currentDate;