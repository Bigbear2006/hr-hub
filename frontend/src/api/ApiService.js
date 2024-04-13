import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const axiosInstanсe = axios.create({
  baseURL: 'http://new-team.space',
});

// Отправка данных для вакансии
export const sendingDataVacancy = (data, keySkills, setIsOpenForm) => {
  try {
    data.key_skills = keySkills;
    axiosInstanсe.post('/api/vacancies/', data).then((res) => console.log(res));
    setIsOpenForm(false);
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
// Получение всех вакансий
export const getVacanciesApi = (setVacancies) => {
  try {
    const response = axiosInstanсe.get('/api/vacancies/').then((res) => setVacancies(res.data));
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
// Закрытие вакансии
export const closeVacancyApi = (setVacancies) => async (id) => {
  try {
    await axiosInstanсe.delete(`/api/vacancies/${id}`);
    setVacancies((prevItems) => prevItems.filter((item) => item.id !== id));
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
// Авторизация
export const auth = (username, password) => {
  const data = { username, password };
  console.log(data);
  try {
    axiosInstanсe.post('/api/login/', data);
  } catch (error) {
    console.log('Ошибка: ', error);
  }
};
