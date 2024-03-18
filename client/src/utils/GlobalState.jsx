import { Provider } from 'react-redux' // Got rid of context and bringing in Provider from Redux
//import { reducer } from './reducers'
import store from './store';

export default function StoreProvider(props) {
  // Return the provider component provided by react-redux
  return <Provider store={store} {...props} />;
}

export {StoreProvider};


