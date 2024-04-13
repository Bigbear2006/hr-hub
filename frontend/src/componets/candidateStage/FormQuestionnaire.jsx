import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './stage.module.css';

const FormQuestionnaire = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <form onSubmit="#" className={styles.form}>
        <div className={styles.questionnaire}>Заполните анкету</div>
        <div className={styles.form__input}>
          <label>ФИО</label>
          <input placeholder="ФИО" type="text" />
        </div>
        <div className={styles.form__input}>
          <label>Дата рождения</label>
          <input type="date" />
        </div>
        <div className={styles.form__input}>
          <label>Адрес проживания (город)</label>
          <input placeholder="Например, Ростов-на-Дону" type="text" />
        </div>
        <div className={styles.form__input}>
          <label>Контактная информация</label>
          <input placeholder="+7 (XXX) XXX-XX-XX" type="text" />
        </div>
        <div className={styles.form__input__video}>
          <label>Загрузите резюме</label>
          <input type="file" accept=".pdf" />
        </div>
        <div className={styles.form__input__video}>
          <label>Загрузите видео</label>
          <input type="file" accept="video/*" />
        </div>

        <div className={styles.form__button}>
          <button onClick={handleFormSubmit}>Следующий шаг</button>
        </div>
      </form>
    </>
  );
};
export default FormQuestionnaire;
