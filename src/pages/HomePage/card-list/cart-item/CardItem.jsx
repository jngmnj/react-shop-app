import React from 'react'
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import styles from './CardItem.module.scss';
import { addToCart } from '../../../../store/cart/cart.slice';

const CardItem = ({ item }) => {
  // console.log(item);

  const { products } = useAppSelector(state => state.cartSlice);
  const productMatching = products.some((product) => product.id === item.id);
  // item과 products의 아이템이 하나라도 맞는다면 
  const dispatch = useAppDispatch();

  const addItemToCart = () => {
    dispatch(addToCart(item));
  }

  return (
    <li className={styles.card_item}>
      <Link to={`/product/${item.id}`}>
        <img
          src={item.image}
          width={"80%"}
          height={"200px"}
          alt="product card"
        />
      </Link>

      <h5>{item.title.substring(0, 20)}...</h5>
      <div>
        <button
          disabled={productMatching}
          onClick={() => !productMatching && addItemToCart()} 
        >
          {productMatching ? "장바구니에 담긴 제품" : "장바구니에 담기"}
        </button>
        <p>$ {item.price}</p>
      </div>
    </li>
  );
}

export default CardItem