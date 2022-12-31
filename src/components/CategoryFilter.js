import { CATEGORIES } from './../Categories';

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li className='category'>
          <button className='btn btn-all-categories'>All</button>
        </li>
        {CATEGORIES.map(cat => (
          <li key={cat.name} className='category'>
            <button
              className='btn btn-category'
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default CategoryFilter;
