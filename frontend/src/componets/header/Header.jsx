import React from 'react';
import styles from './header.module.css';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className="header__container container">
        <h1 className={styles.header__title}>HRHub</h1>
        <nav className={styles.nav}>
          <ul className={styles.items}>
            <li className={styles.item}>
              <Link to="/vacancies">Вакансии</Link>
            </li>

            <>
              <li className={styles.item}>
                <Link to="/candidates">Кандидаты</Link>
              </li>
              <li className={styles.item}>
                <Link to="/employees">Сотрудники</Link>
              </li>
            </>

            <li className={styles.item}>
              <Link to="/events">Мероприятия</Link>
            </li>
            <li className={styles.item}>
              <Link to="/calendar">Календарь</Link>
            </li>
          </ul>
        </nav>
        <button onClick={() => navigate('/login')} className={styles.header__button}>
          Выйти
        </button>
      </div>
    </div>
  );
};
export default Header;
