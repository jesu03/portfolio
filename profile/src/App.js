import './App.css';
import Header from './Components/Header';
import Topcontainer from './Components/Topcontainer';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <Header/>
    <Topcontainer/>
    <Skill/>
    <Project />
    <Contact/>
    </div>
  );
}

export default App;
