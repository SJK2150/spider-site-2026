import './App.css';
import Home from './home/home';
import NavBar from './navbar/navbar';
import Projects from './Projects/Projects';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Achievements from './Achievements/Achievements';
function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route path="/projects">
        <Projects></Projects>
      </Route>
      <Route path="/achievements">
        <Achievements></Achievements>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
