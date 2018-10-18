// 全局过滤器
exports.handleCity = (value) => {
  if (value.indexOf('市') !== -1) {
    return value.substring(0, value.length - 1)
  } else {
    return value
  }
}
