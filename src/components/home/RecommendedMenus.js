import React from 'react';

import classes from './RecommendedMenus.module.scss';
import RecommendedBlock from './RecommendedBlock';

function RecommendedMenus() {
	return (
		<div className={classes.carouselWrapper}>
			<RecommendedBlock
				title='Bring on Breakfast'
				description='Start your day right with breakfast delivered'
			/>
			<RecommendedBlock
				title='Top-Rated Nearby'
				description='x'
			/>
		</div>
	)
}

export default RecommendedMenus;