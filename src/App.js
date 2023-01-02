import './App.css';
import { useState } from 'react';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactsList';
import Header from './components/Header';
import { initialFacts } from './constants';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState(initialFacts);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewFactForm setFacts={setFacts} setShowForm={setShowForm} />
      ) : null}
      <main className='main'>
        <CategoryFilter />
        <FactList facts={facts} />
      </main>
    </>
  );
}

export default App;
