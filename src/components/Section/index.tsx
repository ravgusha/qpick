import CardList from '../CardList';

import './style.scss';

const Section = () => {
  const headphones = [
    {
      img: require('../../assets/1.png'),
      title: 'Apple BYZ S852I',
      price: '2927',
      rate: '4.7',
      id: 1
    },
    {
      img: require('../../assets/2.png'),
      title: 'Apple EarPods',
      price: '2327',
      rate: '4.5',
      id: 12
    },
    {
      img: require('../../assets/3.png'),
      title: 'Apple EarPods',
      price: '2927',
      rate: '4.7',
      id: 123
    },
    {
      img: require('../../assets/1.png'),
      title: 'Apple BYZ S852I',
      price: '2927',
      rate: '4.7',
      id: 1234
    },
    {
      img: require('../../assets/2.png'),
      title: 'Apple EarPods',
      price: '2327',
      rate: '4.5',
      id: 12345
    },
    {
      img: require('../../assets/3.png'),
      title: 'Apple EarPods',
      price: '2927',
      rate: '4.7',
      id: 123456
    },
  ];

  const wireless = [
    {
      img: require('../../assets/4.png'),
      title: 'Apple AirPods',
      price: '9527',
      rate: '4.7',
      id: 9
    },
    {
      img: require('../../assets/5.png'),
      title: 'GERLAX GH-04',
      price: '6527',
      rate: '4.5',
      id: 98
    },
    {
      img: require('../../assets/6.png'),
      title: 'BOROFONE BO4',
      price: '7527',
      rate: '4.7',
      id: 987
    },
  ];

  return (
    <div className="container">
      <CardList title={'Наушники'} products={headphones} type={"catalog"}/>
      <CardList title={'Беспроводные наушники'} products={wireless} type={"catalog"}/>
    </div>
  );
};

export default Section;
