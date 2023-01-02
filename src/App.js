import './App.css';
import { useEffect, useState } from 'react';
import supabase from './supabase';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactsList';
import Header from './components/Header';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    async function getFacts() {
      let { data: facts, error } = await supabase.from('facts').select('*');
      error ? console.log(error) : setFacts(facts);
    }
    getFacts();
  }, []);

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
