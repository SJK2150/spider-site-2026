import './App.css';
import Home from './home/home';
import NavBar from './navbar/navbar';
import Projects from './Projects/Projects';
import Members from './members/Members.jsx';
import ProjectItems from './blogs/Blog.jsx';
import Blog from './blogs/blogs';
import Achievements from './Achievements/Achievements';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { blogs } from './api/requests';
import { useEffect } from 'react';

function App() {
  const getBlogs = async () => {
    try {
      const data = await blogs();
      if (data.status >= 400) {
        console.log('error:', data.statusText);
        // console.log(data.data.message)
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
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
  );
}
export default App;
