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
      title: 'Apple EarPod',
      price: '2327',
      rate: '4.5',
    },
    {
      img: require('../../assets/3.png'),
      title: 'Apple EarPod',
      price: '2927',
      rate: '4.7',
    },
  ];

  return (
    <div className="container">
      <h2>Наушники</h2>
      {headphones.map((element) => (
        <div>
          <img src={element.img} alt="" />
          <h3>{element.title}</h3>
          <p>{element.price}</p>
          <p>{element.rate}</p>
        </div>
      ))}
    </div>
  );
};

export default Section;
