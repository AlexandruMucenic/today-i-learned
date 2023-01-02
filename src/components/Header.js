function Header({ showForm, setShowForm }) {
  const appTitle = 'Today I Learned';

  return (
    <header className='header'>
      <div className='logo'>
        <img src='logo.png' alt='Today I Learned Logo' />
        <h1>{appTitle}</h1>
      </div>
      <button
        className='btn btn-large btn-open'
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Close' : 'Share a fact'}
      </button>
    </header>
  );
}

export default Header;
