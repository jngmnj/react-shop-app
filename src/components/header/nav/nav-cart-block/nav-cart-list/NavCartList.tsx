import React, { useEffect } from 'react'
import styles from './NavCartList.jsx';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/redux.js';
import NavCartItem from './nav-cart-item/NavCartItem.jsx';

const NavCartList = () => {
  const { products } = useAppSelector(state => state.cartSlice);

  return (
    <div className={styles.nav_cart_list}>
      {products.map((item) => (
        <NavCartItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default NavCartList