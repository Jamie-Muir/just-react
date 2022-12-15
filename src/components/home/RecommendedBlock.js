import React from 'react';
import RestaurantCard from './RestaurantCard';
// import Carousel from './carousel/Carousel';
import classes from './RecommendedBlock.module.scss';

import data from '../../assets/FakeData'


function RecommendedBlock(props) {
	return (
		<div>
			<h1>{props.title}</h1>
			<h3>{props.description}</h3>
			<div className={classes.carousel}>
				{data && data.map(shop => <RestaurantCard key={shop.title} {...shop}/>)}

			</div>
		</div>
	)
}

export default RecommendedBlock;