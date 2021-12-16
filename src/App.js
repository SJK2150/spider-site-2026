import './App.css';
import Home from './home/home';
import NavBar from './navbar/navbar';
import Projects from './Projects/Projects';
import Members from './members/Members.jsx';
import ProjectItems from './blogs/Blog.jsx';
import Blog from './blogs/blogs';
import Achievements from './Achievements/Achievements';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
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
      <Route exact path="/blogs">
        <Blog />
      </Route>
      <Route exact path="/members">
        <Members />
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
    </div>
    </Router>
  )
}
export default App;
