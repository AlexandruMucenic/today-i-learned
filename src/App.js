import './App.css';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactsList';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [showForm, setShowForm] = useState(true);

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? <NewFactForm /> : null}
      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
