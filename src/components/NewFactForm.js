import { useState } from 'react';
import { CATEGORIES, isValidHttpUrl } from '../constants';

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');

  function handleSubmit(e) {
    // 1. prevent browser reload
    e.preventDefault();

    // 2. Check if data is valid. If so, create a new fact
    text && isValidHttpUrl(source) && category
      ? console.log(text, source, category)
      : console.log('no data');

    // 3. Create a new fact object
    const newFact = {
      id: Math.round(Math.random() * 1000000),
      text,
      source,
      category,
      votesInteresting: 0,
      votesMindblowing: 0,
      votesFalse: 0,
      createdIn: new Date().getFullYear(),
    };

    // 4. Add the new fact to the UI
    setFacts(facts => [newFact, ...facts]);

    // 5. Reset input fields
    setText('');
    setSource('');
    setCategory('');

    // 6. Close the form
    setShowForm(false);
  }

  return (
    <form className='fact-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Share a fact with the world...'
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <span>{200 - text.length}</span>

      <input
        type='text'
        placeholder='Trustworthy source...'
        value={source}
        onChange={e => setSource(e.target.value)}
      />

      <select value={category} onChange={e => setCategory(e.target.value)}>
        <option value=''>Choose category:</option>
        {CATEGORIES.map(cat => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button className='btn btn-large'>Post</button>
    </form>
  );
}

export default NewFactForm;
