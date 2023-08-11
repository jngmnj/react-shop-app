import React from 'react';
import styles from './NotFoundPage.module.scss';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <div className={styles.not_found}>
          <img src="/img/not-found.png" alt="" />
          <p>요청하신 페이지가 존재하지 않습니다. </p>
          <p>
            <Link to={'/'}>홈으로</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage