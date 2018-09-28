// 避免浏览器禁用了本地储存
let defaultCity = '成都'
try {
  if (sessionStorage.getItem('city')) {
    defaultCity = sessionStorage.getItem('city')
  }
} catch (error) {}

export default {
  city: defaultCity
}
