import './App.css';
import InputComponent from './inputComponent.js';

function App() {
  return (
    <div className="m-2">
      <h1 className="display-1 text-center bg-info py-4">Quizzo</h1>
      <h2>Q. What’s your favorite way to spend a day off?</h2>
      <InputComponent name="inputComponent1" id="id1" optionVal="Gaming" />
      <InputComponent name="inputComponent2" id="id2" optionVal="Netflix and chill" />
      <InputComponent name="inputComponent3" id="id3" optionVal="Travelling" />
      <InputComponent name="inputComponent4" id="id4" optionVal="Reading" />
    </div>
  );
}

export default App;
