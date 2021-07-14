import {BrowserRouter as Router,
Switch,Route
} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About';
import Navbar from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import Happiness from './component/Happiness';
function App() {
  return (
  <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/happiness' component={Happiness}></Route>
        </Switch>
      </Router>
  </>
  );
}

export default App;
