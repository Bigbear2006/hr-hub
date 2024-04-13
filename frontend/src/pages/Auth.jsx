import React from 'react'
import imgLogo from '../img/img-01.png'
import FormAuth from '../componets/forms/formAuth/FormAuth';
const Auth = () => {
	return (
		<section className="section__auth">
		<div className="authorization">
			<div className="authorization__body">
				<div className="authorization__img">
					<img src={imgLogo} alt="logo" />
				</div>
				<div>
					<div className="form__title">
						Авторизация
					</div>
					<FormAuth/>
				</div>
			</div>
			<div className="information__block">Управляйте проектами и задачами своего коллектива</div>
		</div>
	</section>
	)
}
export default Auth;
