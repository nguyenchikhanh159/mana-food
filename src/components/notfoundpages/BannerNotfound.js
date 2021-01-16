import React from 'react';
import { Link } from 'react-router-dom';

function BannerNotfound() {
	return (

		<section class="banner-area organic-breadcrumb">
		<div class="container">
			<div class="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div class="col-first">
					<h1>404 Not Found</h1>
					<nav class="d-flex align-items-center">
						<Link ><span class="lnr lnr-arrow-right"></span></Link>
						<Link >404 not found</Link>
					</nav>
				</div>
			</div>
		</div>
	</section>

	);
}

export default BannerNotfound;
