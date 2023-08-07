import React from 'react'
import styles from './CategoryTab.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

const CategoryTab = ({ text, categoryName }) => {
    // const dispatch = useDispatch();
    // const category = useSelector((state) => state.categoriesSlice);
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.categoriesSlice); // redux.js 에서 공통사용빼주기
    // console.log(category); // undefined error

    const getActiveCategory = () => {
        dispatch(setActiveCategory(categoryName))
    }
    
    return (
      <button
        className={
          categoryName === category
            ? styles.active_category
            : styles.category_button
        }
        onClick={getActiveCategory}
      >
        {text}
      </button>
    );
}

export default CategoryTab