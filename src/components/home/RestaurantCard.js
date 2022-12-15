import React from 'react';
import Card from '../UI/Card';

import classes from './RestaurantCard.module.scss';

function RestaurantCard(props) {

	const imageStyle = {
		backgroundImage: `url( ${props.imageUrl} )`
	}
	const offerDiv = <div className={classes.offer}> <p>{props.offer}</p> </div>
	
	return (
		<div className={classes.restaurantCard}>
			<div 
				className={classes.restaurantImage} 
				style={imageStyle}
			/>
			<Card className={classes.restaurantInfo}>
				<div>
					<h3>{props.title}</h3>
					<ul>
						{props.foodStylesList && props.foodStylesList.map(item => <li key={item}>{item}</li>)}
					</ul>
					<p>No minimum order</p>
				</div>

				<div className={classes.restaurantCardData}>
					<div className={classes.datagroup}>
						<p>{props.timeToDelivery}</p>
					</div>
					<div className={classes.datagroup}>
						<p>{props.distance}</p>
						<p>{props.rating}</p>
					</div>
				</div>
				{ props.offer && offerDiv }
			</Card>
		</div>
	)
}

export default RestaurantCard;