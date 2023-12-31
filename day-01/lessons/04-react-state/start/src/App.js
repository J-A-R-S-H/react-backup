function App() {

  function addCounter() {
    console.log('Add one to the counter...');
  }

  function subtractCounter() {
    console.log('Subtract one from the counter...');
  }

  function resetCounter() {
    console.log('Reset the counter...');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <main>
        <section className="counter-section">
          <p>Counter: 0</p>
          <button onClick={addCounter}>Add 1 to Counter</button>
          <button onClick={subtractCounter}>Subtract 1 from the Counter</button>
          <button onClick={resetCounter}>Reset the Counter</button>
        </section>
      </main>
    </div>
  );
  
}

export default App;
