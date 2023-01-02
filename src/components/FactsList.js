import Fact from './Fact';

function FactList({ facts }) {
  return (
    <section>
      <ul className='facts-list'>
        {facts.map(fact => (
          <Fact key={fact.id} fact={fact} />
        ))}
        <p>There are {facts.length} facts in the database. Add your own!</p>
      </ul>
    </section>
  );
}

export default FactList;
