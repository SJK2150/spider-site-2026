import './App.css';
import Home from './home/home';
import NavBar from './navbar/navbar';
import Projects from './Projects/Projects';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects></Projects>
    </div>
  );
}

export default App;
