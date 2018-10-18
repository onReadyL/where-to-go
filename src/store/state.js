// 避免浏览器禁用了本地储存
let defaultCity = '北京'
try {
  if (localStorage.getItem('currentCity')) {
    defaultCity = localStorage.getItem('currentCity')
  }
} catch (error) {}

export default {
  city: defaultCity
}
