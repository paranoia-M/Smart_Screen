import './App.css';
import 'antd/dist/reset.css';
import mineRoutes from './router'
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import HeaderNav from '@/components/HeaderNav';
import { Iconstyle } from '@/assets/icon/iconfont';
import { Globalstyle } from '@/style/global.js';

const store = configureStore()

function App() {
  return (
      <Provider store={store}>
      <div className="App">
      <Iconstyle></Iconstyle>
      <Globalstyle></Globalstyle>
      <HeaderNav/>
      <div className='container'>
      {mineRoutes()}
    </div>
   </div>
    </Provider>
  );
}

export default App;
