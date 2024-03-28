import App from './App'
import { Provider } from 'react-redux'

import { store } from './store/store'

function Router() {

  return (
    <Provider store={store}>
        <App />
    </Provider>
  )
}

export default Router
