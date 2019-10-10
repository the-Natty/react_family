export default function counter(state = 0, action) {
  switch (action.type) {
    case 'addCounter':
      return state + 1
    case 'rducCounter':
      return state - 1
    default:
      return state
  }
}