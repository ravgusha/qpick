import CardList from '../../components/CardList';
import { headphones, wireless } from '../../data';

const Homepage = () => {
  return (
    <div className="container">
      <CardList title={'Наушники'} products={headphones} type={'catalog'} />
      <CardList
        title={'Беспроводные наушники'}
        products={wireless}
        type={'catalog'}
      />
      ;
    </div>
  );
};

export default Homepage;
