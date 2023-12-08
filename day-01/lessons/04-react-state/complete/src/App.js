import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  function addCounter() {
    setCounter(counter + 1);
  }

  function subtractCounter() {
    setCounter(counter  - 1);
  }

  function resetCounter() {
    setCounter(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <main>
        <section className="counter-section">
          <p>Counter: {counter}</p>
          <button onClick={addCounter}>Add 1 to Counter</button>
          <button onClick={subtractCounter}>Subtract 1 from the Counter</button>
          <button onClick={resetCounter}>Reset the Counter</button>
        </section>
      </main>
    </div>
  );
  
}

export default App;
