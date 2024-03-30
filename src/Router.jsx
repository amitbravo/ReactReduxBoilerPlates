import App from './App'
import { Provider } from 'react-redux'


import { store, persistor } from './store/store'
import { PersistGate } from 'redux-persist/integration/react'




function Router() {

  return (
    <Provider store={store}>
      {/* step 6. #reduxPersistImplemenation , PersistGate , loading can be a loading component too, */}
      <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>  
         
    </Provider>
  )
}

export default Router
