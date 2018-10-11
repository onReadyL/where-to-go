export default {
  nowChangeCity (state, city) {
    state.city = city
    try {
      localStorage.setItem('city', city)
    } catch (error) {}
  }
}
