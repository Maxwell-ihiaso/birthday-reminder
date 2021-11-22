import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>
          {people.length} birthday{people.length > 1 && "s"} today
        </h3>
        {people.map((person) => (
          <List key={person.id} data={person} />
        ))}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
