import './App.css';
import PartMatcher from './Components/PartMatcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Part Matcher</h1>
      </header>
      <p>We have a bin of robot parts in a factory. Each part goes to a robot with a specific, unique name. Each part will be described by a string, with the name of the robot and the part name separated by an underscore, like "Rocket_arm".
        
      All robots are made of the same types of parts, and we have a string of all of the parts required to form a complete robot. Given a list of available parts, return the collection of robot names for which we can build at least one complete robot.</p>
      <PartMatcher/>
    </div>
  );
}

export default App;
