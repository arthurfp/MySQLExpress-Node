var util = {
    /**
     * Format time
     * @param：data
     * @returns yyyy-mm-dd
     */
    CurentTime: function(param) {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hh = now.getHours();
        var mm = now.getMinutes();
        var clock = year + "-";
        if (month < 10)
            clock += "0";
        clock += month + "-";
        if (day < 10)
            clock += "0";
        clock += day + " ";
        if (hh < 10)
            clock += "0";
        clock += hh + ":";
        if (mm < 10) clock += '0';
        clock += mm;
        return (clock);
    },
    /**
     * Determine whether it is empty
     * @param：data
     * @returns {boolean}
     */
    isEmpty: function(data) {
        if (data == {} || data == "{}" || data == "[]" || data == [] || data == "" || data == " " || data == null || data == "null" || data == "undefined" || data == undefined) {
            return true;
        };
        return false;
    },
}
exports = module.exports = util;
