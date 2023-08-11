import React, { useEffect } from 'react'
import styles from './OrdersList.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchOrder } from '../../../store/order/order.slice';
import CartEmpty from '../../../components/cart-empty/CartEmpty';
import OrderItem from './order-item/OrderItem';

const OrdersList = () => {
  const { id } = useAuth();
  const { order } = useAppSelector(state => state.orderSlice);
  const dispatch = useAppDispatch();

  console.log(order);

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [id]); // id가 바뀔때마다 호출 ? 

  if(!order.length) {
    return <CartEmpty title="주문내역(이)"/>
  }

  return (
    <div className={styles.orders}>
      {order.map(item => (
        <div key={item.id}>
          <div className={styles.order_header}>
            <h3>주문 번호_{item.id}</h3>
            <p>합계 : $ {item.totalPrice.toFixed(2)}</p>
          </div>
          <ul className={styles.orders_list}>
            {item.products.map(order => (
              <OrderItem key={order.id} order={order}/>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default OrdersList