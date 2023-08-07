import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import productsSlice from './../../../store/products/products.slice'
import styles from './CountProducts.module.scss'

const CountProducts = () => {
    const { products, isLoading } = useAppSelector(state => state.productsSlice)
  return (
    <div className={styles.count_products}>
        {!isLoading && ( // isLoading이 false일때
            <p>
                Showing: {products.length} items
            </p>
        )

        }
    </div>
  )
}

export default CountProducts