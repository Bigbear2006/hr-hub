import React from 'react';
import styles from './createvacancy.module.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Back from './../../UI/goingBack/Back';
import { sendingDataVacancy } from '../../../api/ApiService';

const ModalCreateVacancy = ({ setIsOpenVacancyInfo, setIsOpenForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      employment_type: '',
      address: '',
    },
  });

  const [keySkills, setKeySkills] = React.useState([]);

  const handleKeySkillsChange = (e) => {
    const inputValue = e.target.value;
    const skillsArray = inputValue.split(',').map((skill) => skill.trim());
    setKeySkills(skillsArray);
  };

  const onSubmit = (data) => {
    console.log(data);
    sendingDataVacancy(data, keySkills, setIsOpenForm)
  };

  return (
    <div className={styles.block__form}>
      <div className={styles.close__form}>
        <div className={styles.title}>Создание вакансии</div>
        <div className={styles.flex}>
          <div className={styles.back__img__text}></div>
          <Back setIsOpenVacancyInfo={setIsOpenVacancyInfo} setIsOpenForm={setIsOpenForm} />
        </div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form__group}>
          <p>{errors.title?.message}</p>
          <label>Название вакансии</label>
          <input
            className={styles.input}
            {...register('name', { required: 'Поле не должно быть пустым' })}
            type="text"
          />
        </div>
        <div className={styles.form__group}>
          <p>{errors.address?.message}</p>
          <label>Где искать сотрудника</label>
          <select
            className={styles.input}
            {...register('address', { required: 'Поле не должно быть пустым' })}>
            <option value="Rostov-on-Don">Ростов-на-Дону</option>
            <option value="Moskow">Москва</option>
            <option value="Saint Petersburg">Санкт-Петербург</option>
          </select>
        </div>
        <div className={styles.form__group}>
          <label>Опыт работы</label>
          <div className={styles.block__radio}>
            <div className={styles.input__radio}>
              <input {...register('experience', { required: 'Поле не должно быть пустым' })} type="radio" id="no_experience" name="experience" value='1' />
              <label className={styles.radio__label} htmlFor="no_experience">
                Нет опыта
              </label>
            </div>
            <div className={styles.input__radio}>
              <input {...register('experience', { required: 'Поле не должно быть пустым' })} type="radio" id="0_to_1" name="experience" value='2' />
              <label className={styles.radio__label} htmlFor="0_to_1">
                От 1 года до 3 лет
              </label>
            </div>
            <div className={styles.input__radio}>
              <input  {...register('experience', { required: 'Поле не должно быть пустым' })} type="radio" id="1_to_3" name="experience" value='3' />
              <label className={styles.radio__label} htmlFor="1_to_3">
                От 3 до 6 лет
              </label>
            </div>
            <div className={styles.input__radio}>
              <input {...register('experience', { required: 'Поле не должно быть пустым' })} type="radio" id="3_to_6" name="experience" value='4' />
              <label className={styles.radio__label} htmlFor="3_to_6">
                Более 6 лет
              </label>
            </div>
          </div>
        </div>
        <div className={styles.form__group}>
          <label>Занятость</label>
          <select
            className={styles.input}
            {...register('employment_type', { required: 'Поле не должно быть пустым' })}>
            <option value="1">Полная занятость</option>
            <option value="2">Частичная занятость</option>
            <option value="3">Удалённая работа</option>
          </select>
        </div>
        <div className={styles.form__group}>
          <p>{errors.description?.message}</p>
          <label>Предполагаемый уровень дохода</label>
          <input
            type="number"
            className={styles.input}
            {...register('salary', { required: 'Поле не должно быть пустым' })}></input>
        </div>
				<div className={styles.form__group}>
          <p>{errors.address?.message}</p>
          <label>Выберите департаменты</label>
          <select
            className={styles.input}
            {...register('departament', { required: 'Поле не должно быть пустым' })}>
            <option value='2'>Маркетинговый отдел</option>
            <option value='3'>IT-отдел</option>
            <option value='1'>Отдел безопасностей</option>
          </select>
        </div>
        <div className={styles.form__group}>
          <p>{errors.description?.message}</p>
          <label>Расскажите про вакансию</label>
          <textarea
            className={styles.textarea}
            {...register('description', { required: 'Поле не должно быть пустым' })}></textarea>
        </div>
        <div className={styles.form__group}>
          <p>{errors.description?.message}</p>
          <label>Профессиональные навыки</label>
          <input
            className={styles.input}
            {...register('key_skills', { required: 'Поле не должно быть пустым' })}
            onBlur={handleKeySkillsChange}
          />
        </div>
        <button className={styles.button} type="submit">
          Создать
        </button>
      </form>
    </div>
  );
};
export default ModalCreateVacancy;
