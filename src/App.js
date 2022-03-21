import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

function App() {
  return (
    <div className="App" style={{border: '3px solid purple', margin: '30px', color: 'indigo'}}>
      <Device name='uPhone' price='15555'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
