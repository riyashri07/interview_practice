
import './App.css';
import Bgccolor_change from './component/bgccolor_change';
import Counter from './component/counter';
import Mapdata from './component/mapdata';
import Todo from './component/todo';
function App() {
  return (
    <div className="App">
      <Counter />
      <Mapdata />
      <Bgccolor_change />
      <br />
      <Todo/>
    </div>
  );
}

export default App;
