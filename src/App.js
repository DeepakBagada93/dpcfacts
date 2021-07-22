import {BrowserRouter as Router,
Switch,Route
} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About';
import Navbar from './component/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'
import Happiness from './component/Happiness';
import Spritual  from './component/Spritual';
import Spiritalprops from './component/Spiritalprops';
import Footer from './component/Footer';
import Depression from './component/Depression';

function App() {
  return (
  <>
      <Router>
        <Navbar/>
        <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/happiness' component={Happiness}></Route>
            <Route path='/spritual' component={Spritual}></Route>
            <Route path='/spritalprops' component={Spiritalprops}></Route>
            <Route path='/depression' component={Depression}></Route>
        </Switch>
        <Footer/>
      </Router>
  </>
  );
}

export default App;
