import { createStore } from 'redux'

import reducers from './reducers/reducers'
const initState = {
  counter: 0
}

const store = createStore(
  reducers,
  initState
)

export default store