import React, { Fragment } from 'react';
import BannerNotfound from './BannerNotfound';
import NotfoundArea from './NotfoundArea';
import Footer from '../home/Footer';
function NotFound() {
	return (
        <Fragment>
            <BannerNotfound/>
            <NotfoundArea/>
            <Footer/>
        </Fragment>
		

	);
}

export default NotFound;
