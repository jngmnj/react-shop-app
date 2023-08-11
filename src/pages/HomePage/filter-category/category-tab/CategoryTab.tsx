import { FC } from "react";
import styles from './CategoryTab.module.scss'
import { setActiveCategory } from '../../../../store/categories/categories.slice';
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';

type CategoryTabProps = {
  text: string;
  categoryName: string;
}
const CategoryTab: FC<CategoryTabProps> = ({ text, categoryName }) => {
    const dispatch = useAppDispatch();
    const category = useAppSelector((state) => state.categoriesSlice); // redux.js 에서 공통사용빼주기

    const getActiveCategory = () => {
      dispatch(setActiveCategory(categoryName));
    };
     
    console.log("카테고리:",category);
    
    return (
      <button
        className={
          categoryName === category // categoryName은 안바뀌는데 category가 바뀌어서 일치하는것만 active시킴
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