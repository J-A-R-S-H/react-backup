function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter App</h1>
      </header>
      <main>
        <section className="counter-section">
          <p>Counter: 0</p>
          <button>Add 1 to Counter</button>
          <button>Subtract 1 from the Counter</button>
          <button>Reset the Counter</button>
        </section>
        <section className="say-hello-section">
          <button>Say Hello</button>
        </section>
      </main>
    </div>
  );
  
}

export default App;
