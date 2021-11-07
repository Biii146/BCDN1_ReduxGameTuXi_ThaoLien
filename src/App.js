import logo from './logo.svg';
import './App.css';
import GameOanTuXi from './BaiTapGameOanTuXi/GameOanTuXi';
import {Provider} from 'react-redux'
import {store} from './redux/configStore'

function App() {
  return (
    <div>
      <Provider store={store}>
        <GameOanTuXi/>
      </Provider>
      
    </div>
  );
}

export default App;
