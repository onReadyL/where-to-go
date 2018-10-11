// 避免浏览器禁用了本地储存
let defaultCity = '北京'
try {
  if (localStorage.getItem('city')) {
    defaultCity = localStorage.getItem('city')
  }
} catch (error) {}

export default {
  city: defaultCity
}
