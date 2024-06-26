import { useSelector } from 'react-redux';

import { IStore } from '../../types';

import './style.scss';

const Total = () => {
  const { total } = useSelector((state: IStore) => state.cart);

  return (
    <div className="total-block">
      <div className="total-block_top">
        <div>Итого</div>
        <div>{total} ₽</div>
      </div>
      <button>Перейти к оформлению</button>
    </div>
  );
};

export default Total;
