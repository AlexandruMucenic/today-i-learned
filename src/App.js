import './App.css';
import NewFactForm from './components/NewFactForm';
import CategoryFilter from './components/CategoryFilter';
import FactList from './components/FactsList';

function App() {
  const appTitle = 'Today I Learned';

  return (
    <>
      {/* Header */}
      <header className='header'>
        <div className='logo'>
          <img src='logo.png' alt='Today I Learned Logo' />
          <h1>{appTitle}</h1>
        </div>
        <button className='btn btn-large btn-open'>Share a fact</button>
      </header>
      <NewFactForm />
      <main className='main'>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

export default App;
