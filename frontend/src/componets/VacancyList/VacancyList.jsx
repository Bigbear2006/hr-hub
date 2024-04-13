import React from 'react';
import styles from './vacancylist.module.css';

const VacancyList = ({ setIsOpenVacancyInfo, vacancies, closeVacancy }) => {
  return (
    <div className={styles.list}>
      {vacancies.length === 0 ? (
        <div>Нет вакансий</div>
      ) : (
        <div className={styles.items}>
          {vacancies.map((item) => (
            <div className={styles.item} key={item.id}>
              <div className={styles.item__title}>{item.name}</div>
              <div className={styles.item__response} onClick={() => setIsOpenVacancyInfo(true)}>
                0 откликов
              </div>
              <button onClick={() => closeVacancy(item.id)} className={styles.item__button}>Закрыть</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default VacancyList;
