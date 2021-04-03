import './App.css';
import Home from './home/home';
import NavBar from './navbar/navbar';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Members from './members/Members.jsx';
import ProjectItems from './blogs/Blog.jsx';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="App">
      <NavBar />
      <Switch>
      <Route exact path="/blogs">
        <ProjectItems/>
      </Route>
      <Route exact path="/members">
        <Members/>
      </Route>
      <Route path="/">
        <Home/>
      </Route>
      </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
