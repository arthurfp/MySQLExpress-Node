/**
 * Format data
 */
function format(type, data, msg) {
    return res.send({
        "success": type,
        "data": data,
        "msg": "msg"
    });
}



exports = module.exports = format;
