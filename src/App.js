import NavBar from './components/Nav Bar/NavBar';
import PlayerList from './components/Player List/PlayerList';
import './components/Nav Bar/NavBar.css';


function App() {
  return (
    <div>
      <header>
      <NavBar></NavBar>
      <h4 className="text-center mt-3">Select Players</h4>
      </header>
      <PlayerList></PlayerList>
    </div>
  );
}

export default App;
