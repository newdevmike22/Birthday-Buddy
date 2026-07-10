import { useState } from "react";
import data from "./components/data";
import List from "./components/List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <section className="w-[90vw] max-w-[600px] my-20 bg-white rounded-[0.25 rem] py-6 px-8 shadow-[0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06))]">
        <h1 className="mb-[3rem] mt-[2.5rem] text-4xl text-center font-bold">{people.length} Birthdays Today</h1>
        <List people={people} />
        <button type="button" className="btn btn-block" onClick={() => setPeople([])}>
          clear all
        </button>
      </section>
    </main>
  );
};

export default App;
