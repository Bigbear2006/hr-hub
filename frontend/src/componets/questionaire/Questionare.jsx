import React from 'react';
import data from '../../resume.json';
import styles from './questionaire.module.css';
const Questionare = () => {
  return (
    <div className={styles.questionare}>
      <div>
        <span>{data.name.first_name} </span>
        <span>{data.name.middle_name} </span>
        <span>{data.name.last_name} </span>
      </div>
			<div>Проживает: {data.location}</div>
			<div>Гражданство: {data.citizenship}</div>
			<div><span>{data.age} лет,</span> <span>родился {data.birth_date}</span></div>
			<div>{data.phone}</div>
			<div>{data.email}</div>
			<div>Желаемая должность и зарплата</div>
			<h2>{data.desired_position}</h2>
			<div>Образование</div>
			<div>{data.education}</div>
			
    </div>
  );
};
export default Questionare;
