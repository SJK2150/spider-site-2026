import './App.css';
import Home from './home/home';
import NavBar from './navbar/navbar';
import Members from './members/Members.jsx';
import ProjectItems from './blogs/Blog.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Home/> */}
      <Members/>
      {/* <ProjectItems/> */}
    </div>
  );
}

export default App;
