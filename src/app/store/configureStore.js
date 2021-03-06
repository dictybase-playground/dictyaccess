import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import rootReducer from "app/reducers/rootReducer"

const configureStore = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk))
  return store
}

export default configureStore
