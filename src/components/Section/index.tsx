import Card from '../Card';
import CardList from '../CardList';

import './style.scss';

interface IItem {
  img: string;
  title: string;
  price: string;
  rate: string;
}

const Section = () => {
  const headphones = [
    {
      img: require('../../assets/1.png'),
      title: 'Apple BYZ S852I',
      price: '2927',
      rate: '4.7',
    },
    {
      img: require('../../assets/2.png'),
      title: 'Apple EarPods',
      price: '2327',
      rate: '4.5',
    },
    {
      img: require('../../assets/3.png'),
      title: 'Apple EarPods',
      price: '2927',
      rate: '4.7',
    },
    {
      img: require('../../assets/1.png'),
      title: 'Apple BYZ S852I',
      price: '2927',
      rate: '4.7',
    },
    {
      img: require('../../assets/2.png'),
      title: 'Apple EarPods',
      price: '2327',
      rate: '4.5',
    },
    {
      img: require('../../assets/3.png'),
      title: 'Apple EarPods',
      price: '2927',
      rate: '4.7',
    },
  ];

  const wireless = [
    {
      img: require('../../assets/4.png'),
      title: 'Apple AirPods',
      price: '9527',
      rate: '4.7',
    },
    {
      img: require('../../assets/5.png'),
      title: 'GERLAX GH-04',
      price: '6527',
      rate: '4.5',
    },
    {
      img: require('../../assets/6.png'),
      title: 'BOROFONE BO4',
      price: '7527',
      rate: '4.7',
    },
  ];

  return (
    <div className="container">
      <CardList title={'Наушники'} elements={headphones} />
      <CardList title={'Беспроводные наушники'} elements={wireless} />
    </div>
  );
};

export default Section;
