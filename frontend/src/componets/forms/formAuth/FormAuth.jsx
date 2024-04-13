import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../api/ApiService';

const FormAuth = () => {
	const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
		auth(data.email, data.pass)
		navigate('/vacancies')
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="authorization__form">
      <div className="form__input-block">
        <p>{errors.email?.message}</p>
        <div className="form__input login__input">
          <input
            {...register('email', { required: 'Поле не должно быть пустым' })}
            type="text"
            className="input__auth login"
            placeholder="Email"
            tabIndex={1}
          />
        </div>
        <p>{errors.pass?.message}</p>
        <div className="form__input pass__input">
          <input
            {...register('pass', { required: 'Поле не должно быть пустым' })}
            type="password"
            className="input__auth pass"
            placeholder="Пароль"
            tabIndex={2}
          />
        </div>
      </div>
      <button type="submit" className="form__button">
        Войти
      </button>
    </form>
  );
};
export default FormAuth;
