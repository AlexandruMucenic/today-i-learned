import { useState } from 'react';
import { CATEGORIES, isValidHttpUrl } from '../constants';
import supabase from '../supabase';

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState('');
  const [source, setSource] = useState('');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    // 1. prevent browser reload
    e.preventDefault();

    // 2. Check if data is valid. If so, create a new fact
    if (text && isValidHttpUrl(source) && category) {
      setIsUploading(true);
      // 3. Uploading fact to SupaBase and receive the new fact object
      const { data: newFact, error } = await supabase
        .from('facts')
        .insert([{ text, source, category }])
        .select();
      setIsUploading(false);

      // 4. Add the new fact to the UI
      !error ? setFacts(facts => [newFact[0], ...facts]) : alert(error.message);

      // 5. Reset input fields
      setText('');
      setSource('');
      setCategory('');

      // 6. Close the form
      // setShowForm(false);
    }
  }

  return (
    <form className='fact-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Share a fact with the world...'
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={isUploading}
      />

      <span>{200 - text.length}</span>

      <input
        type='text'
        placeholder='Trustworthy source...'
        value={source}
        onChange={e => setSource(e.target.value)}
        disabled={isUploading}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value=''>Choose category:</option>
        {CATEGORIES.map(cat => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button className='btn btn-large' disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
