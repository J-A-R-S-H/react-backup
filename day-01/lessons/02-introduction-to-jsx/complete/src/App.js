function App() {

  const user = {
    name: 'Michael Whyte',
    age: 47,
    location: 'Vancouver',
    ToDoItems: ['Wash Car', 'Deposit Cheque', 'Do the Dishes', 'Study JavaScript', 'Become a CSS Ninja']
  }

  function outputThingsToDo(thingsToDo){
    if(!thingsToDo || thingsToDo.length < 1){
      return ( <p>Nothing To Do...</p> )
    }else if(thingsToDo.length > 0 && thingsToDo.length <= 3){
      return (
        <ul>
          {thingsToDo.map((thing, i) => <li key={i}>{thing}</li> )}
        </ul>
      )
    }else{
      return (
        <>
          <ul>
            {thingsToDo.map((thing, i) => <li key={i}>{thing}</li> )}
          </ul>
          <p>You have lots to do... : ( ...</p>
        </>
      )
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to JSX</h1>
      </header>
      {/* This is a JSX comment... */}
      <main>
        <section className="about-the-user">
          <h2>User Info</h2>
          {/* Conditional JSX */}
          {/* Ternary Operator */}
          <h3>Username</h3>
          {user.name ? <p>{user.name}</p> : <p>Anonymous</p>}
          {/* Logical AND (&&) Operator */}
          {user.age >= 18 && <button>Click to Vote</button>}
        </section>
        <section className="things-to-do">
          <h2>Things To Do</h2>
          {/* Function that returns valid JSX */}
          {outputThingsToDo(user.ToDoItems)}
        </section>
      </main>
    </div>
  );
  
}

export default App;
