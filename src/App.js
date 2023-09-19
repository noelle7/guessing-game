import './App.css';
import Welcome from './pages/Welcome/Welcome';
import Gameinstruction from './components/Gameinstruction';
import Response from './components/Response';

function App() {
  return (
    <div className='App'>
      <Welcome />
      <Gameinstruction />
    </div>
  );
}

export default App;
