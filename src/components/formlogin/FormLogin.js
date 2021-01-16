import React, { Fragment } from 'react';
import LoginArea from './LoginArea';
import BannerLogin from './BannerLogin';
import Header from '../home/Header';
function FormLogin() {
	return (
            <Fragment>
             
                <BannerLogin/>
                 <LoginArea/>
            </Fragment>

	);
}

export default FormLogin;
