export default {
  nowChangeCity (state, city) {
    state.city = city
    try {
      sessionStorage.setItem('city', city)
    } catch (error) {}
  }
}
