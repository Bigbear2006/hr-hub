import React, { useEffect } from 'react';
import { useState } from 'react';
import FormCreateVacancy from '../componets/forms/formCreateVacancy/FormCreateVacancy';
import Header from '../componets/header/Header';
import VacancyList from '../componets/VacancyList/VacancyList';
import VacancyInfo from './../componets/VacancyInfo/VacancyInfo';
import { getVacanciesApi, closeVacancyApi } from '../api/ApiService';
import FormQuestionnaire from '../componets/candidateStage/FormQuestionnaire';
import TestTask from '../componets/candidateStage/TestTask';
import PsyhologyTest from '../componets/candidateStage/PsyhologyTest';

const CabinetHr = () => {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [isOpenVacancyInfo, setIsOpenVacancyInfo] = useState(false);
  const [vacancies, setVacancies] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const isCandidate = true;


  const handleFormSubmit = () => {
    setCurrentStep(2);
  };

  const handleTest1Complete = () => {
    setCurrentStep(3);
  };
  const handleTest2Complete = () => {
    setCurrentStep(4);
  };

  const handleChange = () => {
    setIsOpenForm(true);
    setIsOpenVacancyInfo(false);
  };

  const closeVacancy = closeVacancyApi(setVacancies);

  useEffect(() => {
    getVacanciesApi(setVacancies);
  }, [setVacancies]);
  console.log(vacancies);
  return (
    <div>
      <Header />
      <div className="hr-dashboard">
        <div className="hr-container container">
          {!isCandidate ? (
            <>
              <div className="hr-create__vacancies">
                {!isOpenForm && (
                  <button onClick={handleChange}>
                    Создать <span>+</span>
                  </button>
                )}
              </div>
              {(isOpenForm || isOpenVacancyInfo) && (
                <>
                  {isOpenVacancyInfo ? (
                    <VacancyInfo
                      setIsOpenForm={setIsOpenForm}
                      setIsOpenVacancyInfo={setIsOpenVacancyInfo}
                    />
                  ) : (
                    <FormCreateVacancy
                      setIsOpenForm={setIsOpenForm}
                      setIsOpenVacancyInfo={setIsOpenVacancyInfo}
                    />
                  )}
                </>
              )}
              {!isOpenForm && !isOpenVacancyInfo && (
                <div className="hr-list__vacancies">
                  <div className="hr-list__title">Список вакансий</div>
                  <VacancyList
                    vacancies={vacancies}
                    closeVacancy={closeVacancy}
                    setIsOpenVacancyInfo={setIsOpenVacancyInfo}
                  />
                </div>
              )}
            </>
          ) : (
            <div className="block__stages">
              {currentStep === 1 && <FormQuestionnaire handleFormSubmit={handleFormSubmit} />}
              {currentStep === 2 && <TestTask handleTest1Complete={handleTest1Complete} />}
              {currentStep === 3 && <PsyhologyTest handleTest2Complete={handleTest2Complete} />}
              {currentStep === 4 && (
                <div>
                  Вы прошли все этапы <br />
                  Ждите результата!
                </div>
              )}
              <div className="stages">
                {' '}
                <div
                  style={{
                    color: currentStep === 1 ? '#029c02' : '#b4b4b4',
                  }}>
                  Заполнение анкеты
                </div>
                <div
                  style={{
                    color: currentStep === 2 ? '#029c02' : '#b4b4b4',
                  }}>
                  Тестовое задание
                </div>
                <div
                  style={{
                    color: currentStep === 3 ? '#029c02' : '#b4b4b4',
                  }}>
                  Психологический тест
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default CabinetHr;
