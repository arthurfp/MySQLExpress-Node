const util = {
  /**
     * Format time
     * @param：data
     * @returns yyyy-mm-dd
     */
  CurentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hh = now.getHours();
    const mm = now.getMinutes();
    let clock = `${year}-`;
    if (month < 10) clock += '0';
    clock += `${month}-`;
    if (day < 10) clock += '0';
    clock += `${day} `;
    if (hh < 10) clock += '0';
    clock += `${hh}:`;
    if (mm < 10) clock += '0';
    clock += mm;
    return (clock);
  },
  /**
     * Determine whether it is empty
     * @param：data
     * @returns {boolean}
     */
  isEmpty(data) {
    if (data === {} || data === '{}' || data === '[]' || data === [] || data === '' || data === ' ' || data == null || data === 'null' || data === 'undefined' || data === undefined) {
      return true;
    }
    return false;
  },
};
module.exports = util;
