/**
 * Format data
 */
function format(type, data, res) {
  return res.send({
    success: type,
    data,
    msg: 'msg',
  });
}

module.exports = format;
