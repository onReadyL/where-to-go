export default {
  nowChangeCity (state, city) {
    state.city = city
    try {
      localStorage.setItem('currentCity', city)
    } catch (error) {}
  }
}
