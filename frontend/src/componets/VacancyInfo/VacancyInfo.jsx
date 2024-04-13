import React from 'react';
import styles from './vacancyinfo.module.css';
import Back from '../UI/goingBack/Back';

const VacancyInfo = ({setIsOpenVacancyInfo, setIsOpenForm}) => {
  return (
    <div className={styles.applications__view}>
      <div className={styles.block__back}>
        <div className={styles.application__title}>Отклики на вакансию</div>
				<Back setIsOpenForm={setIsOpenForm} setIsOpenVacancyInfo={setIsOpenVacancyInfo}/>
      </div>
      <div className={styles.application__item}>
        <div className={styles.item__title}>hh.ru</div>
        <div className={styles.item__candidate}>Ткаченко Роман Александрович</div>
        <div className={styles.item__details}>
          <a href="#">Просмотреть детали</a>
        </div>
      </div>
    </div>
  );
};
export default VacancyInfo;
