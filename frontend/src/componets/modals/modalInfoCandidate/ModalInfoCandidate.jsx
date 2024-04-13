import React from 'react';
import styles from './infoCandidate.module.css';
import video from '../../../videos/video_2024-04-13_02-32-29.mp4';
const ModalInfoCandidate = ({setIsOpenCandidate}) => {
  return (
    <div className={styles.modal__overlay}>
      <div className={styles.modal}>
        <div className={styles.questionnaire}>Анкета кандидата</div>
        <div className={styles.video}>
          <video controls>
            <source src={video} type='video/mp4'  />
          </video>
        </div>
        <div className={styles.test}>
          Тестовое задание: <span>76%</span>
        </div>
        <div className={styles.psychology}>
          Психологический тест: <span>44%</span>
        </div>
        <div className={styles.block__remove}>
          <button onClick={() => setIsOpenCandidate(false)}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};
export default ModalInfoCandidate;
