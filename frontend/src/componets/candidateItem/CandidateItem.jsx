import React from 'react';
import styles from './candidates.module.css';
import ModalInfoCandidate from '../modals/modalInfoCandidate/ModalInfoCandidate';
const CandidateItem = () => {
  const [isOpenCandidate, setIsOpenCandidate] = React.useState(false);
  return (
    <div className={styles.item}>
      <div className={styles.item__fio__vacancy}>
        <div className={styles.item__fio}>Ткаченко Роман Александрович</div>
        <div className={styles.item__block__vacancy}>
          <svg height="18px" width="18px" version="1.1" id="Capa_1" viewBox="0 0 306.19 306.19">
            <g>
              <g>
                <path
                  style={{ fill: 'green' }}
                  d="M46.41,306.184L0,259.774l146.343-146.337l-7.399-7.405l22.406-83.62l83.626-22.406l12.101,12.113
			L230.47,38.725l7.823,29.178l29.184,7.823l26.606-26.606l12.107,12.107l-22.412,83.608l-83.626,22.406l-7.399-7.399L46.41,306.184
			z"
                />
              </g>
            </g>
          </svg>
          <div className={styles.item__vacancy}>Сетевой администратор</div>
        </div>
      </div>
      <div className={styles.item__resourse}>hh.ru</div>
      {isOpenCandidate && <ModalInfoCandidate setIsOpenCandidate={setIsOpenCandidate} />}
      <div className={styles.item__candidate__info}>
        <button onClick={() => setIsOpenCandidate(true)}>Детали кандидата</button>
      </div>
      <div className={styles.status}>Отказано</div>
      <div>
        <select className={styles.select}>
          <option>Отказать</option>
          <option>Отправить руководителю</option>
          <option>Отправить на ОБ</option>
        </select>
      </div>
    </div>
  );
};
export default CandidateItem;
