import './App.css';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Main from './Components/Main/Main';
import Parking from './Components/Parking/Parking';
import Weather from './Components/Weather/Weather';
import Covid from './Components/Covid/Covid';

import Sidebar from './Sidebar';

function App() {
  return (
    <Router>
      <div className="Wrapper">
        {/* 사이드바가 있는 자리 */}
        <Sidebar />
        <div className="routeWrap">
          <Route exact path='/Home' 
            component={ Main }/>
          <Route exact path='/Parking'
            component={Parking}/>
          <Route exact path='/Weather' 
            component={Weather}/>
          <Route exact path='/Cvd' 
            component={Covid}/>
        </div>
      </div>
    </Router>
  );
}

export default App;

